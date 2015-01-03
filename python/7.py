#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Author: ben_cripps
# @Date:   2015-01-03 14:27:30
# @Last Modified by:   ben_cripps
# @Last Modified time: 2015-01-03 17:35:13

def get_prime(which):
    limit = which*100
    not_prime = set()
    primes = []

    for i in range(2, limit):
        if i in not_prime:
            continue

        for f in range(i*2, limit, i):
            not_prime.add(f)

        primes.append(i)

    return primes[which]

print(get_prime(10000))


