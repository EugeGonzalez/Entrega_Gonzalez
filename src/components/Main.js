import ItemListContainer from "./ItemListContainer";
import { Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./ItemDetailContainer";



const Main = () => {
    return(
        <main>
        <Routes>
           <Route path='/' element={<ItemListContainer/>} />
           <Route path='/item/:id' element={<ItemDetailContainer/>} />
           <Route path="/productos/:categoria" element={<ItemListContainer/>}/>
        </Routes> 
        </main>
    )
}


export default Main;