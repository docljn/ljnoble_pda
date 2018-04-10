# hash.rb

frances = {
  name: "Frances",
  age: 10,
  eats: ["sausages", "ice-cream", "chips"],
  likes: "climbing"
}


def describe_person(person)
  return "#{person[:name]} is #{person[:age]} years old and likes #{person[:likes]}. #{person[:name]} likes eating #{person[:eats].join(", ").to_s}."
end

p describe_person(frances)
