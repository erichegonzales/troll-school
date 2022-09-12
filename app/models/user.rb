class User < ApplicationRecord
    has_many :user_courses
    has_many :courses, through: :user_courses
    has_secure_password
    validates :username, presence: true, uniqueness: true
    validates :email, presence: true, uniqueness: true
end
