import React from 'react';
import MenuItem from './MenuItem'
import './App.css';

const arr = [
  {
    text:"Home",
    link: "#",
    active: true
  },
  {
    text:"services",
    link:"#",
    active: false,
    sub_menu: [
      "For entrepreneurs",
      "For students",
      "For hobbyists"
    ]
  },
  {
    text: "Contact",
    link:"#",
    active: false,
  }
]

function App() {
  return (
    <div className="app">
      {arr.map(el => <MenuItem elm={el}/>)}
    </div>
  );
}

export default App; 
