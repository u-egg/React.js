import React, {Component} from "react";

import 'semantic-ui-css/semantic.min.css'
import './App.css'; // 전체 css

import Header from './component/Header';
import Footer from './component/Footer/Footer';
import Main from './component/Main/Main';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;