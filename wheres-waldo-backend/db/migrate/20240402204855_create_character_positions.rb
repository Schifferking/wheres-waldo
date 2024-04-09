class CreateCharacterPositions < ActiveRecord::Migration[7.0]
  def change
    create_table :character_positions do |t|
      t.string :name
      t.integer :x
      t.integer :y

      t.timestamps
    end
  end
end
