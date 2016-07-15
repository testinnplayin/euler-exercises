#This is the Ruby version of the Fibonacci number Euler exercise
#The answer is 4613732

def getFibbo
  prev_num = 1
  cur_num = 2
  running_total = 0
  sum_total = 0
  while (prev_num < 4E6)
    if (prev_num % 2 == 0)
      sum_total += prev_num
    end
    running_total = cur_num + prev_num
    prev_num = cur_num
    cur_num = running_total
    puts "Current total is #{running_total}"
  end
  return sum_total
end

result = getFibbo
puts "The total sum of the Fibonacci numbers up to 4 million is #{result}"
