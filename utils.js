function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function fileToBase64(_x) {
  return _fileToBase.apply(this, arguments);
}

function _fileToBase() {
  _fileToBase = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(file) {
    var reader;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            reader = new FileReader();
            return _context.abrupt("return", new Promise(function (resolve, reject) {
              reader.onerror = function () {
                reader.abort();
                reject(new DOMException('Problem parsing input file.'));
              };

              reader.onloadend = function () {
                resolve(reader.result);
              };

              reader.readAsDataURL(file);
            }));

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _fileToBase.apply(this, arguments);
}

function clipString(text) {
  var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 35;
  return text.length < size || size < 14 ? text : "".concat(text.slice(0, size - 13), "...").concat(text.slice(text.length - size - 25));
}

export { clipString, fileToBase64 };
