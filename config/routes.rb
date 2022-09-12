Rails.application.routes.draw do
  resources :users, only: [:index, :show]
  resources :courses, only: [:index, :show]
  resources :user_courses, only: [:index, :show]
  resources :questions, only: [:index, :show]
  resources :quizzes, only: [:index, :show]

  post "/signup", to: "users#create"
  get "/me", to: "users#show_current"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
end
