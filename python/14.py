#!/rusr/bin/env python
# -*- coding: utf-8 -*-
# @Author: ben_cripps
# @Date:   2015-01-20 20:01:10
# @Last Modified by:   ben_cripps
# @Last Modified time: 2015-01-20 20:19:04

def next(n):
    if n % 2 == 0:
        return n / 2
    else:
        return 1 + (3 * n)

def collatz(n, arr):
    if n == 1:
        return len(arr)
    else:
        arr.append(n)
        collatz(next(n), arr)

print(collatz(12,[]))