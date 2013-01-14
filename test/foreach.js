describe('jamesvsnowden/foreach', function() {

  var forEach = require('foreach');

  it('should invoke the callback for each item in an array', function() {
    var a = [1, 2],
        r = 0;
    forEach(a, function(v) {
      r += v;
    });
    assert(r === 3);
  });

  it('should invoke the callback with the item as the first argument', function() {
    var a = [{}],
        r;
    forEach(a, function(v) {
      r = v;
    });
    assert(r === a[0]);
  });

  it('should invoke the callback with the index of the item as the second argument', function() {
    var a = [{}, {}, {}],
        r;
    forEach(a, function(v, i) {
      r = i;
    });
    assert(r === 2);
  });

  it('should invoke the callback with the array as the third argument', function() {
    var a = [{}],
        r;
    forEach(a, function(v, i, a) {
      r = a;
    });
    assert(r === a);
  });

  it('should invoke the callback within a scope shen provided', function() {
    var a = [{}, {}, {}],
        o = {},
        r;
    forEach(a, function() {
      r = this;
    }, o);
    assert(r === o);
  });

});
