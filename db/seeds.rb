# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts 'Seeding data...'

# User.destroy_all
# Course.destroy_all
# UserCourse.destroy_all

#user = name, email, username, password avatar
## create users

#course = name, description, category
course_1 = Course.create(id: 1, name: "Math", description: "Math is everywhere. We can practice our math skills while walking through the Swampy Woods.")

#user_courses = user, course
## create user courses

#quizzes = title, description, course

quiz_1 = Quiz.create(id: 1, title: "Quiz 1", description: "Trolls love collecting rocks. Let’s use our addition skills to add up the rocks in my collection.", course: course_1 )

# questions = question_number, content, correct_answer, quiz

question_1 = Question.create(id: 1, number: 1, content: "1 + 3 = ?", correct_answer: "4", incorrect_answer1: "3", incorrect_answer2: "5", quiz: quiz_1)
question_2 = Question.create(id: 2, number: 2, content: "2 + 4 = ?", correct_answer: "6", incorrect_answer1: "5", incorrect_answer2: "7", quiz: quiz_1)
question_3 = Question.create(id: 3, number: 3, content: "3 + 5 = ?", correct_answer: "8", incorrect_answer1: "7", incorrect_answer2: "6", quiz: quiz_1)
question_4 = Question.create(id: 4, number: 4, content: "5 + 1 = ?", correct_answer: "6", incorrect_answer1: "7", incorrect_answer2: "8", quiz: quiz_1)

# incorrects = incorrect_answer1, incorrect_answer2, question
# incorrect_1 = Incorrect.create(id: 1, incorrect_answer1: "3", incorrect_answer2: "5", question: question_1)
# incorrect_2 = Incorrect.create(id: 2, incorrect_answer1: "5", incorrect_answer2: "7", question: question_2)
# incorrect_3 = Incorrect.create(id: 3, incorrect_answer1: "7", incorrect_answer2: "6", question: question_3)
# incorrect_4 = Incorrect.create(id: 4, incorrect_answer1: "7", incorrect_answer2: "8", question: question_4)

puts 'Done with seeding!'