#external (describe, it)

#metaimport masakari
#metaimport './for-all'
#metaimport '..'

refer (require 'chai') expect

describe
  '#export'
  () ->
    it
      '#export m => module.exports = {m: m}'
      () ->
        for-all
          #export m
          do
            #external module
            module.exports = {m: m}

    it
      '#export (k: v) => module.exports = {k: v}'
      () ->
        for-all
          #export
            k: v
          do
            #external module
            module.exports = {k: v}
