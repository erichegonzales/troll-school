class UsersController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    skip_before_action :verify_authenticity_token, only: [:list_create, :list_destroy]
    # rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def index
        render json: User.all
    end

    def show
        user = find_user
        render json: user
    end

    def list_index
        user = find_user
        completeds = user.completeds
        output = []
        completeds.each do |comp| 
            quiz = Quiz.find(comp.quiz.id)
            output.push({course: quiz.course.name, quiz: quiz.id})
        end
        render json: {
            quizzes: output
        }
    end

    def list_create
        user = find_user
        quiz = Quiz.find(params[:quid])
        if (user.completeds.find_by(quiz: quiz)) 
            render json: user.completeds
        else 
            completed = Completed.new(user: user, quiz: quiz)
            if completed.save
                render json: user.completeds
            else
                render json: {error: "invalid user or quiz id"}, status: 422
            end
        end
    end

    def list_destroy
        user = find_user
        user.completeds.each do |comp| comp.destroy end
        render json: user.completeds
    end

    # private
    
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
