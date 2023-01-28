import { FaUserAlt,FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
 import { FiEdit } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
const Contact = ({contect,clickHandler}) => {
  const navigate=useNavigate();
   const {id,name,email}=contect
  const editHandler=()=>{
    navigate(`/user/edit/${id}`)
  }
    return ( 
        <div className="ContectList"  >
        <div className="profile">
         <div className="user">
           <FaUserAlt/>
         </div> 
         <Link to={`/user/${id}`} state={{contect}} >
           <div className="Specifications">
             <span>{name}</span>
             <span>{email}</span>
           </div>
         </Link>
         </div> 
        <div className="chenge">
          <button className="edit" onClick={editHandler}>
            <FiEdit/>
          </button>
         <div className="trash" onClick={()=>clickHandler(id)}>
           <FaTrashAlt/>
         </div>
        </div>
     </div>
     );
}
 
export default Contact;