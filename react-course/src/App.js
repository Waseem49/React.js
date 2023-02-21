import "./App.css";

function App() {
  console.log("app")
  return (
    <div>
      <div className="App-header">
        <h1>Hello React</h1>
        <Demo></Demo>
      </div>
    </div>
  );
}

export default App;

function Demo(){
console.log("demo");
  return (
    <div>
      <h1>Demo</h1>
    </div>
  )
}
