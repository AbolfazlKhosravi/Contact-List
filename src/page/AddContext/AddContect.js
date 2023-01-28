import { useState } from "react";
import "./addContect.css";
import { useNavigate } from "react-router-dom";
import postContect from "../../services/postContect";
const AddContect = () => {
    const [values,setValues]=useState({name:"",email:""});
    const navigate=useNavigate()
    const changeHandler=(e)=>{
      setValues({...values,[e.target.name]:e.target.value})
    }
    const submitHandlr=(e)=>{
      e.preventDefault();
      if(!values.name||!values.email){
        alert("please Fill out the entire form")
        return;
      }
      postContect(values).then(()=>{
        navigate("/") 
        setValues({name:"",email:""})
      }).catch((error)=>console.log(error));
    }
    return ( 
        <section>
        <h1>Add ConTact</h1>
        <form onSubmit={submitHandlr}>
            <label htmlFor="name-value">Name</label>
            <input id="name-value" type="text" placeholder="name" name="name" value={values.name} onChange={changeHandler} />
            <label htmlFor="email-value" >Email</label>
            <input id="email-value" type="email" placeholder="email" name="email" value={values.email}  onChange={changeHandler} />
            <button type="submit">Add</button>
        </form>
    </section>
     );
}
 
export default AddContect;