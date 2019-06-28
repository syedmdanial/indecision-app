class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.addOneHandler = this.addOneHandler.bind(this);
    this.minusOneHandler = this.minusOneHandler.bind(this);
    this.resetHandler = this.resetHandler.bind(this);
    this.state = {
      kira: 0
    };
  }

  addOneHandler() {
    this.setState((prevState) => {
      return {
        kira: prevState.kira + 1
      };
    });
  }

  minusOneHandler() {
    this.setState((prevState) => {
      return {
        kira: prevState.kira - 1
      };
    });
  }

  resetHandler() {
    this.setState(() => {
      return {
        kira: 0
      };
    });;
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.kira}</h1>
        <button onClick={this.addOneHandler}>+1</button>
        <button onClick={this.minusOneHandler}>-1</button>
        <button onClick={this.resetHandler}>Reset</button>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById("app"));