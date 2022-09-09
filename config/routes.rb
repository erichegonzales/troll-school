Rails.application.routes.draw do
  resources :users, only: [:index, :show]
  resources :courses, only: [:index, :show]
  resources :user_courses, only: [:index, :show]
end
