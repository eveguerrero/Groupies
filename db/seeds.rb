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

Group.create(name: "Friendz")
Group.create(name: "Work-Budz")
Group.create(name: "Family")
Group.create(name: "Roller-Skaters")
Group.create(name: "Running Team")

# 20.times do
#     UserGroup.create(group: Group.all.sample, user: User.all.sample)
# end

UserGroup.create(group_id: 1 , user_id: 1)
UserGroup.create(group_id: 1 , user_id: 2)
UserGroup.create(group_id: 1, user_id: 3)
UserGroup.create(group_id: 1, user_id: 4)
UserGroup.create(group_id: 2, user_id: 5)
UserGroup.create(group_id: 2, user_id: 6)
UserGroup.create(group_id: 2, user_id: 7)
UserGroup.create(group_id: 3 , user_id: 1)
UserGroup.create(group_id: 3 , user_id: 2)
UserGroup.create(group_id: 4 , user_id: 3)
UserGroup.create(group_id: 4 , user_id: 4)
UserGroup.create(group_id: 4 , user_id: 5)
UserGroup.create(group_id: 5 , user_id: 6)
UserGroup.create(group_id: 5 , user_id: 7)

Event.create!(title: "Birthday", description: "Time to celebrate!", start: '2022-05-15 08:45' , end: '2022-05-16 12:45', group_id: 1, image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGFydHl8ZW58MHx8MHx8&w=1000&q=80')
Event.create!(title: "Dinner", description: "Time to celebrate!", start: '2022-05-15 08:45' , end: '2022-05-16 12:45', group_id: 2, image: 'https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')
Event.create!(title: "Beer Festival", description: "Time to drink Beer!", start: '2022-05-15 08:45' , end: '2022-05-16 12:45', group_id: 1, image: 'https://cdn.craftbeer.com/wp-content/uploads/Oskar_Blues_Festival_1200.jpg')
Event.create!(title: "Birthday", description: "Time to celebrate!", start: '2022-05-15 08:45' , end: '2022-05-16 12:45', group_id: 4, image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGFydHl8ZW58MHx8MHx8&w=1000&q=80')
Event.create!(title: "Fowling", description: "Let's get Fowling!", start: '2022-05-15 08:45' , end: '2022-05-16 12:45', group_id: 5, image: 'https://vipnightlife.com/wp-content/uploads/others/Fowling-Warehouse-Atlanta-1.jpg')
Event.create!(title: "Bowling", description: "Time to Bowl!", start: '2022-05-15 08:45' , end: '2022-05-16 12:45', group_id: 1, image: 'https://media.istockphoto.com/photos/bowling-picture-id480732472')




puts 'Done Seeding'
