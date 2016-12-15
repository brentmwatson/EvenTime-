class RemoveVendorRefFromMilestones < ActiveRecord::Migration[5.0]
  def change
    remove_column :milestones, :vendor_id, :string
  end
end
