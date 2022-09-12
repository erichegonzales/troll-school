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

#user = name, email, icon
user1 = User.create(id: 1, name: "Andor", email: "andor@flatiron.com", avatar: "")
user2 = User.create(id: 2, name: "Andrew", email: "andrew@flatiron.com", avatar: "")
user3 = User.create(id: 3, name: "Ashwin", email: "ashwin@flatiron.com", avatar: "")
user4 = User.create(id: 4, name: "Eriche", email: "eriche@flatiron.com", avatar: "")
user5 = User.create(id: 5, name: "Riley", email: "riley@flatiron.com", avatar: "")

#course = name, description, category
course1 = Course.create(id: 1, name: "Additions", description: "Learn your additions", category: "math")
course2 = Course.create(id: 2, name: "Subtractions", description: "Learn your subtractions", category: "math")
course3 = Course.create(id: 3, name: "Words That Start with A", description: "Learn your a words", category: "spelling")
course4 = Course.create(id: 4, name: "Words That Start with B", description: "Learn your b words", category: "spelling")
course5 = Course.create(id: 5, name: "3 Times Table", description: "Learn your 3's table", category: "math")

#user_courses = user, course
user_course1 = UserCourse.create(user: user1, course: course5)
user_course2 = UserCourse.create(user: user2, course: course4)
user_course3 = UserCourse.create(user: user3, course: course3)
user_course4 = UserCourse.create(user: user4, course: course2)
user_course5 = UserCourse.create(user: user5, course: course1)

puts 'Done with seeding!'