#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Author: ben_cripps
# @Date:   2015-01-03 14:06:53
# @Last Modified by:   ben_cripps
# @Last Modified time: 2015-01-03 14:21:44

import math

sum_of_squares = math.pow(reduce(lambda x,y: x+y, range(101)), 2)
square_each = reduce(lambda x,y: x+y, [math.pow(x, 2) for x in range(101)])

print(abs(sum_of_squares - square_each))