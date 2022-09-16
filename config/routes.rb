Rails.application.routes.draw do
  # resources :users, only: [:index, :show]
  resources :courses, only: [:index, :show]
  resources :user_courses, only: [:index, :show]
  resources :questions, only: [:index, :show]
  resources :quizzes, only: [:index, :show]

  # post "/signup", to: "users#create"
  # get "/me", to: "users#show"
  # post "/login", to: "sessions#create"
  # delete "/logout", to: "sessions#destroy"

  # namespace :api do
  #   namespace :v1 do
      # resources :users, only: [:create]
      post '/login', to: 'auth#create'
      post '/signup', to: 'users#create'
      get '/profile', to: 'users#profile'
      get '/users', to: 'users#index'
  #   end
  # end
  get "/courses/:id/quiz/:quid", to: "courses#quiz"

  get "/users/:id/list", to: "users#list_index"
  post "/users/:id/list/add/:quid", to: "users#list_create"
  delete "/users/:id/list", to: "users#list_destroy"
end
