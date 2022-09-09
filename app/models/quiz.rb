class Quiz < ApplicationRecord
  belongs_to :course
  belongs_to :chapter
  has_many :quizzes
end
