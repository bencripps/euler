#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Author: ben_cripps
# @Date:   2015-01-03 10:33:19
# @Last Modified by:   ben_cripps
# @Last Modified time: 2015-01-03 14:10:27
import math

def isPrime(n):
    return n != 1 and len([x for x in range(2, n) if n % x == 0]) == 0

def get_exponent(n,x):
    return math.floor(math.log(n,x))

def smallest_number_divisible_by(n):
    prime_factors = [x for x in range(2,n) if isPrime(x)]
    number_of_primes = map(lambda x: math.pow(x, get_exponent(n,x)), prime_factors)
    return reduce(lambda x,y: x*y, number_of_primes)

print(smallest_number_divisible_by(20))