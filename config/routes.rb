Rails.application.routes.draw do
  resources :users, only: [:index, :show]
  resources :courses, only: [:index, :show]
  resources :user_courses, only: [:index, :show]
  resources :questions, only: [:index, :show]
  resources :quizzes, only: [:index, :show]

  get "/courses/:id/quiz/:quid", to: "courses#quiz"

  get "/users/:id/list", to: "users#list_index"
  post "/users/:id/list/add/:quid", to: "users#list_create"
  delete "/users/:id/list", to: "users#list_destroy"
end
