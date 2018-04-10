# array.rb

one_to_ten = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

def multiples(multiplier, array)
  multiples = array.map { |number| number * multiplier}
  return multiples
end

p one_to_ten

p multiples(10, one_to_ten)

# array.rb
