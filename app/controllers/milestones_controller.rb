class MilestonesController < ApplicationController
  belongs_to :event
  # has_many :vendors

  def create
  
    @milestones = params[:date, :notes]
      #where and how am I getting milestones
      milestones.each do |milestone|
      @event.milestone << Milestone.create(name: milestone)
      end

  end

  private
  def milestone_params
    params.require(:milestone).permit(:date, :notes)

  end
end
