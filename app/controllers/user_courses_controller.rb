class UserCoursesController < ApplicationController
    skip_before_action :authorized
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
   
    def index
        render json: UserCourse.all
    end

    def show
        user_course = find_user_course
        render json: user_course
    end

    private
    
    def find_user_course
        user_course = UserCourse.find(params[:id])
    end

    def render_not_found_response
        render json: { error: "UserCourse not found" }, status: :not_found
    end
end
