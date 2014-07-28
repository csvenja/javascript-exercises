function findMax(array) {
  if (array.length === 0) {
    return null;
  }
  return Math.max.apply(null, array);
}

var input = [1, 2, 3, 4, 5];
console.log(findMax(input));

function debouncing(callback, wait) {
  var timestamp = Date.now(),
      timeOut;

  var call = function () {
    if (Date.now() - timestamp < wait) {
      if (timeOut) {
        clearTimeOut(timeOut);
      }
      timeOut = setTimeOut(call, wait - ((Date.now() - timestamp));
    } else {
      timestamp = Date.now();
      callback.apply(this);
    }
  };

  return call;
}

var wait = 1000;
var debouncedFn = debouncing(callback, wait);
...
debounceFn(); // queues a setTimeout .
debounceFn(); // queues a setTimeout .
debounceFn(); // queues a setTimeout .
debounceFn();
debounceFn();
...wait 1000...
-> this is where callback() should occur


function debouncing(callback, wait) {
  var timeout;
  function call () {
    callback();
    return;
  }

  return function () {
    clearTimeout(timeout);
    timeout = setTimeout(call, wait);
  };
}

function log() {
  console.log("meow");
}

logDebounced = debouncing(log, 1000);
logDebounced();
logDebounced();
