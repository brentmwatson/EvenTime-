class AddVendorRefToAddesses < ActiveRecord::Migration[5.0]
  def change
    add_reference :addresses, :vendor, foreign_key: true
  end
end
