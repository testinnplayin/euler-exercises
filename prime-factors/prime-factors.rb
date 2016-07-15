#This is the Ruby version of the Euler prime factors problem.
#A prime factor is a factor of a number that can only be divided by exactly two factors, itself and 1.
#Must be greater than 1, smallest prime factor is 2

total_number = 600851475143
cur_number = 2
test_number = 0

while (Math.sqrt(cur_number) <= total_number)
  if (total_number % cur_number == 0)
    total_number /= cur_number
    test_number = cur_number
  else
    cur_number += 1
  end
end



if (total_number > test_number)
  test_number = total_number
end

puts "The largest prime factor of 600851475143 is #{test_number}"
