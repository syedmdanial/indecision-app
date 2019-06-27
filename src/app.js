class IndecisionApp extends React.Component {
  render() {
    const titel = "Indecision";
    const sutitel = "Put your life in the hands of a computer";
    const opten = ["Thing 1", "Thing 2", "Thing 4"];

    return (
      <div>
        <Header title={titel} subtitle={sutitel} />
        <Action />
        <Options options={opten} />
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
  pickHandler() {
    alert("Picked");
  }

  render() {
    return (
      <div>
        <button onClick={this.pickHandler}>What should I do?</button>
      </div>
    );
  }
}

class Options extends React.Component {
  constructor(props) {
    super(props);
    this.removeHandler = this.removeHandler.bind(this);
  }

  removeHandler() {
    // alert("Removed");
    console.log(this.props.options);
  }

  render() {
    return (
      <div>
        <br />
        <button onClick={this.removeHandler}>Remove all</button>
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
