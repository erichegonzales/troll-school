class Quiz < ApplicationRecord
  belongs_to :course
  belongs_to :chapter
end
