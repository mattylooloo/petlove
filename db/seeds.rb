# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all

User.create!(username: "user7", password: "password", first_name: "m", last_name: "l", email: "mail@mail.com",
  sex: "M", birthday: "", profile: "text me", location: "New York", age_range_min: 21, age_range_max: 100)
