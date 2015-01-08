#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Author: ben_cripps
# @Date:   2015-01-07 21:02:56
# @Last Modified by:   ben_cripps
# @Last Modified time: 2015-01-08 09:22:53

import math

def get_triplet(m,n):
    a = abs(pow(m,2) - pow(n,2))
    b = 2 * (m * n)
    c = pow(m,2) + pow(n,2)

    return [a,b,c]

def is_correct_triplet(set):
     return set[0] + set[1] + set[2] == 1000

def product(set):
    return reduce(lambda x,y: x*y, set[0]) 

print(product([get_triplet(x,y) for x in xrange(1000) for y in range(1000) if is_correct_triplet(get_triplet(x,y))])) 


