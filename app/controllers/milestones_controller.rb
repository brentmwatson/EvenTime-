class MilestonesController < ApplicationController

  def starter #20 questions
    @questions =
  end

  def create

    @milestones = params[:date, :notes]
      #where and how am I getting milestones
      # milestones.each do |milestone|
      # @event.milestone << Milestone.create(name: milestone)
      # end

      # milestones = params[:date, :notes]
      # #where and how am I getting milestones
      # milestones.each do |milestone|
      # @event.milestone << Milestone.create(name: milestone)
      # i think i need to add a name to the milesone or ask FEE
      # end
  end

  private
  def milestone_params
    params.require(:milestone).permit(:date, :notes)

  end
end
