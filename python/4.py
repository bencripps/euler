#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Author: ben_cripps
# @Date:   2015-01-02 22:46:28
# @Last Modified by:   ben_cripps
# @Last Modified time: 2015-01-02 22:55:03

def isPalindrome(n):
    return int(str(n)[::-1]) == n

numbers = [x*y for x in range(999) for y in range(999)]

print(max(filter(isPalindrome, numbers)))