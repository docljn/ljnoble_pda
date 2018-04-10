## Testing task 1:

Carry out static testing on the code below.
Read through the code.
Comment any errors you can see without correcting them.

```ruby
def func1 val
  if val = 1
  return true
  else
  return false
  end
end
```

- best practice would have arguments in parentheses
- val = 1 is assignment, not testing equality
- indentation of the if-statement is unhelpful
- naming of function does not relate to actual purpose

```ruby
dif max a b
  if a > b
      return a
  else
  b
  end
end
end
```

- dif is not def i.e. no function defined
- the arguments should be in parentheses and comma-separated
- indentation is unhelpful
- there is an additional 'end' which is unnecessary
- inconsistent use of explicit and implicit return

```ruby
def looper
  for i in 1..10
  puts i
  end
end
```

- indentation unhelpful
- looper function is complete at this point


- the following code appears to be inter-related, but has not been defined as a function.
- this may or may not be deliberate
```ruby
failures = 0

if looper == 10
  puts "looper passed"
else
  puts "looper failed"
  failures = failures + 1
```

- missing end
- looper will never return 10 as puts returns nil
- need to add explicit return of i after end of loop

```ruby
if func1(3) == false
  puts "func1(3) passed"
else
  puts "func1(3) failed"
  failures = failures + 1
end


if max(100,1) == 100
  puts "max(100,1) passed"
else
  puts "func1(3) failed"
  failrues = failures + 1
end
```

- copy-paste appears to have been used at line 68
- refers to func1(3) instead of max(100,1)
- mis-spelling of failrues


```ruby
if failures
  puts "Test Failed"
else
  puts "Test Passed"
end
```

- if failures WHAT? May be using the "truthy" shorthand where 0 is falsy
- This will give Test Failed even if failures = 0 as set
at start of test run.
- should be
```ruby
if failures > 0
```
