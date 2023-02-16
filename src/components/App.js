// import logo from './logo.svg';
// import './App.css';
import React, { Component } from 'react';
// import logo from './../logo.svg';
import './../styles/App.css';
import LinkList from './Linklist'
import CreateLink from './CreateLink';
import Header from './Header';
import { Link, Route,Routes } from 'react-router-dom';
import Login from './Login';
import Search from './Search';
import { Navigate } from 'react-router-dom';
import Linklist from './Linklist';
import Updatelink from './Updatelink';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// class App extends Component {
//   render() {
//     return <LinkList />;
//   }
// }


const App = () => {
  return (
    <div className="center w85">
      <Header />
      <div className="ph3 pv1 background-gray">
        <Routes>
        <Route
          path="/"
          element={<Navigate replace to="/new/1" />}
        />
          <Route
            path="/create"
            element={<CreateLink/>}
          />
           <Route path="/update/:id" element={<Updatelink/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/search"element={<Search/>}/>
          <Route path="/top" element={<LinkList/>} />
        <Route
          path="/new/:page"
          element={<LinkList/>}
        />
        </Routes>
      </div>
    </div>
  );
};

export default App;


