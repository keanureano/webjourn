import Posts from "./components/Posts";

function App() {
  return (
    <div className="app">
      <nav className="nav">
        <h1 className="nav-brand">WebJourn.</h1>
      </nav>
      <div className="hero">
        <h1 className="hero-title">Stories & Ideas</h1>
        <p className="hero-subtitle">
          A personal log of my web developer journey.
        </p>
        <div className="hero-footer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
      </div>
      <main className="main">
        <Posts />
      </main>
    </div>
  );
}

export default App;
