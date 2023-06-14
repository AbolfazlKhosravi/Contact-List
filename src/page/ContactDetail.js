import { useLocation } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
const ContactDetail = () => {
    const location=useLocation();
    const contect=location.state.contect;
    const {name,email}=contect
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