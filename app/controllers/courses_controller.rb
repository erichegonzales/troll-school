class CoursesController < ApplicationController
    skip_before_action :authorized
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    def index
        render json: Course.all
    end

    def show
        course = find_course
        render json: course.to_json(methods: [:quizzes])
    end

    def quiz
        course = find_course
        render json: course.quizzes[params[:quid].to_i - 1].to_json(methods: [:questions])
    end

    private
    
    def find_course
        course = Course.find(params[:id])
    end

    def render_not_found_response
        render json: { error: "Course not found" }, status: :not_found
    end
end
