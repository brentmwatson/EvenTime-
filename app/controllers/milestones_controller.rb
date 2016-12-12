class MilestonesController < ApplicationController
  before_action :require_user
  # before_filter only: :create do
  #   unless @json.has_key?('project') && @json['project'].responds_to?(:[]) && @json['project']['name']
  #   render nothing: true, status: :bad_request
  #   end
  # end
  #
  # before_filter only: :update do
  #   unless @json.has_key?('project')
  #     render nothing: true, status: :bad_request
  #   end
  # end
  #
  # before_filter only: :create do
  #     @project = Project.find_by_name(@json['project']['name'])
  #   end

  def show # GET    /api/milestones/:id(.:format)
      @milestone = current_user.milestones.find(params[:id])
      render :json => @milestone
  end


  def create #POST
    # puts params[:questions]
    @milestone = Milestone.question(params[:questions])
    # intance var is now array of hash {[],[],[],[]}
    @event = find_event #instance var is now has event_id
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


  def create_one # POST 'api/milesone/new'
    @milestone = Milestone.new(milestone_params)
    @event = current_user.events.find(params[:event_id])
    # if statement for each milestone (title, date, note) for event
      if @event.milestones << @milestone
          render :json => @event, :status => 201
      else
          render :json => "Unable to create event items", :status => 422
      end
  end


  def update
    @milestone = current_user.milestones.find(params[:id])
    # @event= current_user.events.milestone.find(params[:event_id])
    puts @milestone.inspect
    if @milestone.update(milestone_params)
      render :json => @milestone, :status => 201
    else
      render :json => "Unable to update checklist item", :status => 422
    end
  end


  def destroy
    @milestone = current_user.milestones.find(params[:id])

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
end
