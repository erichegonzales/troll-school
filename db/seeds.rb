# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts 'Seeding data...'

#user = name, email, username, password, avatar
user_1 = User.create(id: 1, name: "Andor", email: "andor@flatiron.com", username: "iluvicecream", avatar: "https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Chocolate-Coffee-Bean-Ice-Cream-Cake_exps127341_THCA2449046B01_20_4b_RMS.jpg")

#course = name, description, category
course_1 = Course.create(id: 1, name: "Math", description: "Math is everywhere. We can practice our math skills while walking through the Swampy Woods.")

#user_courses = user, course
user_course_1 = UserCourse.create(id: 1, user: user_1, course: course_1)

#quizzes = title, description, course

quiz_1 = Quiz.create(id: 1, title: "Quiz 1", description: "Trolls love collecting rocks. Let’s use our addition skills to add up the rocks in my collection.", course: course_1 )
quiz_2 = Quiz.create(id: 2, title: "Quiz 2", description: "Trolls are generous. They love to give their rocks as gifts. Giving away rocks is a good way to think about subtraction.", course: course_1 )

# questions = question_number, content, correct_answer, quiz

question_1 = Question.create(id: 1, number: 1, content: "1 + 3 = ?", correct_answer: "4", incorrect_answer1: "3", incorrect_answer2: "5", quiz: quiz_1)
question_2 = Question.create(id: 2, number: 2, content: "2 + 4 = ?", correct_answer: "6", incorrect_answer1: "5", incorrect_answer2: "7", quiz: quiz_1)
question_3 = Question.create(id: 3, number: 3, content: "3 + 5 = ?", correct_answer: "8", incorrect_answer1: "7", incorrect_answer2: "6", quiz: quiz_1)
question_4 = Question.create(id: 4, number: 4, content: "5 + 1 = ?", correct_answer: "6", incorrect_answer1: "7", incorrect_answer2: "8", quiz: quiz_1)
# questions for course 1, quiz 2
question_5 = Question.create(id: 5, number: 1, content: "5 - 1 = ?", correct_answer: "4", incorrect_answer1: "3", incorrect_answer2: "6", quiz: quiz_2)
question_6 = Question.create(id: 6, number: 2, content: "4 - 3 = ?", correct_answer: "1", incorrect_answer1: "2", incorrect_answer2: "3", quiz: quiz_2)
question_7 = Question.create(id: 7, number: 3, content: "4 - 4 = ?", correct_answer: "0", incorrect_answer1: "4", incorrect_answer2: "1", quiz: quiz_2)
question_8 = Question.create(id: 8, number: 4, content: "7 - 2 = ?", correct_answer: "5", incorrect_answer1: "6", incorrect_answer2: "4", quiz: quiz_2)



puts 'Done seeding!'