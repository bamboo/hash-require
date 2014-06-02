#metaimport masakari

#metamodule

  #keepmacro #export
    unary
    LOW
    expand: specs ->
      var exports = specs.as-tuple().map fun spec ->
        if (spec.tag?())
          ` (~`spec) : (~`spec)
        else if (spec.property?())
          spec
        else do
          spec.error('invalid export spec: ' + spec.print-ast())
          spec
      `do
        #external module
        module.exports = { (~`exports) }
