#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Author: ben_cripps
# @Date:   2015-01-03 10:33:19
# @Last Modified by:   ben_cripps
# @Last Modified time: 2015-01-03 14:04:04
import math

def isPrime(n):
    return n != 1 and len([x for x in range(2, n) if n % x == 0]) == 0

def getExponent(n,x):
    return math.floor(math.log(n,x))

def smallesNumberDivisibleBy(n):
    primeFactors = filter(isPrime, [x for x in range(2,n)])
    numberOfPrimes = map(lambda x: math.pow(x, getExponent(n,x)), primeFactors)
    return reduce(lambda x,y: x*y, numberOfPrimes)

print(smallesNumberDivisibleBy(20))