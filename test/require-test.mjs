#external (describe, it)

#metaimport masakari
#metaimport './for-all'
#metaimport '..'

refer (require 'chai') expect

describe
  '#require'
  () ->
    it
      '#require m => var m = require "m"'
      () ->
        for-all
          #require m
          var m = require 'm'

    it
      '#require (m, n) => (var m = require "m", var n = require "n")'
      () ->
        for-all
          block
            #require (m, n)
          block
            var m = require 'm'
            var n = require 'n'

    it
      '#require m s => (var m = require "m", var s = m.s)'
      () ->
        for-all
          block
            #require m s
          block
            var m = require 'm'
            var s = m.s

    it
      '#require "./m" s => (var m = require "./m", var s = m.s)'
      () ->
        for-all
          block
            #require './m' s
          block
            var m = require './m'
            var s = m.s
