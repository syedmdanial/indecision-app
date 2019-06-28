class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.toggleVisibilityHandler = this.toggleVisibilityHandler.bind(this);
    this.state = {
      visibility: false
    };
  }

  toggleVisibilityHandler(){
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility
      };
    });

  }
  render(){
    return (
      <div>
        <h1> Visibility Toggle</h1>
        <button onClick={this.toggleVisibilityHandler}>{this.state.visibility ? "Hide Details" : "Show details"}</button>
        <p>{this.state.visibility && <span>Here are the details you can see</span>}</p>
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById("app"));
