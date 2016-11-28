Rails.application.routes.draw do
  # root to: "home#index"
  # devise_for :users
  # static routes for React
  get 'static/index'
  root 'static#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # get '/:react' => 'welcome/index'

end
