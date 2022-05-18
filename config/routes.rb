Rails.application.routes.draw do
  root 'pages#home'
  get '/about', to: 'pages#about'
  get '/info', to: 'pages#info'
  get 'pages/element'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
