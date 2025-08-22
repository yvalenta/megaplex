Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Render dynamic PWA files from app/views/pwa/* (remember to link manifest in application.html.erb)
  # get "manifest" => "rails/pwa#manifest", as: :pwa_manifest
  # get "service-worker" => "rails/pwa#service_worker", as: :pwa_service_worker

  # Defines the root path route ("/")
  root "pages#index"
  get "/products" => "pages#index"
  get "/products/new" => "pages#index"
  get "/products/:id" => "pages#index"
  get "/clients" => "pages#index"
  get "/clients/new" => "pages#index"
  get "/clients/:id" => "pages#index"
  get "/gifs" => "pages#index"

  resources :pages, only: [:index], export: true

  namespace :api do
    resources :products, export: true, as: :products
    resources :clients, export: true, as: :clients
  end
end
