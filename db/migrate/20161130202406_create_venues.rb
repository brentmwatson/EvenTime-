class CreateVenues < ActiveRecord::Migration[5.0]
  def change
    create_table :venues do |t|
      t.references :address
      t.references :agreement
      t.references :vendor

      t.timestamps
    end
  end
end
