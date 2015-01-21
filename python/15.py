#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Author: ben_cripps
# @Date:   2015-01-20 20:20:25
# @Last Modified by:   ben_cripps
# @Last Modified time: 2015-01-20 20:27:45

def factorial(n):
    return reduce(lambda x,y: x*y, range(1, n+1))

n = 20
fac_n = factorial(n)

print(factorial(2*n) / (fac_n * fac_n))