class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.removeHandler = this.removeHandler.bind(this);
    this.pickHandler = this.pickHandler.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      opten: []
    };
  }

  removeHandler() {
    this.setState(() => {
      return {
        opten: []
      };
    });
  }

  pickHandler() {
    const randomNum = Math.floor(Math.random() * this.state.opten.length);
    const option = this.state.opten[randomNum];
    alert(option);
  }

  handleAddOption(optionValue) {
    if (!optionValue) {
      return "Enter valid value to add item";
    } else if (this.state.opten.indexOf(optionValue) > -1) {
      //check if alraedy exist (-1 means not exist)
      return "This option already exits";
    }

    this.setState(prevOptionState => {
      return {
        opten: prevOptionState.opten.concat(optionValue)
        // prevOptionState.opten.push(optionValue);
      };
    });
  }

  render() {
    const titel = "Indecision";
    const sutitel = "Put your life in the hands of a computer";

    return (
      <div>
        <Header title={titel} subtitle={sutitel} />
        <Action
          pickHandler={this.pickHandler}
          hasOptions={this.state.opten.length > 0}
        />
        <Options
          removeHandler={this.removeHandler}
          hasOptions={this.state.opten.length > 0}
          options={this.state.opten}
        />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.pickHandler}
          disabled={!this.props.hasOptions}
        >
          What should I do?
        </button>
      </div>
    );
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        <br />
        <button
          disabled={!this.props.hasOptions}
          onClick={this.props.removeHandler}
        >
          Remove all
        </button>
        <ol>
          {this.props.options.map(opt => {
            return <Option key={opt} optionText={opt} />;
          })}
        </ol>
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return <li>{this.props.optionText}</li>;
  }
}

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.addOptionHandler = this.addOptionHandler.bind(this);
    this.state = {
      error: undefined
    };
  }

  addOptionHandler(e) {
    e.preventDefault();
    const optionValue = e.target.elements.optionValue.value.trim();
    const error = this.props.handleAddOption(optionValue);

    this.setState(() => {
      return {
        error
      };
    });
  }

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.addOptionHandler}>
          <input type="text" name="optionValue" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
