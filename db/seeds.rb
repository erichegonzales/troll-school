# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts 'Destroying any old seed data...'

User.destroy_all
Course.destroy_all
Quiz.destroy_all
Question.destroy_all
Completed.destroy_all

puts 'Seeding data...'

#user = name, email, username, password, avatar
user_1 = User.create(id: 1, name: "Andor", email: "andor@flatiron.com", username: "iluvicecream", avatar: "https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Chocolate-Coffee-Bean-Ice-Cream-Cake_exps127341_THCA2449046B01_20_4b_RMS.jpg")

#course = name, description, category
course_1 = Course.create(id: 1, name: "Math", description: "Math is everywhere. Practicing our math skills will help us in our adventures through all the lands!")
course_2 = Course.create(id: 2, name: "Spelling", description: "Spelling is a lovely skill. Turning letters into words is like mixing ingredients into magical potions!")

#user_courses = user, course
# user_course_1 = UserCourse.create(id: 1, user: user_1, course: course_1)
# user_course_2 = UserCourse.create(id: 2, user: user_1, course: course_2)


#quizzes = title, description, course

quiz_1 = Quiz.create(id: 1, title: "Quiz 1", description: "Trolls love collecting rocks. Let’s use our addition skills to add up the rocks in my collection.", course: course_1 )
quiz_2 = Quiz.create(id: 2, title: "Quiz 2", description: "Trolls are generous. They love to give their rocks as gifts. Giving away rocks is a good way to think about subtraction.", course: course_1 )
quiz_3 = Quiz.create(id: 3, title: "Quiz 1", description: "I want to list my favorite activities. I need help spelling some words so that my friends understand.", course: course_2 )
quiz_4 = Quiz.create(id: 4, title: "Quiz 2", description: "We’re making painting signs for the Troll Village Flea Market. Everything must be spelled correctly, so everyone knows what we sell.", course: course_2 )
# Additional Quizzes added
quiz_5 = Quiz.create(id: 5, title: "Quiz 3", description: "History Quiz.", course: course_2 )
quiz_6 = Quiz.create(id: 6, title: "Quiz 3", description: "History Quiz.", course: course_2 )
quiz_7 = Quiz.create(id: 7, title: "Quiz 4", description: "History Quiz.", course: course_2 )
quiz_8 = Quiz.create(id: 8, title: "Quiz 4", description: "History Quiz.", course: course_2 )


completed_1 = Completed.create(id: 1, user: user_1, quiz: quiz_1)

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

# questions for course 4, quiz 4 (History)
question_17 = Question.create(
    id: 17, 
    number: 1, 
    content: "What was the Boston Tea Party", 
    correct_answer: "A political protest against British taxation in the American colonies", 
    incorrect_answer1: "A play shown in theaters in the 18th century", 
    incorrect_answer2: "A birthday party for George Washington", 
    quiz: quiz_5
)
question_18 = Question.create(
    id: 18, 
    number: 2, 
    content: "What number US president is Joe Biden?", 
    correct_answer: "46th", 
    incorrect_answer1: "42nd", 
    incorrect_answer2: "44th", 
    quiz: quiz_5
)
question_19 = Question.create(
    id: 19, 
    number: 3, 
    content: "Where was the Declaration of Independence signed?", 
    correct_answer: "Philadelphia", 
    incorrect_answer1: "Boston", 
    incorrect_answer2: "Washington DC", 
    quiz: quiz_5
)
question_20 = Question.create(
    id: 20, 
    number: 4, 
    content: "What is the oldest city in the United States?", 
    correct_answer: "St. Augustine, Florida", 
    incorrect_answer1: "Philadelphia, Pennsylvania", 
    incorrect_answer2: "Santa Fe, New Mexico", 
    quiz: quiz_5
)
question_21 = Question.create(
    id: 21, 
    number: 1, 
    content: " Which was the last state to join the US in 1959?", 
    correct_answer: "Hawaii", 
    incorrect_answer1: "Arizona", 
    incorrect_answer2: "Alaska", 
    quiz: quiz_6
)
question_23 = Question.create(
    id: 23, 
    number: 2, 
    content: "Which was the first US city to hold the Olympic Games in 1904??", 
    correct_answer: "St. Louis, Missouri", 
    incorrect_answer1: "New York, New York", 
    incorrect_answer2: "Atlanta, Georgia", 
    quiz: quiz_6
)
question_24 = Question.create(
    id: 24, 
    number: 3, 
    content: "The Statue of Liberty was a gift to the United States from which European country?", 
    correct_answer: "France", 
    incorrect_answer1: "Belgium", 
    incorrect_answer2: "Spain", 
    quiz: quiz_6
)
question_25 = Question.create(
    id: 25, 
    number: 4, 
    content: "Who was the first European visitor to set foot on American soil?  ", 
    correct_answer: "A Viking explorer named Leif Erikson", 
    incorrect_answer1: "Christopher Columbus", 
    incorrect_answer2: "John Smith", 
    quiz: quiz_6
)
question_26 = Question.create(
    id: 26, 
    number: 1, 
    content: "Creatures that lived millions of years ago?", 
    correct_answer: "Dinosaur", 
    incorrect_answer1: "Alien", 
    incorrect_answer2: "Human", 
    quiz: quiz_7
)
question_27 = Question.create(
    id: 27, 
    number: 2, 
    content: "Who was the first man to step on the moon?", 
    correct_answer: "Neil Armstrong", 
    incorrect_answer1: "Bob, Marly", 
    incorrect_answer2: "John, F. Kennedy", 
    quiz: quiz_7
)
question_28 = Question.create(
    id: 28, 
    number: 3, 
    content: "Where did the ancient Olympic Games originate?", 
    correct_answer: "Greece", 
    incorrect_answer1: "England", 
    incorrect_answer2: "Portugal", 
    quiz: quiz_7
)
question_29 = Question.create(
    id: 29, 
    number: 4, 
    content: "Which was the first country to use paper money? ", 
    correct_answer: "China", 
    incorrect_answer1: "India", 
    incorrect_answer2: "Germany", 
    quiz: quiz_7
)
question_30 = Question.create(
    id: 30, 
    number: 1, 
    content: "Which is the oldest University in the U.S.?", 
    correct_answer: "Harvard", 
    incorrect_answer1: "Princeton", 
    incorrect_answer2: "NYU", 
    quiz: quiz_8
)
question_31 = Question.create(
    id: 31, 
    number: 2, 
    content: "Who did the U.S. buy Florida from?", 
    correct_answer: "Spain", 
    incorrect_answer1: "Portugal", 
    incorrect_answer2: "France", 
    quiz: quiz_8
)
question_32 = Question.create(
    id: 32, 
    number: 3, 
    content: "Who wrote Harry Potter?", 
    correct_answer: "J. K. Rowling", 
    incorrect_answer1: "Jay-Z", 
    incorrect_answer2: "Stephen King", 
    quiz: quiz_8
)
question_33 = Question.create(
    id: 33, 
    number: 4, 
    content: "Where did Albert Einstein live before moving to the United States? ", 
    correct_answer: "Germany", 
    incorrect_answer1: "Sweden", 
    incorrect_answer2: "Italy", 
    quiz: quiz_8
)