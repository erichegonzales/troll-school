class Quiz < ApplicationRecord
  belongs_to :course
  has_many :completeds
  has_many :questions
end
