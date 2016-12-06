class EventsController < ApplicationController
    before_action :require_user

    # def index
    #     # HAS TEMPLATE reders ALL list
    #     if session[:user_id] # ruby session checking for user_id
    #         @lists = current_user.lists.order('created_at') # method called on list
    #         render :lists # show list
    #     else
    #         render :index # go back to the beginning
    #     end
    # end

    def show

    end

    def create
        # Saves new record changes
        # SAVES and RENDERS
        #add_event event/addevent.... POST/api/event
        @event = current_user.events.new(event_params)
        # @event now is [:theme :date, :auth_token, :email]
        if @event.save
            render :json=> {:theme=>event.theme, :date=>event.date}, :status=>201
        else
            render :json=> @event.errors, :status=>422
        end
    end

    # def update #saves changes to EXISTING record
    #   #SAVES AND REDIRECTS
    # end

    # def destroy # DESTROYS and REDIRECTS
    # end

    private

    def event_params
        params.require(:event).permit(:theme, :date)
    end
end
