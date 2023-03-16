
import './App.css';
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Pages from "./components/pages/pages";

function App() {
  const image= [1,2,3]
  console.log("App");

  return (
    <div >
      <Header/>
      <Pages/>
      <Footer/>


    </div>
  );
}

export default App;
