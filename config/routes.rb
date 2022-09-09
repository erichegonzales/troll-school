Rails.application.routes.draw do
  resources :users, only: [:index, :show]
  resources :chapters, only: [:index, :show]
end
