class MilestonesController < ApplicationController

  # def index #renders all questions GET
  #   @milestones = Milestone.all
  # end
  #
  # def show #reners one question GET
  # end
  #
  # def new #renders questions for milestones GET
  #   @milestone=Milestone.new
  #   @milestone = Milestone.find(params[:event_id])
  # end

  def create #POST
    @milestone = Milestone.question(params[:answer])
    @event = current_user.events.find(params[:event_id])
    # if statement for each milestone (title, date, note) for event
      if 

    Rails.logger.info(@event)
    if @milestones.save
      render :json => @event, :status => 201
    else
      render :json => "Unable to create event items", :status => 422
    end
  end

  # def something
  #   @milestones = Miletones.new(params[:date, :notes])
  #   @milestones = events.find(params[:event_id])
  #   #assign event_id from nested route with instance variable
  #   @milestone.event_id = @event.id
  #   if @milestone.save
  #     render :json => render @event, :status => 201
  #   else
  #     render :json => "Unable to create event items", :status => 422
  #   end
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

  private
  def milestone_params
    params.require(:milestone).permit(:date, :notes, :title, :answer)

  end
end
