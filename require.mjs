#metaimport masakari

#metamodule

  #keepmacro #require
    unary
    LOW
    expand: specs ->

      fun decl tag ->
        #doto (tag.copy ())
          handle-as-tag-declaration ()

      fun name-from-string str ->
        str.val |>
          (require 'path').basename
          str.new-tag

      fun tag->string t ->
        t.new-value t.get-tag ()

      fun expand spec ->
        if (spec.tag? ())
          `
            var (~`decl spec) = require (~`tag->string spec)
        else if (spec.call? ()) do
          var tag-or-string = spec.at 0
          var refs = spec.at(1).as-tuple()
          var name =
            if (tag-or-string.tag?())
              tag-or-string
            else
              name-from-string tag-or-string
          `
            (~`expand tag-or-string)
            refer (~`name) (~`refs)
        else if (spec.tuple? ())
          |>
            spec.map expand
            spec.new-tuple
        else if (spec.property?()) do
          var ref = spec.at 0
          var name = spec.at 1
          var name-val =
            if (name.tag? ())
              tag->string name
            else
              name
          `
            var (~`decl ref) = require ~`name-val
        else if ('string' == typeof spec.val) do
          var name = name-from-string spec
          `
            var (~`decl name) = require ~`spec
        else do
          spec.error
            'unsupported #require pattern: ' + spec.print-ast ()
          null

      expand specs
