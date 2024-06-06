class TimeChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "some_channel"
    @time_start = Time.current
    stream_from "time_channel"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
    stop_all_streams
  end

  def receive data
    # Logic when a subscriber sends data to server
    @best_scores = process_scores Score.best_scores
    if data["message"]
      send_modal_message data
    elsif data["name"]
      create_score data
    end
    ActionCable.server.broadcast "time_channel", @best_scores
  end

  private

  def create_score data
    Score.create(user_name: data["name"], time_elapsed: @time_elapsed)
  end

  def send_modal_message data
    time_end = Time.current
    @time_elapsed = time_end - @time_start
    if @best_scores.length == 5
      result = @time_elapsed < @best_scores[-1][:time_elapsed]
      if result
        ActionCable.server.broadcast "time_channel", "display modal"
      end
    elsif @best_scores.length < 5
      ActionCable.server.broadcast "time_channel", "display modal"
    end
  end

  def obtain_scores score_models
    score_models.map { |score_model| score_model[:time_elapsed] }
  end

  def process_scores score_models
    score_models.map { |score_model| { :name => score_model.user_name, :time_elapsed => score_model.time_elapsed } }
  end
end
