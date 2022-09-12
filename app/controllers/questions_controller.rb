class QuestionsController < ApplicationController
    def index
    questions = Question.all
    render json: questions
  end

  def show
    question = Question.find_by(id: params[:id])
    if question
    render json: question
    else
    render json: {error: "Question not found"}, status: 404
    end
  end
end
