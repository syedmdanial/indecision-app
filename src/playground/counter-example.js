class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.addOneHandler = this.addOneHandler.bind(props);
    this.minusOneHandler = this.minusOneHandler.bind(props);
    this.resetHandler = this.resetHandler.bind(props);
  }

  addOneHandler() {
    console.log("add one");
  }
  minusOneHandler() {
    console.log("minus one");
  }
  resetHandler() {
    console.log("reset");
  }
  render() {
    return (
      <div>
        <h1>Count: </h1>
        <button onClick={this.addOneHandler}>+1</button>
        <button onClick={this.minusOneHandler}>-1</button>
        <button onClick={this.resetHandler}>Reset</button>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById("app"));

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
