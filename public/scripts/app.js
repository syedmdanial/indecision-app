"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Counter = function (_React$Component) {
  _inherits(Counter, _React$Component);

  function Counter(props) {
    _classCallCheck(this, Counter);

    var _this = _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this, props));

    _this.addOneHandler = _this.addOneHandler.bind(props);
    _this.minusOneHandler = _this.minusOneHandler.bind(props);
    _this.resetHandler = _this.resetHandler.bind(props);
    return _this;
  }

  _createClass(Counter, [{
    key: "addOneHandler",
    value: function addOneHandler() {
      console.log("add one");
    }
  }, {
    key: "minusOneHandler",
    value: function minusOneHandler() {
      console.log("minus one");
    }
  }, {
    key: "resetHandler",
    value: function resetHandler() {
      console.log("reset");
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "h1",
          null,
          "Count: "
        ),
        React.createElement(
          "button",
          { onClick: this.addOneHandler },
          "+1"
        ),
        React.createElement(
          "button",
          { onClick: this.minusOneHandler },
          "-1"
        ),
        React.createElement(
          "button",
          { onClick: this.resetHandler },
          "Reset"
        )
      );
    }
  }]);

  return Counter;
}(React.Component);

ReactDOM.render(React.createElement(Counter, null), document.getElementById("app"));

// let count = 0;

// const addOne = () => {
//   count++;
//   reRenderCount();
// };
// const minusOne = () => {
//   count--;
//   reRenderCount();
// };
// const reset = () => {
//   count = 0;
//   reRenderCount();
// };

// const reRenderCount = () => {
//   const templateTwo = (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={addOne} className="button">
//         +1
//       </button>
//       <button onClick={minusOne} className="button">
//         -1
//       </button>
//       <button onClick={reset} className="button">
//         reset
//       </button>
//     </div>
//   );

//   // console.log(templateTwo);

//   const appRoot = document.getElementById("app");
//   ReactDOM.render(templateTwo, appRoot);
//   // ReactDOM.render(templateTwo, appRoot);
// };

// reRenderCount();
