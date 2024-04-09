class AddDetailsToCharacterPositions < ActiveRecord::Migration[7.0]
  def change
    add_column :character_positions, :x_end, :integer
    add_column :character_positions, :y_end, :integer
  end
end
