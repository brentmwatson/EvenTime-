class CreateEvents < ActiveRecord::Migration[5.0]
  def change
    create_table :events do |t|
      t.string :theme
      t.integer :attendance

      t.timestamps
    end
  end
end
