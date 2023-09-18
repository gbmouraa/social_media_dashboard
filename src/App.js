import Header from "./components/Header";
import Overview from "./components/Overview";
import SocialMedia from "./components/SocialMedia";

function App() {
  return (
    <div className="w-full  min-h-screen bg-white dark:bg-dark-blue transition-all duration-300">
      <Header />
      <SocialMedia />
      <Overview/>
    </div>
  );
}

export default App;
