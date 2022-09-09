Rails.application.routes.draw do
  resources :courses, only: [:index, :show]
  resources :chapters, only: [:index, :show]
  resources :questions, only: [:index, :show]
  resources :quizzes, only: [:index, :show]
end
