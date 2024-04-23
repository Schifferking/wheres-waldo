class CharacterPositionsController < ApplicationController
  def index
    @character_positions = CharacterPosition.all
    render json: @character_positions
  end
end
