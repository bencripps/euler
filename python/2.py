#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Author: ben_cripps
# @Date:   2014-12-06 14:47:20
# @Last Modified by:   ben_cripps
# @Last Modified time: 2015-01-02 22:44:34

def fib(limit):
    arr = []

    def loop(a,b):
        if (a < limit):
            b+= a
            arr.append(b)
            loop(b,a)

    loop(0,1)
    return arr

     

print(reduce(lambda x,y: x+y, filter(lambda x: x % 2 == 0, fib(4000000))))