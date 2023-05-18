import Brand from "./Brand";
import { NavLink } from "react-router-dom"

import CartWidget from "./CartWidget";


const NavBar = () => {
    return(
        <header>
            <div>
            <NavLink to="/">

              <Brand/>
            
            </NavLink>
            </div>

            
            <nav>
               
               <ul>
                   <li>
                      <NavLink to='/productos/kids'  className="nav-link active" aria-current="page" >Kids</NavLink >
                   </li>
                   <li>
                       <NavLink to='/productos/calzado' className="nav-link active" aria-current="page" >Calzado</NavLink >
                   </li>
                   <li>
                       <NavLink to='/productos/accesorio' className="nav-link active" aria-current="page" >Accesorios</NavLink >
                   </li>
                   <li>
                       <NavLink to='/' className="nav-link active" aria-current="page" >Todos los productos</NavLink >
                   </li>
               </ul>
               
               </nav>

            <div>
                <CartWidget/>
            </div>
        </header>

    )
}

export default NavBar;