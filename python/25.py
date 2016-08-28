#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Author: ben_cripps
# @Date:   2015-09-03 09:20:47
# @Last Modified by:   ben_cripps
# @Last Modified time: 2015-09-03 10:05:51

def fib():

    last_index = 0
    current = 1
    return_val = 1

    while True:
        return_val = last_index + current
        last_index = current
        current = return_val
        yield return_val

for i, x in enumerate(fib()):
    if len(str(x)) == 1000:
        print(i)
        break