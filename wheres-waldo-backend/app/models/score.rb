class Score < ApplicationRecord
    scope :best_scores, -> { order(:time_elapsed).limit(5) }
end
