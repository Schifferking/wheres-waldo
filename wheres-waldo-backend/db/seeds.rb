# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

# defining character entries from the image
waldo = {name: "Waldo", x_start: 557, x_end: 581, y_start: 153, y_end: 195}
odlaw = {name: "Odlaw", x_start: 263, x_end: 277, y_start: 633, y_end: 666}
wenda = {name: "Wenda", x_start: 397, x_end: 411, y_start: 627, y_end: 672}
wizard = {name: "Wizard Whitebeard", x_start: 914, x_end: 931, y_start: 40, y_end: 66}
characters = [waldo, odlaw, wenda, wizard]
characters.each do |character|
  CharacterPosition.create(character)
end
