class CreateEvents < ActiveRecord::Migration[6.1]
  def change
    create_table :events do |t|
      t.string :title
      t.string :description
      t.datetime :start
      t.datetime :end
      t.integer :group_id
      t.string :image
      t.timestamps
    end
  end
end
