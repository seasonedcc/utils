'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var react = require('react');

function useInterval(callback, delay) {
  var savedCallback = react.useRef(function () {}); // Remember the latest callback.

  react.useEffect(function () {
    savedCallback.current = callback;
  }, [callback]); // Set up the interval.

  react.useEffect(function () {
    function tick() {
      savedCallback.current();
    }

    if (delay !== null) {
      var id = setInterval(tick, delay);
      return function () {
        return clearInterval(id);
      };
    }

    return undefined;
  }, [delay]);
}

function useOnMount(callback) {
  react.useEffect(function () {
    callback();
  }, []);
}

function useOnUnmount(callback) {
  react.useEffect(function () {
    return callback;
  }, []);
}

exports.useInterval = useInterval;
exports.useOnMount = useOnMount;
exports.useOnUnmount = useOnUnmount;
