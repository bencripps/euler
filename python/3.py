#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Author: ben_cripps
# @Date:   2015-01-02 22:11:07
# @Last Modified by:   ben_cripps
# @Last Modified time: 2015-01-02 22:24:42

import math

num = 600851475143
factors = [x for x in range(1, (int (math.sqrt(num)))) if num % x == 0]

def prime(n):
    return len([x for x in range(2, n) if n % x == 0]) == 0

print(max(filter(prime, factors)))