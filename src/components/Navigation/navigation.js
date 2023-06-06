import { NavLink } from "react-router-dom";
import "./navigation.css";
const items=[
    {to:"/",name:"Home"},
    {to:"add-contect",name:"Add-Context"}
];
const Navigation = () => {
    return ( 
        <>
            <nav>
             <h2>Contact Manager</h2>
              <ul>
                {items.map(item=>(
                  <li key={item.to}>
                     <NavLink to={item.to} className={(a)=>a.isActive?"active":""}>{item.name}</NavLink>
                  </li>  
                ))}
            </ul>
          </nav>
        
        </>
     );
}
 
export default Navigation;