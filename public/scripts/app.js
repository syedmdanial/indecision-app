"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
  _inherits(IndecisionApp, _React$Component);

  function IndecisionApp(props) {
    _classCallCheck(this, IndecisionApp);

    var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

    _this.removeHandler = _this.removeHandler.bind(_this);
    _this.pickHandler = _this.pickHandler.bind(_this);
    _this.handleAddOption = _this.handleAddOption.bind(_this);
    _this.state = {
      opten: []
    };
    return _this;
  }

  _createClass(IndecisionApp, [{
    key: "removeHandler",
    value: function removeHandler() {
      this.setState(function () {
        return {
          opten: []
        };
      });
    }
  }, {
    key: "pickHandler",
    value: function pickHandler() {
      var randomNum = Math.floor(Math.random() * this.state.opten.length);
      var option = this.state.opten[randomNum];
      alert(option);
    }
  }, {
    key: "handleAddOption",
    value: function handleAddOption(optionValue) {
      if (!optionValue) {
        return "Enter valid value to add item";
      } else if (this.state.opten.indexOf(optionValue) > -1) {
        //check if alraedy exist (-1 means not exist)
        return "This option already exits";
      }

      this.setState(function (prevOptionState) {
        return {
          opten: prevOptionState.opten.concat(optionValue)
          // prevOptionState.opten.push(optionValue);
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var titel = "Indecision";
      var sutitel = "Put your life in the hands of a computer";

      return React.createElement(
        "div",
        null,
        React.createElement(Header, { title: titel, subtitle: sutitel }),
        React.createElement(Action, {
          pickHandler: this.pickHandler,
          hasOptions: this.state.opten.length > 0
        }),
        React.createElement(Options, {
          removeHandler: this.removeHandler,
          hasOptions: this.state.opten.length > 0,
          options: this.state.opten
        }),
        React.createElement(AddOption, { handleAddOption: this.handleAddOption })
      );
    }
  }]);

  return IndecisionApp;
}(React.Component);

var Header = function (_React$Component2) {
  _inherits(Header, _React$Component2);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "h1",
          null,
          this.props.title
        ),
        React.createElement(
          "h2",
          null,
          this.props.subtitle
        )
      );
    }
  }]);

  return Header;
}(React.Component);

var Action = function (_React$Component3) {
  _inherits(Action, _React$Component3);

  function Action() {
    _classCallCheck(this, Action);

    return _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).apply(this, arguments));
  }

  _createClass(Action, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "button",
          {
            onClick: this.props.pickHandler,
            disabled: !this.props.hasOptions
          },
          "What should I do?"
        )
      );
    }
  }]);

  return Action;
}(React.Component);

var Options = function (_React$Component4) {
  _inherits(Options, _React$Component4);

  function Options() {
    _classCallCheck(this, Options);

    return _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).apply(this, arguments));
  }

  _createClass(Options, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement("br", null),
        React.createElement(
          "button",
          {
            disabled: !this.props.hasOptions,
            onClick: this.props.removeHandler
          },
          "Remove all"
        ),
        React.createElement(
          "ol",
          null,
          this.props.options.map(function (opt) {
            return React.createElement(Option, { key: opt, optionText: opt });
          })
        )
      );
    }
  }]);

  return Options;
}(React.Component);

var Option = function (_React$Component5) {
  _inherits(Option, _React$Component5);

  function Option() {
    _classCallCheck(this, Option);

    return _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).apply(this, arguments));
  }

  _createClass(Option, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "li",
        null,
        this.props.optionText
      );
    }
  }]);

  return Option;
}(React.Component);

var AddOption = function (_React$Component6) {
  _inherits(AddOption, _React$Component6);

  function AddOption(props) {
    _classCallCheck(this, AddOption);

    var _this6 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

    _this6.addOptionHandler = _this6.addOptionHandler.bind(_this6);
    _this6.state = {
      error: undefined
    };
    return _this6;
  }

  _createClass(AddOption, [{
    key: "addOptionHandler",
    value: function addOptionHandler(e) {
      e.preventDefault();
      var optionValue = e.target.elements.optionValue.value.trim();
      var error = this.props.handleAddOption(optionValue);

      this.setState(function () {
        return {
          error: error
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        this.state.error && React.createElement(
          "p",
          null,
          this.state.error
        ),
        React.createElement(
          "form",
          { onSubmit: this.addOptionHandler },
          React.createElement("input", { type: "text", name: "optionValue" }),
          React.createElement(
            "button",
            null,
            "Add Option"
          )
        )
      );
    }
  }]);

  return AddOption;
}(React.Component);

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById("app"));
