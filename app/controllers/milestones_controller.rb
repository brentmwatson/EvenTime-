class MilestonesController < ApplicationController

  def create #POST
    # puts params[:questions]
    @milestone = Milestone.question(params[:questions])# puts @milestone.inspect
    # intance var is now array of hash {[],[],[],[]}
    @event = current_user.events.find(params[:event_id])
    #instance var is now has event_id

    # if statement for each milestone (title, date, note) for event
      if @event.save
        @milestone.each do |milestone| # puts milestone.inspect
          @event.milestones << Milestone.new(milestone)
        end
          render :json => @event, :status => 201
      else
          render :json => "Unable to create event items", :status => 422
      end
    # Rails.logger.info(@event)
  end

  private
  def milestone_params
    params.require(:milestone).permit(:date, :notes, :title, :answer)

  end
end
