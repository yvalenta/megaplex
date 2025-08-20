module Api
  class ClientsController < ApplicationController
    def index
      @clients = Client.all
      render json: @clients
    end

    def create
      @client = Client.new(client_params)
      if @client.save
        render json: @client, status: :created
      else
        render json: @client.errors, status: :unprocessable_entity
      end
    end

    def show
      @client = Client.find(params[:id])
      if @client
        render json: @client
      else
        render json: @client.errors, status: :unprocessable_entity
      end
    end

    def update
      @client = Client.find(params[:id])
      if @client.update(client_params)
        render json: @client
      else
        render json: @client.errors, status: :unprocessable_entity
      end
    end

    def destroy
      @client = Client.find(params[:id])
      if @client.destroy
        render json: {}, status: :no_content
      else
        render json: @client.errors, status: :unprocessable_entity
      end
    end

    def client_params
      params.require(:client).permit(:name, :email, :identification, :phone, :city, :password_confirmation)
    end
  end
end
