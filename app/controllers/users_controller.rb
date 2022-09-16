class UsersController < ApplicationController
    skip_before_action :authorized, only: [:create, :index]
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    skip_before_action :authorized, only: [:list_create, :list_destroy, :list_index]
    # rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def index
        render json: User.all
    end

    def profile
        render json: { user: UserSerializer.new(current_user) }, status: :accepted
    end

    def create
        @user = User.create(user_params)
        if @user.valid?
        @token = encode_token({ user_id: @user.id })
        render json: { user: UserSerializer.new(@user), jwt: @token }, status: :created
        else
        render json: { error: 'failed to create user' }, status: :unprocessable_entity
        end
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

    private
    
    def find_user
        user = User.find(params[:id])
    end

    def user_params
        params.permit(:name, :username, :email, :password, :password_confirmation, :avatar)
    end
end
