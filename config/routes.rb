Rails.application.routes.draw do
#for AJAX request
scope 'api' do
    resources :events
    resources :milestones
    resources :vendors

    resources :contacts
    resources :addresses
    resources :agreements
    resources :addendums
end

  devise_for :users, controllers: {
      sessions: 'users/sessions',
      registrations: 'users/registrations'
  }

  # static routes for React
  root 'static#home'
  post '/event/questions' => 'milestones#create'
  post '/api/milestone/new' =>   'milestones#create_one'
  # playground for all routes front end
  get  '/:catchall/(:id)' => 'static#catchall'

  # routes being called for by react
  # user_registration POST  /users(.:format)          users/registrations#create
  # new_user_session  GET   /users/sign_in(.:format)      users/sessions#new
  # user_session      POST  /users/sign_in(.:format)      users/sessions#create
  #                   PATCH /api/milestones/:id(.:format) milestones#update
  #                   POST  /api/milestones(.:format)     milestones#create
  #                   POST  /api/milestones(.:format)     milestones#create_one
  #       milestone   GET    /api/milestones/:id(.:format)  milestones#show
  #                   PATCH  /api/milestones/:id(.:format)  milestones#update

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # get '/:react' => 'welcome/index'

# DEVISE MESS*************
# new_user_session  GET   /users/sign_in(.:format)      users/sessions#new
#     user_session  POST  /users/sign_in(.:format)      users/sessions#create
# destroy_user_session DELETE /users/sign_out(.:format) users/sessions#destroy
#
#    user_password  POST /users/password(.:format)      devise/passwords#create
#new_user_password  GET   /users/password/new(.:format) devise/passwords#new
#edit_user_password GET  /users/password/edit(.:format) devise/passwords#edit
#                   PATCH /users/password(.:format)     devise/passwords#update
#                   PUT   /users/password(.:format)     devise/passwords#update
#
#cancel_user_registration GET /users/cancel(.:format) users/registrations#cancel
# user_registration POST   /users(.:format)          users/registrations#create
# new_user_registration GET /users/sign_up(.:format) users/registrations#new
#   edit_user_registration GET /users/edit(.:format) users/registrations#edit
#                   PATCH  /users(.:format)          users/registrations#update
#                   PUT    /users(.:format)          users/registrations#update
#                   DELETE /users(.:format)          users/registrations#destroy
# ************************
#
#         events GET    /api/events(.:format)              events#index
#                POST   /api/events(.:format)              events#create
#      new_event GET    /api/events/new(.:format)          events#new
#     edit_event GET    /api/events/:id/edit(.:format)     events#edit
#          event GET    /api/events/:id(.:format)          events#show
#                PATCH  /api/events/:id(.:format)          events#update
#                PUT    /api/events/:id(.:format)          events#update
#                DELETE /api/events/:id(.:format)          events#destroy
#
#          Prefix Verb   URI Pattern                        Controller#Action
#      milestones GET    /api/milestones(.:format)          milestones#index
#                 POST   /api/milestones(.:format)          milestones#create
#   new_milestone POST   /api/milestones/new(.:format)      milestones#new
#  edit_milestone GET    /api/milestones/:id/edit(.:format) milestones#edit
#       milestone GET    /api/milestones/:id(.:format)      milestones#show
#                 PATCH  /api/milestones/:id(.:format)      milestones#update
#                 PUT    /api/milestones/:id(.:format)      milestones#update
#                 DELETE /api/milestones/:id(.:format)      milestones#destroy
#
#         vendors GET    /api/vendors(.:format)             vendors#index
#                 POST   /api/vendors(.:format)             vendors#create
#      new_vendor GET    /api/vendors/new(.:format)         vendors#new
#     edit_vendor GET    /api/vendors/:id/edit(.:format)    vendors#edit
#          vendor GET    /api/vendors/:id(.:format)         vendors#show
#                 PATCH  /api/vendors/:id(.:format)         vendors#update
#                 PUT    /api/vendors/:id(.:format)         vendors#update
#                 DELETE /api/vendors/:id(.:format)         vendors#destroy
#
#       contacts GET    /api/contacts(.:format)            contacts#index
#                POST   /api/contacts(.:format)            contacts#create
#    new_contact GET    /api/contacts/new(.:format)        contacts#new
#   edit_contact GET    /api/contacts/:id/edit(.:format)   contacts#edit
#        contact GET    /api/contacts/:id(.:format)        contacts#show
#                PATCH  /api/contacts/:id(.:format)        contacts#update
#                PUT    /api/contacts/:id(.:format)        contacts#update
#                DELETE /api/contacts/:id(.:format)        contacts#destroy
#
#      addresses GET    /api/addresses(.:format)           addresses#index
#                POST   /api/addresses(.:format)           addresses#create
#    new_address GET    /api/addresses/new(.:format)       addresses#new
#   edit_address GET    /api/addresses/:id/edit(.:format)  addresses#edit
#        address GET    /api/addresses/:id(.:format)       addresses#show
#                PATCH  /api/addresses/:id(.:format)       addresses#update
#                PUT    /api/addresses/:id(.:format)       addresses#update
#                DELETE /api/addresses/:id(.:format)       addresses#destroy
#
#     agreements GET    /api/agreements(.:format)          agreements#index
#                POST   /api/agreements(.:format)          agreements#create
#  new_agreement GET    /api/agreements/new(.:format)      agreements#new
# edit_agreement GET    /api/agreements/:id/edit(.:format) agreements#edit
#      agreement GET    /api/agreements/:id(.:format)      agreements#show
#                PATCH  /api/agreements/:id(.:format)      agreements#update
#                PUT    /api/agreements/:id(.:format)      agreements#update
#                DELETE /api/agreements/:id(.:format)      agreements#destroy
#
#      addendums GET    /api/addendums(.:format)           addendums#index
#                POST   /api/addendums(.:format)           addendums#create
#   new_addendum GET    /api/addendums/new(.:format)       addendums#new
#  edit_addendum GET    /api/addendums/:id/edit(.:format)  addendums#edit
#       addendum GET    /api/addendums/:id(.:format)       addendums#show
#                PATCH  /api/addendums/:id(.:format)       addendums#update
#                PUT    /api/addendums/:id(.:format)       addendums#update
#                DELETE /api/addendums/:id(.:format)       addendums#destroy
#

#
# FOR REACT ROUTES********
#   static_index GET    /static/index(.:format)            static#index
#           root GET    /                                  static#index
#                GET    /:whatever(/:id)(.:format)         static#index
end
