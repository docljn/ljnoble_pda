# hash.rb

person = {
  name: "Frances",
  age: 10,
  eats: ["sausages", "ice-cream", "chips"],
  likes: "climbing"
}

person[:favourite_colour] = "blue"

p "#{person[:name]}'s favourite colour is #{person[:favourite_colour]}"
