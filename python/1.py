#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Author: ben_cripps
# @Date:   2014-12-06 14:39:05
# @Last Modified by:   ben_cripps
# @Last Modified time: 2014-12-06 14:45:41

print sum([i for i in xrange(1001) if i % 3 == 0 or i % 5 == 0])