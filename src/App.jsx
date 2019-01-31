import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import './App.css';
import LoginPageComponent from './components/login';

const App = React.memo(() => {
  return (
    <div className="App">
      <h1> Hello, World! </h1>
      <LoginPageComponent />
    </div>
  );
});

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <h1> Hello, World! </h1>
//       </div>
//     );
//   }
// }

export default hot(module)(App);
