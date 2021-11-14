import './css/main.css';
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
        </div>
      </main>
      <footer className="App-footer">
        This is a footer
      </footer>
    </div>
  );
}

export default App;
