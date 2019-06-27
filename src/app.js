class IndecisionApp extends React.Component {
  constructor(props){
    super(props);
    this.removeHandler = this.removeHandler.bind(this);
    this.pickHandler = this.pickHandler.bind(this);
    this.state = {
      opten: ["Thing 1", "Thing 2", "Thing 4"]
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

  render() {
    const titel = "Indecision";
    const sutitel = "Put your life in the hands of a computer";

    return (
      <div>
        <Header title={titel} subtitle={sutitel} />
        <Action pickHandler={this.pickHandler} hasOptions={this.state.opten.length > 0} />
        <Options removeHandler={this.removeHandler} hasOptions={this.state.opten.length > 0} options={this.state.opten} />
        <AddOption />
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
        <button onClick={this.props.pickHandler} disabled={!this.props.hasOptions}>What should I do?</button>
      </div>
    );
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        <br />
        <button disabled={!this.props.hasOptions} onClick={this.props.removeHandler}>Remove all</button>
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
  addOptionHandler(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();

    if (option) {
      alert(option);
      // app.options.push(option);
      // e.target.elements.option.value = "";
    }
  }

  render() {
    return (
      <div>
        Add Options here
        <form onSubmit={this.addOptionHandler}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
