#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Author: Ben
# @Date:   2015-01-08 13:43:07
# @Last Modified by:   Ben
# @Last Modified time: 2015-01-08 18:09:43

from math import sqrt

def isPrime(n):
    return n != 1 and len([x for x in range(2, int(sqrt(n))) if n % x == 0]) == 0

print(filter(isPrime, [x for x in xrange(2000000)]))