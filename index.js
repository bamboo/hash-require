var _$0;
_$0: {
    module.exports = function (ast) {
        return [
            'require',
            'export'
        ].forEach(function (__$arg$1) {
            return require('./' + __$arg$1)(ast);
        });
    };
}
//# sourceMappingURL=index.js.map