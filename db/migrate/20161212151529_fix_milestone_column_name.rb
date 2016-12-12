class FixMilestoneColumnName < ActiveRecord::Migration[5.0]
  def change
    rename_column :milestones, :answer, :complete
  end
end
