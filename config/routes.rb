Rails.application.routes.draw do
  resources :courses, only: [:index, :show]
  resources :chapters, only: [:index, :show]
end
