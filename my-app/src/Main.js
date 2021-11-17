
import './css/main.css';
import { useState } from "react";
// 引入外部js component 文件
import Car from './Car'

// function 的名字必须大写（还可以用arrow写法）
// function在react里就是component
function People() {
    return (
        <h2> I am a web programer </h2>
    );
}
function MissedGoal() {
  return <h1>MISSED!</h1>;
}

function MadeGoal() {
  return <h1>Goal!</h1>;
}

// function Goal(props) {
//   const isGoal = props.isGoal;
//   if (isGoal) {
//     return <MadeGoal/>;
//   }
//   return <MissedGoal/>;
// }

function Goal(props) {
  const isGoal = props.isGoal;
  return (
    <>
      {/* Ternary Operator */}
      {/* condition ? true : false */}
      { isGoal ? <MadeGoal/> : <MissedGoal/> }
    </>
  );
}


function Garage() {
  // item list（这个map应该是es6的新函数）
  const cars = [
    {id: 1, brand: 'Ford'},
    {id: 2, brand: 'BMW'},
    {id: 3, brand: 'Audi'}
  ];
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <ul>
        {cars.map((car) => <Car key={car.id} brand={car.brand} />)}
      </ul>
    </>
  );
}
function MyForm() {
  // const [name, setName] = useState("");
  const [inputs, setInputs] = useState({});
  const [textarea, setTextarea] = useState("this is a textarea");
  const [myCar, setMyCar] = useState("Volvo");

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   // w3cschool 有个错误, 在es6中必须使用反引号才能用${}
  //   alert(`The name you entered was: ${name}`);
  // }

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
    setTextarea(event.target.value)
    setMyCar(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
    alert(inputs.username + inputs.age);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
        <input 
          type="text"
          name="username"
          value={inputs.username || ""}
          onChange={handleChange}
          // onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>Enter your age:
        <input 
          type="number"
          name="age"
          value={inputs.age || ""}
          onChange={handleChange}
          // onChange={(e) => setName(e.target.value)}
        />
      </label>
      <textarea value={textarea} onChange={handleChange} />
      <select value={myCar} onChange={handleChange}>
        <option value="Ford">Ford</option>
        <option value="Volvo">Volvo</option>
        <option value="Fiat">Fiat</option>
      </select>
      <input type="submit" />
      {/* <p>{ name }</p> */}
    </form>
  )
}

function App(props) {
  const shoot = (a) => {
    alert(a);
  }
  const doubleShoot = (a, b) => {
    alert(b.type);
  }
  // 这个部分相当于return JSX
    return (
    //   class是JavaScript中的关键字，所以用className替代
    <div className="App">
      <header className="App-header">
        <nav>
          <a href="/html/">HTML</a> |
          <a href="/css/">CSS</a> |
          <a href="/js/">JavaScript</a> |
          <a href="/python/">Python</a>
        </nav>
      </header>
      <main className="App-main">
        <div>
          <h2>{props.color} and { props.name}</h2>
          <p>This is a worksheet table</p>
            <People />
            <button onClick={() => shoot("Goal!")}>take the shoot!</button>
            <button onClick={(event) => doubleShoot("Goal!", event)}>take the next shot!</button>
            <Goal isGoal={true} />
            <Garage />
            <MyForm />
        </div>
      </main>
      <footer className="App-footer">
        This is a footer
      </footer>
    </div>
  );
}

export default App;
