console.log("App.js src folder is running");

// JSX - JavaScript XML
// if statements
// ternary operators
// logical operator

const app = {
  title: "Indecision App",
  subtitle: "Put your life in the hands of a computer",
  // options: ["Option One", "Option Two"]
  options: []
};

const onFormSubmit = e => {
  e.preventDefault();
  // console.log("form submitted");

  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
  }

  reRender();
};

const onRemoveAll = () => {
  app.options = [];
  reRender();
};

const onDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
};

const reRender = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      {app.options.length > 0 ? (
        <p>Here are your options</p>
      ) : (
        <p>No Options</p>
      )}
      <button disabled={app.options.length == 0} onClick={onDecision}>
        What should I do?
      </button>
      <button disabled={app.options.length == 0} onClick={onRemoveAll}>
        Remove All
      </button>
      <ol>
        {app.options.map(option => {
          return <li key={option}>Option output: {option}</li>;
        })}
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );

  const appRoot = document.getElementById("app");
  ReactDOM.render(template, appRoot);
};

reRender();

// const user = {
//   name: "denel",
//   age: 23,
//   location: "Malaysia"
// };

// const getLocation = loc => {
//   if (loc) {
//     return <p>Location: {loc}</p>;
//   }
// };

// const templateTwo = (
//   <div>
//     <h1>{user.name ? user.name.toUpperCase() + "!!!" : "Anonymous"}</h1>
//     {user.age && user.age >= 18 && <p>Age: {user.age} years old</p>}
//     {getLocation(user.location)}
//   </div>
// );

// ReactDOM.render(templateTwo, appRoot);
