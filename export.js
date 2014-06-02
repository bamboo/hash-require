var _$0;
_$0: {
    module.exports = function (ast) {
        var _$1, _$2, _$3, _$4;
        _$2: {
            _$3: {
                _$4: {
                    ast.defineSymbol(ast.createMacro('#export', 'unary', 'LOW', {
                        'expand': function (ast) {
                            var specs, exports, _ivjstw9qw, _$5, _$6, _$7, _$8, codeTag0;
                            _$6: {
                                specs = ast.at(0);
                                exports = specs.asTuple().map(_ivjstw9qw = function (spec) {
                                    var _$7, _$8, codeTag0, _$9;
                                    if (spec.isTag()) {
                                        _$8: {
                                            codeTag0 = ast.fromJsonString('{"id":":","kind":"builtin","val":":","loc":{"source":"/home/bamboo/code/hyperfair/hash-require/export.mjs","start":{"line":11,"column":21},"end":{"line":11,"column":21}},"args":[{"id":"<tag>","kind":"tag","val":"unquote1","loc":{"source":"/home/bamboo/code/hyperfair/hash-require/export.mjs","start":{"line":11,"column":12},"end":{"line":11,"column":19}},"args":[]},{"id":"<tag>","kind":"tag","val":"unquote2","loc":{"source":"/home/bamboo/code/hyperfair/hash-require/export.mjs","start":{"line":11,"column":23},"end":{"line":11,"column":30}},"args":[]}]}');
                                            codeTag0.replaceTag('unquote1', spec);
                                            codeTag0.replaceTag('unquote2', spec);
                                            _$7 = codeTag0;
                                            break _$8;
                                        }
                                    } else {
                                        if (spec.isProperty()) {
                                            _$7 = spec;
                                        } else {
                                            _$9: {
                                                spec.error('invalid export spec: ' + spec.printAst());
                                                _$7 = spec;
                                                break _$9;
                                            }
                                        }
                                    }
                                    return _$7;
                                });
                                _$8: {
                                    codeTag0 = ast.fromJsonString('{"id":"<do>","kind":"builtin","val":null,"loc":{"source":"/home/bamboo/code/hyperfair/hash-require/export.mjs","start":{"line":17,"column":7},"end":{"line":20,"column":0}},"args":[{"id":"<xTag>","kind":"tag","val":"module","loc":{"source":"/home/bamboo/code/hyperfair/hash-require/export.mjs","start":{"line":18,"column":8},"end":{"line":18,"column":18}},"args":[]},{"id":"=","kind":"builtin","val":"=","loc":{"source":"/home/bamboo/code/hyperfair/hash-require/export.mjs","start":{"line":19,"column":23},"end":{"line":19,"column":23}},"args":[{"id":".","kind":"builtin","val":".","loc":{"source":"/home/bamboo/code/hyperfair/hash-require/export.mjs","start":{"line":19,"column":14},"end":{"line":19,"column":14}},"args":[{"id":"<tag>","kind":"tag","val":"module","loc":{"source":"/home/bamboo/code/hyperfair/hash-require/export.mjs","start":{"line":19,"column":8},"end":{"line":19,"column":8}},"args":[]},{"id":"<name>","kind":"tag","val":"exports","loc":{"source":"/home/bamboo/code/hyperfair/hash-require/export.mjs","start":{"line":19,"column":15},"end":{"line":19,"column":15}},"args":[]}]},{"id":"<object>","kind":"builtin","val":null,"loc":{"source":"/home/bamboo/code/hyperfair/hash-require/export.mjs","start":{"line":19,"column":25},"end":{"line":19,"column":39}},"args":[{"id":"<tag>","kind":"tag","val":"unquote1","loc":{"source":"/home/bamboo/code/hyperfair/hash-require/export.mjs","start":{"line":19,"column":25},"end":{"line":19,"column":39}},"args":[]}]}]}]}');
                                    codeTag0.replaceTag('unquote1', exports);
                                    _$7 = codeTag0;
                                    break _$8;
                                }
                                _$5 = _$7;
                                break _$6;
                            }
                            return _$5;
                        }
                    }));
                }
            }
            _$1 = null;
            break _$2;
        }
        return _$1;
    };
}
//# sourceMappingURL=export.js.map