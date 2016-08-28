#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Author: ben_cripps
# @Date:   2015-09-03 21:46:59
# @Last Modified by:   ben_cripps
# @Last Modified time: 2015-09-03 22:12:07

from decimal import *

def decimal_provider():
    denominator = 1

    while denominator < 1000:
        yield len(str(Decimal(Decimal(1) / Decimal(denominator))))
        denominator+= 1

#def count_recurring_cycle(dec):

num_arr = list(decimal_provider())


print(num_arr)