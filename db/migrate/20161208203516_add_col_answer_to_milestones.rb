class AddColAnswerToMilestones < ActiveRecord::Migration[5.0]
  def change
    add_column :milestones, :answer, :boolean, default: false
  end
end
