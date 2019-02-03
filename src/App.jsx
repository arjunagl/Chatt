import React from 'react';
import { hot } from 'react-hot-loader';
import './App.css';
import LoginComponent from './components/login';

const App = React.memo(() => {
  return (
    <div className="App">
      This is from the login page
      <LoginComponent />
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
