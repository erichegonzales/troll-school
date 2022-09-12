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

#user = name, email, avatar
# user1 = User.create(id: 1, name: "Andor", email: "andor@flatiron.com", avatar: "")
# user2 = User.create(id: 2, name: "Andrew", email: "andrew@flatiron.com", avatar: "")
# user3 = User.create(id: 3, name: "Ashwin", email: "ashwin@flatiron.com", avatar: "")
# user4 = User.create(id: 4, name: "Eriche", email: "eriche@flatiron.com", avatar: "")
# user5 = User.create(id: 5, name: "Riley", email: "riley@flatiron.com", avatar: "")

#course = name, description, category
course1 = Course.create(id: 1, name: "Math", description: "Math is everywhere. We can practice our math skills while walking through the Swampy Woods.")
# course2 = Course.create(id: 2, name: "Subtractions", description: "Learn your subtractions", category: "math")
# course3 = Course.create(id: 3, name: "Words That Start with A", description: "Learn your a words", category: "spelling")
# course4 = Course.create(id: 4, name: "Words That Start with B", description: "Learn your b words", category: "spelling")
# course5 = Course.create(id: 5, name: "3 Times Table", description: "Learn your 3's table", category: "math")

#user_courses = user, course
# user_course1 = UserCourse.create(id: 1, user: user1, course: course5)
# user_course2 = UserCourse.create(id: 2, user: user2, course: course4)
# user_course3 = UserCourse.create(id: 3, user: user3, course: course3)
# user_course4 = UserCourse.create(id: 4, user: user4, course: course2)
# user_course5 = UserCourse.create(id: 5, user: user5, course: course1)

#quizzes = title, description, course

quiz_1 = Quiz.create(id: 1, title: "Quiz 1", description: "Trolls love collecting rocks. Let’s use our addition skills to add up the rocks in my collection.", course: course1 )

# questions = question_number, content, correct_answer, quiz

question_1 = Question.create(id: 1, question_number: 1, content: "1 + 3 = ?", correct_answer: "4", quiz: quiz_1)
question_2 = Question.create(id: 2, question_number: 2, content: "2 + 4 = ?", correct_answer: "6", quiz: quiz_1)
question_3 = Question.create(id: 3, question_number: 3, content: "3 + 5 = ?", correct_answer: "8", quiz: quiz_1)
question_4 = Question.create(id: 4, question_number: 4, content: "5 + 1 = ?", correct_answer: "6", quiz: quiz_1)

# incorrects = incorrect_answer1, incorrect_answer2, question

incorrect_1 = Incorrect.create(id: 1, incorrect_answer1: "3", incorrect_answer2: "5", question: question_1)
incorrect_2 = Incorrect.create(id: 2, incorrect_answer1: "5", incorrect_answer2: "7", question: question_2)
incorrect_3 = Incorrect.create(id: 3, incorrect_answer1: "7", incorrect_answer2: "6", question: question_3)
incorrect_4 = Incorrect.create(id: 4, incorrect_answer1: "7", incorrect_answer2: "8", question: question_4)

puts 'Done with seeding!'