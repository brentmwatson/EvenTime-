class AddDateToEvent < ActiveRecord::Migration[5.0]
  def change
    add_column :events, :date, :string
  end
end