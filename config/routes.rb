Rails.application.routes.draw do
#for AJAX request
scope 'api' do
    resources :milestones
    resources :vendors
    resources :events
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
  get 'static/index'
  root 'static#index'
  get '/:whatever/(:id)' => 'static#index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # get '/:react' => 'welcome/index'

#   Prefix Verb   URI Pattern                    Controller#Action
#     milestones  GET    /milestones(.:format)          milestones#index
#                 POST   /milestones(.:format)          milestones#create
#   new_milestone GET    /milestones/new(.:format)      milestones#new
#   edit_milestone GET   /milestones/:id/edit(.:format) milestones#edit
#       milestone GET    /milestones/:id(.:format)      milestones#show
#                 PATCH  /milestones/:id(.:format)      milestones#update
#                 PUT    /milestones/:id(.:format)      milestones#update
#                 DELETE /milestones/:id(.:format)      milestones#destroy

#         vendors GET    /vendors(.:format)             vendors#index
#                 POST   /vendors(.:format)             vendors#create
#     new_vendor  GET    /vendors/new(.:format)         vendors#new
#     edit_vendor GET    /vendors/:id/edit(.:format)    vendors#edit
#         vendor  GET    /vendors/:id(.:format)         vendors#show
#                 PATCH  /vendors/:id(.:format)         vendors#update
#                 PUT    /vendors/:id(.:format)         vendors#update
#                 DELETE /vendors/:id(.:format)         vendors#destroy

#         events  GET    /events(.:format)              events#index
#                 POST   /events(.:format)              events#create
#       new_event GET    /events/new(.:format)          events#new
#     edit_event  GET    /events/:id/edit(.:format)     events#edit
#           event GET    /events/:id(.:format)          events#show
#                 PATCH  /events/:id(.:format)          events#update
#                 PUT    /events/:id(.:format)          events#update
#                 DELETE /events/:id(.:format)          events#destroy

#        contacts GET    /contacts(.:format)            contacts#index
#                 POST   /contacts(.:format)            contacts#create
#     new_contact GET    /contacts/new(.:format)        contacts#new
#    edit_contact GET    /contacts/:id/edit(.:format)   contacts#edit
#         contact GET    /contacts/:id(.:format)        contacts#show
#                 PATCH  /contacts/:id(.:format)        contacts#update
#                 PUT    /contacts/:id(.:format)        contacts#update
#                 DELETE /contacts/:id(.:format)        contacts#destroy

#       addresses GET    /addresses(.:format)           addresses#index
#                 POST   /addresses(.:format)           addresses#create
#     new_address GET    /addresses/new(.:format)       addresses#new
#    edit_address GET    /addresses/:id/edit(.:format)  addresses#edit
#     address     GET    /addresses/:id(.:format)       addresses#show
#                 PATCH  /addresses/:id(.:format)       addresses#update
#                 PUT    /addresses/:id(.:format)       addresses#update
#                 DELETE /addresses/:id(.:format)       addresses#destroy

#      agreements GET    /agreements(.:format)          agreements#index
#                 POST   /agreements(.:format)          agreements#create
#   new_agreement GET    /agreements/new(.:format)      agreements#new
#   edit_agreement GET    /agreements/:id/edit(.:format) agreements#edit
#       agreement GET    /agreements/:id(.:format)      agreements#show
#                 PATCH  /agreements/:id(.:format)      agreements#update
#                 PUT    /agreements/:id(.:format)      agreements#update
#                 DELETE /agreements/:id(.:format)      agreements#destroy

#       addendums GET    /addendums(.:format)           addendums#index
#                 POST   /addendums(.:format)           addendums#create
#   new_addendum GET    /addendums/new(.:format)       addendums#new
#   edit_addendum GET    /addendums/:id/edit(.:format)  addendums#edit
#         addendum GET    /addendums/:id(.:format)       addendums#show
#                 PATCH  /addendums/:id(.:format)       addendums#update
#                 PUT    /addendums/:id(.:format)       addendums#update
#                 DELETE /addendums/:id(.:format)       addendums#destroy


# DEVISE**************
#   new_user_session GET  /users/sign_in(.:format)      users/sessions#new
#      user_session  POST /users/sign_in(.:format)      users/sessions#create
# destroy_user_session DELETE /users/sign_out(.:format) users/sessions#destroy
#   user_password    POST /users/password(.:format)     devise/passwords#create
#  new_user_password GET  /users/password/new(.:format) devise/passwords#new
# edit_user_password GET  /users/password/edit(.:format) devise/passwords#edit
#                    PATCH  /users/password(.:format)   devise/passwords#update
#                    PUT   /users/password(.:format)    devise/passwords#update
# cancel_user_registration GET /users/cancel(.:format) devise/registrations#cancel
# user_registration  POST /users(.:format)          devise/registrations#create
# new_user_registration GET /users/sign_up(.:format)  devise/registrations#new
# edit_user_registration GET /users/edit(.:format)   devise/registrations#edit

#                   PATCH  /users(.:format)       devise/registrations#update
#                   PUT    /users(.:format)     devise/registrations#update
#                   DELETE /users(.:format)     devise/registrations#destroy
#       user_unlock POST   /users/unlock(.:format)        devise/unlocks#create
#   new_user_unlock GET    /users/unlock/new(.:format)    devise/unlocks#new
#                   GET    /users/unlock(.:format)        devise/unlocks#show
#      static_index GET    /static/index(.:format)        static#index
#              root GET    /                              static#index

end
