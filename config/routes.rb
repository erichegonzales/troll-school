Rails.application.routes.draw do
  resources :courses, only: [:index, :show]
  resources :user_courses, only: [:index, :show]
  resources :questions, only: [:index, :show]
  resources :quizzes, only: [:index, :show]

  resources :users, only: [:create]
  post '/login', to: 'auth#create'
  post "/signup", to: "users#create"
  get '/profile', to: 'users#profile'
end