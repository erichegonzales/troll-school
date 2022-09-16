class QuizzesController < ApplicationController
  skip_before_action :authorized
  
  def index
    quizzes = Quiz.all
    render json: quizzes
  end

  def show
    quiz = Quiz .find_by(id: params[:id])
    if quiz
      render json: quiz.to_json(methods: [:questions])
    else
      render json: {error: "Quiz not found" }, status: 404
    end
  end
end
