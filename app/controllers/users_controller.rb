class UsersController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    # rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def index
        render json: User.all
    end

    def show
        user = find_user
        render json: user
    end

    private
    
    def find_user
        user = User.find(params[:id])
    end

    def render_not_found_response
        render json: { error: "User not found" }, status: :not_found
    end

    # def render_unprocessable_entity_response(invalid)
    #     render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    # end
end
