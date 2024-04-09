class ChangeColumnNamesToCharacterPositions < ActiveRecord::Migration[7.0]
  def change
    change_table :character_positions do |t|
        t.rename :x, :x_start
        t.rename :y, :y_start
    end
  end
end
