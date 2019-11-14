import React from 'react';


const MenuItem = (props) => {
  console.log(props.elm.sub_menu)
    return(
    <ul className="nav-menu">
      <li className={props.elm.text === 'services' ? "item_menu" : undefined}> <a href ={props.elm.link}>{props.elm.text}</a>
      {props.elm.text === 'services' ? <ul className="dropdown">
         {props.elm.sub_menu.map(el=> <li>{el}</li>)}
      </ul> :''}
      </li>
    </ul>
    )
}
export default MenuItem