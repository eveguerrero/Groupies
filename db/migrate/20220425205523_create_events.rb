class CreateEvents < ActiveRecord::Migration[6.1]
  def change
    create_table :events do |t|
      t.string :name
      t.string :description
      t.datetime :starttime
      t.datetime :endtime
      t.integer :group_id

      t.timestamps
    end
  end
end
