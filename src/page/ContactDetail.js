import { useLocation } from "react-router-dom";
import { FaUserAlt,FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
const ContactDetail = () => {
    const location=useLocation();
    const contect=location.state.contect;
    const {id,name,email}=contect
    console.log(contect);
    return ( 
            <div className="ContactDetail"  >
            <div className="profile">
             <div className="user">
               <FaUserAlt/>
             </div> 
               <div className="Specifications">
                 <span>{name}</span>
                 <span>{email}</span>
               </div>
             </div> 
         </div>
     );
}
 
export default ContactDetail;