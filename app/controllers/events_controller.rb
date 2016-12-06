class EventsController < ApplicationController
    acts_as_token_authentication_handler_for User, only: [:create, :update, :destroy]

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
        @event = Event.new() # assign :listname to object @list
        @list.user = current_user # assign :user_id to object @list
        # @list now is [:listname :user_id]
        if @list.save # if save occures
            render :json=> {:success=>true, :auth_token=>resource.authentication_token, :email=>resource.email}

        else
            flash[:notice] = 'Please fill in the feilds.' # flash for user
            render :new
        end
    end

    def create
        # Saves new record changes
        @list = List.new(list_params) # assign :listname to object @list
        @list.user = current_user # assign :user_id to object @list
        # @list now is [:listname :user_id]
        if @list.save # if save occures
            render :json=> {:success=>true, :auth_token=>resource.authentication_token, :email=>resource.email}

        else
            flash[:notice] = 'Please fill in the feilds.' # flash for user
            render :new
        end
    end

    # def update #saves changes to EXISTING record
    #   #SAVES AND REDIRECTS
    # end

    def destroy # DESTROYS and REDIRECTS

    end

    private

    def event_params
        :
    end
end
