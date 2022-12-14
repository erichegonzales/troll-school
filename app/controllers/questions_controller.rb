class QuestionsController < ApplicationController
  skip_before_action :authorized

  def index
    render json: Question.all
  end

  def show
    question = Question.find_by(id: params[:id])
    if question
    render json: {
      question_number: question.number,
      content: question.content,
      correct_answer: question.correct_answer,
      answers: [
        question.incorrect_answer1,
        question.incorrect_answer2
      ],
      quiz_id: question.quiz_id
    }
    else
    render json: {error: "Question not found"}, status: 404
    end
  end
end
