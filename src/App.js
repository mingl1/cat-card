import theo from "./images/theo.png";
import "./App.css";
import Parents from "./components/Parents";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <img src={theo} alt="theo" width="50%" />
      <h1 className="App--name">Theo Lee</h1>
      <p className="App--title">le chat</p>
      <small className="App--web">@2023 Ming Lin</small>
      <Parents />
      <div className="AboutAndInterest">
        <h2 className="About">About</h2>
        <p className="Desc">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda
          exercitationem consectetur necessitatibus animi rerum error ratione.
          Dicta ex, nisi porro, minus, doloremque hic odio quia consequuntur
          doloribus minima nostrum consectetur!
        </p>
        <h2 className="About">Interests</h2>
        <p className="Desc">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda
          exercitationem consectetur necessitatibus animi rerum error ratione.
          Dicta ex, nisi porro, minus, doloremque hic odio quia consequuntur
          doloribus minima nostrum consectetur!
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default App;
