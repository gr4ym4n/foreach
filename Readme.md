
# foreach

Cross-browser array forEach function

This function provides a simple, fast, and quick fallback for browsers
that do not support Array#forEach natively. The provided fallback is not
designed to be spec-compliant, nor will it report errors nicely.

## Installation

    $ component install jamesvsnowden/foreach

## API

### forEach(array, callback [, scope])

Invoke `callback` in `scope` for each item in the `array`, passing the
item, index and array.

```js
var forEach = require('foreach'),
    array = [1],
    scope = {};

forEach(array, function(item, index, array) {
  item === 1;
  index === 0;
  array === array;
  this === scope;
}, scope);
```

## Dependencies

None.

## License

  MIT
