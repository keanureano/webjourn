import Chevron from "./components/Chevron";
import WorldMap from "./components/WorldMap";
import Posts from "./components/Posts";

function App() {
  return (
    <div className="app">
      <nav className="nav">
        <h1 className="nav-brand">WebJourn.</h1>
      </nav>
      <div className="hero">
        <WorldMap />
        <h1 className="hero-title">This is WebJourn.</h1>
        <p className="hero-subtitle">
          A personal log of my web developer journey.
        </p>
        <div className="hero-footer">
          <Chevron />
        </div>
      </div>
      <main className="main">
        <Posts />
      </main>
    </div>
  );
}

export default App;
