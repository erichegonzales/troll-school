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
course_1 = Course.create(id: 1, name: "Math", description: "Math is everywhere. Practicing our math skills will help us in our adventures through all the lands!")
course_2 = Course.create(id: 2, name: "Spelling", description: "Spelling is a lovely skill. Turning letters into words is like mixing ingredients into magical potions!")

#user_courses = user, course
user_course_1 = UserCourse.create(id: 1, user: user_1, course: course_1)
user_course_2 = UserCourse.create(id: 2, user: user_1, course: course_2)

#quizzes = title, description, course

quiz_1 = Quiz.create(id: 1, title: "Quiz 1", description: "Trolls love collecting rocks. Let’s use our addition skills to add up the rocks in my collection.", course: course_1 )
quiz_2 = Quiz.create(id: 2, title: "Quiz 2", description: "Trolls are generous. They love to give their rocks as gifts. Giving away rocks is a good way to think about subtraction.", course: course_1 )
quiz_3 = Quiz.create(id: 3, title: "Quiz 1", description: "I want to list my favorite activities. I need help spelling some words so that my friends understand.", course: course_2 )
quiz_4 = Quiz.create(id: 4, title: "Quiz 2", description: "We’re making painting signs for the Troll Village Flea Market. Everything must be spelled correctly, so everyone knows what we sell.", course: course_2 )

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
# questions for course 2, quiz 1
question_9 = Question.create(id: 9, number: 1, content: "Climbing the brances of my favorite tree.", correct_answer: "branches", incorrect_answer1: "Branshes", incorrect_answer2: "Braces", quiz: quiz_3)
question_10 = Question.create(id: 10, number: 2, content: "At night, we tell stories around the fyer.", correct_answer: "fire", incorrect_answer1: "fyre", incorrect_answer2: "fere", quiz: quiz_3)
question_11 = Question.create(id: 11, number: 3, content: "Picking friut from the berry bushes and apple trees.", correct_answer: "fruit", incorrect_answer1: "froot", incorrect_answer2: "frute", quiz: quiz_3)
question_12 = Question.create(id: 12, number: 4, content: "Splashing in podles after it rains.", correct_answer: "puddles", incorrect_answer1: "Pudels", incorrect_answer2: "Podels", quiz: quiz_3)
# questions for course 2, quiz 2
question_13 = Question.create(id: 13, number: 1, content: "Frendship Bracelets", correct_answer: "Friendship", incorrect_answer1: "Frindship", incorrect_answer2: "Friendshep", quiz: quiz_4)
question_14 = Question.create(id: 14, number: 2, content: "Pickture Frames", correct_answer: "Picture", incorrect_answer1: "Peckture", incorrect_answer2: "Picter", quiz: quiz_4)
question_15 = Question.create(id: 15, number: 3, content: "Second-hand Clotheing", correct_answer: "Clothing", incorrect_answer1: "Cloting", incorrect_answer2: "Clothins", quiz: quiz_4)
question_16 = Question.create(id: 16, number: 4, content: "Finger Pupetts.", correct_answer: "Puppets", incorrect_answer1: "Pupettes", incorrect_answer2: "Popets", quiz: quiz_4)
puts 'Done seeding!'