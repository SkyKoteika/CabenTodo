import './App.css';

import Header from '../Header';
import Footer from '../Footer';


type AppProps = {
  children: JSX.Element
}


const App = (props: AppProps) => {

  return (
    <div className="app">
      <Header />
      <div className="main-content">
        {props.children}
      </div>
      <Footer />
    </div>
  );
}

export default App;

