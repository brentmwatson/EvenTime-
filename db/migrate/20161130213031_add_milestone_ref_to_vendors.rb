class AddMilestoneRefToVendors < ActiveRecord::Migration[5.0]
  def change
    add_reference :vendors, :milestone, foreign_key: true
  end
end
