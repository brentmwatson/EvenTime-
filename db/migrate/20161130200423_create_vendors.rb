class CreateVendors < ActiveRecord::Migration[5.0]
  def change
    create_table :vendors do |t|
      t.string :service
      t.references :agreement, foreign_key: true
      t.references :milestone, foreign_key: true
      t.references :contact, foreign_key: true
      t.references :address, foreign_key: true
      t.timestamps
    end
  end
end
