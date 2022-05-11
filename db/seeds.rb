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

Event.create!(title: "Birthday", description: "Time to celebrate!", start: '2022-05-15 08:45' , end: '2022-05-16 12:45', group_id: 1, image: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1530103862676-de8c9debad1d%3Fixlib%3Drb-1.2.1%26ixid%3DMnwxMjA3fDB8MHxzZWFyY2h8MXx8cGFydHl8ZW58MHx8MHx8%26w%3D1000%26q%3D80&imgrefurl=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fparty&tbnid=sfKpvGtkZdIX-M&vet=12ahUKEwiHrfKYmdX3AhVUkGoFHdjnCd4QMygDegUIARCSAg..i&docid=Eb4KIPyXOJzelM&w=1000&h=667&q=party%20images&ved=2ahUKEwiHrfKYmdX3AhVUkGoFHdjnCd4QMygDegUIARCSAg')
Event.create!(title: "Dinner", description: "Time to celebrate!", start: '2022-05-15 08:45' , end: '2022-05-16 12:45', group_id: 2, image: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1530103862676-de8c9debad1d%3Fixlib%3Drb-1.2.1%26ixid%3DMnwxMjA3fDB8MHxzZWFyY2h8MXx8cGFydHl8ZW58MHx8MHx8%26w%3D1000%26q%3D80&imgrefurl=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fparty&tbnid=sfKpvGtkZdIX-M&vet=12ahUKEwiHrfKYmdX3AhVUkGoFHdjnCd4QMygDegUIARCSAg..i&docid=Eb4KIPyXOJzelM&w=1000&h=667&q=party%20images&ved=2ahUKEwiHrfKYmdX3AhVUkGoFHdjnCd4QMygDegUIARCSAg')
Event.create!(title: "Beer Festival", description: "Time to drink Beer!", start: '2022-05-15 08:45' , end: '2022-05-16 12:45', group_id: 1, image: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.craftbeer.com%2Fwp-content%2Fuploads%2FOskar_Blues_Festival_1200.jpg&imgrefurl=https%3A%2F%2Fwww.craftbeer.com%2Fcraft-beer-muses%2Fcraft-beer-festivals-in-2017&tbnid=yib2i56WJ46EtM&vet=12ahUKEwjCwbmzmtX3AhUSgGoFHcS7Dc4QMygBegUIARDWAQ..i&docid=bDEFxCIuAMNKGM&w=1200&h=700&q=beer%20festival%20images&ved=2ahUKEwjCwbmzmtX3AhUSgGoFHcS7Dc4QMygBegUIARDWAQ')
Event.create!(title: "Birthday", description: "Time to celebrate!", start: '2022-05-15 08:45' , end: '2022-05-16 12:45', group_id: 4, image: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1530103862676-de8c9debad1d%3Fixlib%3Drb-1.2.1%26ixid%3DMnwxMjA3fDB8MHxzZWFyY2h8MXx8cGFydHl8ZW58MHx8MHx8%26w%3D1000%26q%3D80&imgrefurl=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fparty&tbnid=sfKpvGtkZdIX-M&vet=12ahUKEwiHrfKYmdX3AhVUkGoFHdjnCd4QMygDegUIARCSAg..i&docid=Eb4KIPyXOJzelM&w=1000&h=667&q=party%20images&ved=2ahUKEwiHrfKYmdX3AhVUkGoFHdjnCd4QMygDegUIARCSAg')
Event.create!(title: "Fowling", description: "Let's get Fowling!", start: '2022-05-15 08:45' , end: '2022-05-16 12:45', group_id: 5, image: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fvipnightlife.com%2Fwp-content%2Fuploads%2Fothers%2FFowling-Warehouse-Atlanta-1.jpg&imgrefurl=https%3A%2F%2Fvipnightlife.com%2Fvenues%2Ffowling-warehouse-atlanta-ga%2F&tbnid=r38xtHOgnvJymM&vet=12ahUKEwjt_daKmtX3AhXDnGoFHZ-XBKQQMygKegUIARDtAQ..i&docid=36DoRq4z54V_UM&w=911&h=570&q=fowling%20images&ved=2ahUKEwjt_daKmtX3AhXDnGoFHZ-XBKQQMygKegUIARDtAQ')
Event.create!(title: "Bowling", description: "Time to Bowl!", start: '2022-05-15 08:45' , end: '2022-05-16 12:45', group_id: 1, image: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fmedia.istockphoto.com%2Fphotos%2Fbowling-picture-id480732472%3Fk%3D20%26m%3D480732472%26s%3D612x612%26w%3D0%26h%3D9FEbBHsXoQENlSypylK9FTXnB5NINNbCOr5SErRangA%3D&imgrefurl=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fbowling-strike&tbnid=pG5OqeMUe3VzpM&vet=12ahUKEwiyuP3omdX3AhVzcDwKHbDNBoEQMygAegUIARDyAQ..i&docid=i5XChAmROxV6lM&w=612&h=459&q=bowling%20images&ved=2ahUKEwiyuP3omdX3AhVzcDwKHbDNBoEQMygAegUIARDyAQ')




puts 'Done Seeding'
