class CreateAddendums < ActiveRecord::Migration[5.0]
  def change
    create_table :addendums do |t|
      t.string :notes

      t.timestamps
    end
  end
end
