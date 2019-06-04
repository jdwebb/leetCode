"""  509. Fibonacci Number

The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

F(0) = 0,   F(1) = 1
F(N) = F(N - 1) + F(N - 2), for N > 1.
Given N, calculate F(N).
"""

class Solution:
    def fib(self, N: int) -> int:
        first = 0
        second = 1
        attempt = 2
        
        if(N == 0):
            return 0
        elif(N == 1):
            return 1
        else:
            while(attempt < N):            
                firstCopy = copy.copy(second)
                second = first + second
                first = firstCopy
                attempt = attempt + 1
            return first+second