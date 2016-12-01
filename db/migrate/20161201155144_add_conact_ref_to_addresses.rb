class AddConactRefToAddresses < ActiveRecord::Migration[5.0]
  def change
    add_reference :addresses, :contact, foreign_key: true
    add_reference :users, :contact, foreign_key: true
    add_reference :venues, :contact, foreign_key: true
    remove_column :venues, :address_id, :string
  end
end
