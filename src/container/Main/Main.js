import AddContect from "../../page/AddContext/AddContect";
import Home from "../../page/Home";
import {  Route, Routes } from "react-router-dom";
import Layout from "../../layout/layout";
import ContactDetail from "../../page/ContactDetail";
import Edit from "../../page/update/update";

const Main = () => {
    return ( 
        <main>
         <Layout>
            <Routes>
               <Route path="/"  element={ <Home />  }/>
               <Route path="/user/:id" element={ <ContactDetail/>}/>
               <Route path="add-contect" element={ <AddContect/>}/>
               <Route path="/user/edit/:id" element={<Edit/>}/>
            </Routes>
         </Layout>
        </main>
     );
}
 
export default Main;