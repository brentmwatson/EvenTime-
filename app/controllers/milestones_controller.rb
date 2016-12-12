class MilestonesController < ApplicationController
  before_action :require_user
  before_action :find_milestone, only: [:show, :update, :destroy]
  before_action :find_event, only: [:create, :create_one]


  def show # GET    /api/milestones/:id
      render :json => @milestone
  end


  def create # POST   /api/milestones
    @milestone = Milestone.question(params[:questions])
    # intance var is now array of hash {[],[],[],[]}
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
  end


  def create_one # POST  /api/milestones/new
    @milestone = Milestone.new(milestone_params)
    # if statement for each milestone (title, date, note) for event
      if @event.milestones << @milestone
          render :json => @event, :status => 201
      else
          render :json => "Unable to create checklist item", :status => 422
      end
  end


  def update # PATCH/PUT  /api/milestones/:id
    if @milestone.update(milestone_params)
      render :json => @milestone, :status => 201
    else
      render :json => "Unable to update checklist item", :status => 422
    end
  end


  def destroy # DELETE /api/milestones/:id
    @milestone.destroy
    render :json => "Deleted checklist item", :status => 200
  end

    # DateTime.parse('March 3rd 2013 04:05:06 AM').to_time.class # => Time
    #
    # # Convert Time to Date
    # 1.day.ago.to_date.class # => Date
    #
    # # Convert to DateTime
    # Time.now.to_datetime

  private
    def milestone_params
      params.require(:milestone).permit(:date, :note, :title, :complete)
    end

    def find_event
        @event = current_user.events.find(params[:event_id])
    end

    def find_milestone
        @milestone = current_user.milestones.find(params[:id])
    end
end
