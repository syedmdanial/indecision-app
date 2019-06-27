let visibility = false; //false by default

const onShowDetail = () => {
  visibility = !visibility; // change visibility value (vise versa of initial)
  render();
};

const render = () => {
  const visibleTemplate = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={onShowDetail}>
        {visibility ? "Hide Details" : "Show details"}
      </button>
      <p>{visibility && <span>Here are the details you can see</span>}</p>
    </div>
  );

  const appRoot = document.getElementById("app");
  ReactDOM.render(visibleTemplate, appRoot);
};
render();
