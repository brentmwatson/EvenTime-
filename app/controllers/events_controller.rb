class EventsController < ApplicationController
    before_action :require_user
    before_action :find_event, only: [:destroy, :show]

    def index       # GET  /api/events
        @event = Event.all
         render :json => current_user.events.all
    end

    def show        # GET  /api/events/:id
        render :json => @event, :status => 201
    end


    def create      # POST  /api/events
         # takes theme and date for event from '/event/addevent'
        @event = current_user.events.new(event_params)
        if @event.save
            render :json => @event, :status => 201
        else
            render :json => "Unable to create event", :status => 422
        end
    end


    # def update #saves changes to EXISTING record
    # #SAVES AND REDIRECTS add_event event/addevent.... POST/api/event
    # end


    def destroy     # DELETE /api/events/:id
        @event.destroy
    render :json => "Event deleted", :status => 201
    end


    private

    def event_params
        params.require(:event).permit(:theme, :date)
    end

    def find_event
        @event = current_user.events.find(params[:id])
    end
end
