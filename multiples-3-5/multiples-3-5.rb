#This is the Ruby version of the multiples of 3 and 5 Euler exercise

def get_sum
  sum_total = 0
  (0..1000).each do |i|
    if ((i % 3 == 0) || (i % 5 == 0))
      sum_total += i
    end
  end
  return sum_total
end

result = get_sum

puts "The sum of multiples of 3 and 5 from 0 to 1000 is #{result}."
