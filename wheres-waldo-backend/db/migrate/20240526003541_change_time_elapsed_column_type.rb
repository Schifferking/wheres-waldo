class ChangeTimeElapsedColumnType < ActiveRecord::Migration[7.0]
  def change
    reversible do |direction|
      change_table :scores do |t|
        direction.up { t.change :time_elapsed, :float }
        direction.down { t.change :time_elapsed, :string }
      end
    end
  end
end
