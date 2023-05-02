import Brand from "./Brand";
import ItemListContainer from "./ItemListContainer";
import CartWidget from "./CartWidget";


const NavBar = () => {
    return(
        <header>
            <div>
                <Brand/>
            </div>

            <nav>
                <ItemListContainer 
                itemUno = "Kids"
                itemDos = "Accesorios"
                itemTres =  "Calzado"
                />
            </nav>

            <div>
                <CartWidget/>
            </div>
        </header>

    )
}

export default NavBar;