# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts 'Seeding data...'

User.destroy_all
Course.destroy_all
UserCourse.destroy_all
# Quiz.destroy_all

#user = name, email, icon
user1 = User.create(id: 1, "Eriche", "eriche@flatiron.com", "")
user2 = User.create(id: 2, "Riley", "riley@flatiron.com", "")
user3 = User.create(id: 3, "Ashwin", "ashwin@flatiron.com", "")
user4 = User.create(id: 4, "Andrew", "andrew@flatiron.com", "")
user5 = User.create(id: 5, "Andor", "andor@flatiron.com", "")

#course = name, description, category
course1 = Course.create(id: 1, "Additions", "Learn your additions", "math")
course2 = Course.create(id: 2, "Subtractions", "Learn your subtractions", "math")
course3 = Course.create(id: 3, "Words That Start with A", "Learn your a words", "spelling")
course4 = Course.create(id: 4, "Words That Start with B", "Learn your b words", "spelling")

#user_courses = course id, user id
user_course1 = (course_id: 1, user_id: 5)
user_course2 = (course_id: 2, user_id: 4)
user_course3 = (course_id: 3, user_id: 3)
user_course4 = (course_id: 4, user_id: 2)
user_course5 = (course_id: 5, user_id: 1)

puts 'Done with seeding!'