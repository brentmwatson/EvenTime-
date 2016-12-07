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
            # milestones = params[:date, :notes]
            # #where and how am I getting milestones
            # milestones.each do |milestone|
            # @event.milestone << Milestone.create(name: milestone)
            # i think i need to add a name to the milesone or ask FEE
            # end
            render :json=> {:theme=>@event.theme, :date=>@event.date}, :status=>201
        else
            render :json=> "Unable to create event", :status=>422
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
