import React, { Component } from "react";
import Router from "../Components/Router";
//div 대신 <> 만으로도 내부의 여러 component를 return할 수 있음
class App extends Component {
  render() {
    return <Router />;
  }
}

export default App;
