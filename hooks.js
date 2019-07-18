import { useRef, useEffect } from 'react';

function useInterval(callback, delay) {
  var savedCallback = useRef(function () {}); // Remember the latest callback.

  useEffect(function () {
    savedCallback.current = callback;
  }, [callback]); // Set up the interval.

  useEffect(function () {
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
  useEffect(function () {
    callback();
  }, []);
}

function useOnUnmount(callback) {
  useEffect(function () {
    return callback;
  }, []);
}

export { useInterval, useOnMount, useOnUnmount };
