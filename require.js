var _$0;
_$0: {
    module.exports = function (ast) {
        var _$1, _$2, _$3, _$4;
        _$2: {
            _$3: {
                _$4: {
                    ast.defineSymbol(ast.createMacro('#require', 'unary', 'LOW', {
                        'expand': function (ast) {
                            var specs, decl, nameFromString, tagToString, expand, _$5, _$6;
                            _$6: {
                                specs = ast.at(0);
                                decl = function (tag) {
                                    var dotozx7xo43hb, _$7, _$8;
                                    _$8: {
                                        dotozx7xo43hb = tag.copy();
                                        dotozx7xo43hb.handleAsTagDeclaration();
                                        _$7 = dotozx7xo43hb;
                                        break _$8;
                                    }
                                    return _$7;
                                };
                                nameFromString = function (str) {
                                    return str.newTag(require('path').basename(str.val));
                                };
                                tagToString = function (t) {
                                    return t.newValue(t.getTag());
                                };
                                expand = function (spec) {
                                    var tagOrString, refs, name, ref, nameVal, _$7, _$8, codeTag0, _$9, _$10, _$11, _$12, codeTag1, _$13, _$14, _$15, _$16, codeTag2, _$17, _$18, _$19, codeTag3, _$20;
                                    if (spec.isTag()) {
                                        _$8: {
                                            codeTag0 = ast.fromJsonString('{"id":"=","kind":"builtin","val":"=","loc":{"source":"/home/bamboo/code/hyperfair/hash-require/require.mjs","start":{"line":25,"column":12},"end":{"line":26,"column":8}},"args":[{"id":"<tagDeclaration>","kind":"tag","val":"unquote1","loc":{"source":"/home/bamboo/code/hyperfair/hash-require/require.mjs","start":{"line":25,"column":12},"end":{"line":25,"column":28}},"args":[]},{"id":"<call>","kind":"builtin","val":null,"loc":{"source":"/home/bamboo/code/hyperfair/hash-require/require.mjs","start":{"line":25,"column":40},"end":{"line":25,"column":59}},"args":[{"id":"<tag>","kind":"tag","val":"require","loc":{"source":"/home/bamboo/code/hyperfair/hash-require/require.mjs","start":{"line":25,"column":32},"end":{"line":25,"column":32}},"args":[]},{"id":"<tag>","kind":"tag","val":"unquote2","loc":{"source":"/home/bamboo/code/hyperfair/hash-require/require.mjs","start":{"line":25,"column":40},"end":{"line":25,"column":59}},"args":[]}]}]}');
                                            codeTag0.replaceTag('unquote1', decl(spec));
                                            codeTag0.replaceTag('unquote2', tagToString(spec));
                                            _$7 = codeTag0;
                                            break _$8;
                                        }
                                    } else {
                                        if (spec.isCall()) {
                                            _$9: {
                                                tagOrString = spec.at(0);
                                                refs = spec.at(1).asTuple();
                                                if (tagOrString.isTag()) {
                                                    _$10 = tagOrString;
                                                } else {
                                                    _$10 = nameFromString(tagOrString);
                                                }
                                                name = _$10;
                                                _$12: {
                                                    codeTag1 = ast.fromJsonString('{"id":"<tuple>","kind":"builtin","val":null,"loc":{"source":"/home/bamboo/code/hyperfair/hash-require/require.mjs","start":{"line":35,"column":12},"end":{"line":37,"column":8}},"args":[{"id":"<tag>","kind":"tag","val":"unquote1","loc":{"source":"/home/bamboo/code/hyperfair/hash-require/require.mjs","start":{"line":35,"column":12},"end":{"line":35,"column":36}},"args":[]},{"id":"refer","kind":"macro","val":"refer","loc":{"source":"/home/bamboo/code/hyperfair/hash-require/require.mjs","start":{"line":36,"column":12},"end":{"line":36,"column":12}},"args":[{"id":"<tag>","kind":"tag","val":"unquote2","loc":{"source":"/home/bamboo/code/hyperfair/hash-require/require.mjs","start":{"line":36,"column":18},"end":{"line":36,"column":25}},"args":[]},{"id":"<tag>","kind":"tag","val":"unquote3","loc":{"source":"/home/bamboo/code/hyperfair/hash-require/require.mjs","start":{"line":36,"column":27},"end":{"line":36,"column":34}},"args":[]}]}]}');
                                                    codeTag1.replaceTag('unquote1', expand(tagOrString));
                                                    codeTag1.replaceTag('unquote2', name);
                                                    codeTag1.replaceTag('unquote3', refs);
                                                    _$11 = codeTag1;
                                                    break _$12;
                                                }
                                                _$7 = _$11;
                                                break _$9;
                                            }
                                        } else {
                                            if (spec.isTuple()) {
                                                _$7 = spec.newTuple(spec.map(expand));
                                            } else {
                                                if (spec.isProperty()) {
                                                    _$13: {
                                                        ref = spec.at(0);
                                                        name = spec.at(1);
                                                        if (name.isTag()) {
                                                            _$14 = tagToString(name);
                                                        } else {
                                                            _$14 = name;
                                                        }
                                                        nameVal = _$14;
                                                        _$16: {
                                                            codeTag2 = ast.fromJsonString('{"id":"=","kind":"builtin","val":"=","loc":{"source":"/home/bamboo/code/hyperfair/hash-require/require.mjs","start":{"line":50,"column":12},"end":{"line":51,"column":8}},"args":[{"id":"<tagDeclaration>","kind":"tag","val":"unquote1","loc":{"source":"/home/bamboo/code/hyperfair/hash-require/require.mjs","start":{"line":50,"column":12},"end":{"line":50,"column":27}},"args":[]},{"id":"<call>","kind":"builtin","val":null,"loc":{"source":"/home/bamboo/code/hyperfair/hash-require/require.mjs","start":{"line":50,"column":39},"end":{"line":50,"column":39}},"args":[{"id":"<tag>","kind":"tag","val":"require","loc":{"source":"/home/bamboo/code/hyperfair/hash-require/require.mjs","start":{"line":50,"column":31},"end":{"line":50,"column":31}},"args":[]},{"id":"<tag>","kind":"tag","val":"unquote2","loc":{"source":"/home/bamboo/code/hyperfair/hash-require/require.mjs","start":{"line":50,"column":39},"end":{"line":50,"column":39}},"args":[]}]}]}');
                                                            codeTag2.replaceTag('unquote1', decl(ref));
                                                            codeTag2.replaceTag('unquote2', nameVal);
                                                            _$15 = codeTag2;
                                                            break _$16;
                                                        }
                                                        _$7 = _$15;
                                                        break _$13;
                                                    }
                                                } else {
                                                    if ('string' === typeof spec.val) {
                                                        _$17: {
                                                            name = nameFromString(spec);
                                                            _$19: {
                                                                codeTag3 = ast.fromJsonString('{"id":"=","kind":"builtin","val":"=","loc":{"source":"/home/bamboo/code/hyperfair/hash-require/require.mjs","start":{"line":54,"column":12},"end":{"line":55,"column":8}},"args":[{"id":"<tagDeclaration>","kind":"tag","val":"unquote1","loc":{"source":"/home/bamboo/code/hyperfair/hash-require/require.mjs","start":{"line":54,"column":12},"end":{"line":54,"column":28}},"args":[]},{"id":"<call>","kind":"builtin","val":null,"loc":{"source":"/home/bamboo/code/hyperfair/hash-require/require.mjs","start":{"line":54,"column":40},"end":{"line":54,"column":40}},"args":[{"id":"<tag>","kind":"tag","val":"require","loc":{"source":"/home/bamboo/code/hyperfair/hash-require/require.mjs","start":{"line":54,"column":32},"end":{"line":54,"column":32}},"args":[]},{"id":"<tag>","kind":"tag","val":"unquote2","loc":{"source":"/home/bamboo/code/hyperfair/hash-require/require.mjs","start":{"line":54,"column":40},"end":{"line":54,"column":40}},"args":[]}]}]}');
                                                                codeTag3.replaceTag('unquote1', decl(name));
                                                                codeTag3.replaceTag('unquote2', spec);
                                                                _$18 = codeTag3;
                                                                break _$19;
                                                            }
                                                            _$7 = _$18;
                                                            break _$17;
                                                        }
                                                    } else {
                                                        _$20: {
                                                            spec.error('unsupported #require pattern: ' + spec.printAst());
                                                            _$7 = null;
                                                            break _$20;
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                    return _$7;
                                };
                                _$5 = expand(specs);
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
//# sourceMappingURL=require.js.map