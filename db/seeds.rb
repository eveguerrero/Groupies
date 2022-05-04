# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(username: "eve", password: "evehatessnowinapril", password_confirmation: "evehatessnowinapril")
User.create(username: "ashley", password: "evehatessnowinapril", password_confirmation: "evehatessnowinapril")
User.create(username: "Phil B", password: "evehatessnowinapril", password_confirmation: "evehatessnowinapril")
User.create(username: "John K", password: "evehatessnowinapril", password_confirmation: "evehatessnowinapril")
User.create(username: "RED", password: "evehatessnowinapril", password_confirmation: "evehatessnowinapril")
User.create(username: "Jay", password: "evehatessnowinapril", password_confirmation: "evehatessnowinapril")
User.create(username: "Cheese", password: "evehatessnowinapril", password_confirmation: "evehatessnowinapril")

Group.create(name: "Friendz", description: "Life's all about the fun")
Group.create(name: "Work-Budz", description: "",)
Group.create(name: "Family", description: "")

20.times do
    UserGroup.create(group: Group.all.sample, user: User.all.sample)
end

# UserGroup.create(group_id: 1 , user_id: 1)
# UserGroup.create(group_id: 2, user_id: 2)
# UserGroup.create(group_id: 3, user_id: 3)
# UserGroup.create(group_id: 3, user_id: 2)
# UserGroup.create(group_id: 2, user_id: 1)
# UserGroup.create(group_id: 3, user_id: 4)

puts 'Done Seeding'
