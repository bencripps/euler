#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Author: ben_cripps
# @Date:   2015-01-07 22:26:27
# @Last Modified by:   ben_cripps
# @Last Modified time: 2015-01-07 22:35:34

from itertools import permutations

def get_permutations(str):
    return [x for x in permutations(str, 9)]

def clean(n):
    return ''.join(list(n))

print(clean(get_permutations("0123456789")[1000000]))