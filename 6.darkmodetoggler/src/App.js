import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/header/Header';
import Hero from './Components/hero/Hero';
import useLocalStorage from "use-local-storage"

function App() {
  const[theme,setTheme] = useLocalStorage("theme","light");
  
  const toggleTheme = () => {
     const newTheme = theme === "light" ? "dark" : "light";
     setTheme(newTheme);
   }

  return (
    <div className="main">
      <Header myTheme = {theme} handleToggle = {toggleTheme} />
      <Hero myTheme={theme}/>
      <Footer myTheme={theme}/>
    </div>
  );
}

export default App;
