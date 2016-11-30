Rails.application.routes.draw do
<<<<<<< HEAD
  resources :addresses
=======
  resources :agreements
>>>>>>> 3b6ff5bf87d20f87d6fcb71420a93d5eeef9d161
  resources :addendums
  # root to: "home#index"
  # devise_for :users
  # static routes for React
  get 'static/index'
  root 'static#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # get '/:react' => 'welcome/index'

end
