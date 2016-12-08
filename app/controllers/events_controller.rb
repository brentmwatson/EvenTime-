class EventsController < ApplicationController
    before_action :require_user

    def index
         render :json=> current_user.events.all
    end

    # def show
    #
    # end



    def create # SAVES and RENDERS
        @event = current_user.events.new(event_params)
        if @event.save
            render :json => @event, :status => 201
        else
            render :json => "Unable to create event", :status => 422
        end
    end

    def update #saves changes to EXISTING record
        #SAVES AND REDIRECTS
        #add_event event/addevent.... POST/api/event
    end

    # def destroy # DESTROYS and REDIRECTS
    # end

    private

    def event_params
        params.require(:event).permit(:theme, :date)
    end
end
