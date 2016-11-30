class CreateAgreements < ActiveRecord::Migration[5.0]
  def change
    create_table :agreements do |t|
      t.string :document
      t.integer :cost
      t.string :staff
      t.string :payment_form

      t.timestamps
    end
  end
end
