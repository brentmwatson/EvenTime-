class EventsController < ApplicationController
    acts_as_token_authentication_handler_for User, only: [:create, :update, :destroy]
end
