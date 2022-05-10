Rails.application.routes.draw do
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  #get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  resources :groups, only: [:index, :show, :create, :update, :destroy]
  resources :events, only: [:index, :show, :create, :update, :destroy]
  resources :comments, only: [:index, :show, :create, :update, :destroy]
  resources :posts, only: [:index, :show, :create, :update, :destroy]
  resources :user_groups, only: [:index, :show, :create, :update, :destroy]
   
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  get '/users', to: 'users#index'
  patch '/users/:id', to: 'users#update'
  delete '/users', to: 'users#destroy'
  get 'users/:id' , to: 'users#user_by_id'
  patch '/me' , to: 'users#update'

end
