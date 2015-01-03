#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Author: ben_cripps
# @Date:   2015-01-03 10:33:19
# @Last Modified by:   ben_cripps
# @Last Modified time: 2015-01-03 13:56:28
import math

def isPrime(n):
    return n != 1 and len([x for x in range(2, n) if n % x == 0]) == 0


def smallesNumberDivisibleBy(n):
    primes = filter(isPrime, [x for x in range(2,n)])
    exps = map(lambda x: math.pow(x, math.floor(math.log(n,x))), primes)
    return reduce(lambda x,y: x*y, exps)

print(smallesNumberDivisibleBy(20))