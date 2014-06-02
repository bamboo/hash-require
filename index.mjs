#external module
module.exports = ast ->
  ['require', 'export'].for-each #->
    require ('./' + #it) ast
