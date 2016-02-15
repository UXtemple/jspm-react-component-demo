(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (factory());
}(this, function () { 'use strict';

  System.register(['react', './title'], function (_export) {
    var React, Title;
    return {
      setters: [function (_react) {
        React = _react.default;
      }, function (_title) {
        Title = _title.default;
      }],
      execute: function () {
        class HelloWorld extends React.Component {
          render() {
            return React.createElement(Title, null, 'Hello World');
          }

        }

        _export('HelloWorld', HelloWorld);
      }
    };
  });

}));