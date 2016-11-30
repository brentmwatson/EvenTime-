class CreateContacts < ActiveRecord::Migration[5.0]
  def change
    create_table :contacts do |t|
      t.string :f_name
      t.string :l_name
      t.string :phone_num
      t.string :role

      t.timestamps
    end
  end
end
