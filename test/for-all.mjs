#metaimport masakari

#metamodule

  #keepmacro for-all
    unary
    LOW
    expand: args ->
      assert! args.count == 2
      var actual = args.at 0
      var expected = args.at 1
      fun str node -> ast.new-value(node.to-expression-string())
      ` expect(~`str actual).to.equal ~`str expected
