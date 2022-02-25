import logo from "./logo.svg";
import "./App.css";

const name = <p>Meu nome é Gustavo</p>;
const H1 = () => <h1> Isso é um título</h1>;
const retornaParagrafo = (name) => <p>{name}</p>;
function App() {
  return (
    <Fragment>
      {retornaParagrafo("Guga")}
      <div className="div1"></div>
      <div className="div2"></div>
    </Fragment>
  );
}

export default App;
