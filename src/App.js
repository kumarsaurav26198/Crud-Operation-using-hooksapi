import React, { useState } from 'react';
import './App.scss';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Menu from './components/Menu/Menu';
import Topbar from './components/Topbar/Topbar';
// import Contact from './screen/Contact/Contact';
// import CountryState from './components/CountryState/countryState';
import Create from './screen/Create/create';
import Read from './screen/Read/read';
// import UsersList from './screen/UserList/userlist';


function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
        <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <div className="sections">
          <Create/>
          <Read/>
          {/* <CountryState/> */}
          {/* <UsersList/>
        <Contact/> */}
      </div> 
    </div>
  );
}

export default App;
