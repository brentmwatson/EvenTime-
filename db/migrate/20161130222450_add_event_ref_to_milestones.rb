class AddEventRefToMilestones < ActiveRecord::Migration[5.0]
  def change
    add_reference :milestones, :event, foreign_key: true
    add_reference :milestones, :venue, foreign_key: true
    add_reference :milestones, :vendor, foreign_key: true
  end
end
