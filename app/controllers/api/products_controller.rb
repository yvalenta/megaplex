module Api
  class ProductsController < ApplicationController
    def index
      @products = Product.all
      render json: @products
    end

    def create
      @product = Product.new(product_params)
      if @product.save
        render json: @product, status: :created
      else
        render json: @product.errors, status: :unprocessable_entity
      end
    end

    def show
      @product = Product.find(params[:id])
      if @product
        render json: @product
      else
        render json: @product.errors, status: :unprocessable_entity
      end
    end

    def update
      @product = Product.find(params[:id])
      if @product.update(product_params)
        render json: @product
      else
        render json: @product.errors, status: :unprocessable_entity
      end
    end

    def destroy
      @product = Product.find(params[:id])
      if @product.destroy
        render json: {}, status: :no_content
      else
        render json: @product.errors, status: :unprocessable_entity
      end
    end

    def product_params
      params.require(:product).permit(:name, :description, :public_price, :client_price)
    end
  end
end
