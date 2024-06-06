class CreateScores < ActiveRecord::Migration[7.0]
  def change
    create_table :scores do |t|
      t.string :user_name
      t.string :time_elapsed

      t.timestamps
    end
  end
end
