#external (describe, it)

#metaimport masakari
#metaimport '..'

refer (require 'chai') expect

#defmacro for-all
  unary
  LOW
  expand: args ->
    assert! args.count == 2
    var actual = args.at 0
    var expected = args.at 1
    fun str node -> ast.new-value(node.to-expression-string())
    ` expect(~`str actual).to.equal ~`str expected

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
