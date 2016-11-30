Rails.application.routes.draw do
<<<<<<< HEAD
  resources :milestones
=======
  resources :vendors
>>>>>>> f7273427a0259fb00d2771bb825800ade1a75527
  resources :events
  resources :contacts
  resources :addresses
  resources :agreements
  resources :addendums
  # root to: "home#index"
  # devise_for :users
  # static routes for React
  get 'static/index'
  root 'static#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # get '/:react' => 'welcome/index'

end
