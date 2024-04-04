/**
 * Author: Deric Le
 * Description: The application. Integrates the components
 */

import "./assets/styles/App.css"

// Import components
// import HelloWorld from './components/HelloWorld';
import Header from "./components/Header";
import Carousel from "./components/Carousel";

function App() {
  return (
    // render the 'HelloWorld' component
    // <HelloWorld />

    <div>
      <Header />
      <Carousel />
    </div>
  );
}

export default App;
