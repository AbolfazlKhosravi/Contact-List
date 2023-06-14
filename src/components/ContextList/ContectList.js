import Contact from "./contact/Contact";
import "./ContectList.css";
import { deleteContect } from "../../services/deletContect";
import { getAllContects } from "../../services/getAllContects"; 
import { useEffect, useState } from "react";

const ContectList = () => {
  const [contects,setContects]=useState([]);
  const [allContects,setAllContects]=useState([])
  const [value,setValue]=useState("");
  
   useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await getAllContects();
          setAllContects(res.data);
        } catch (err) {
          console.log(err);
        }
      };
      fetchData();
    }, []);

  const clickHandler=(id)=>{
  deleteContect(id).then(()=> {
     getAllContects().then((res)=>setAllContects(res.data)).catch()
  }).catch()
  }
  const inputHandler=(e)=>{
     setValue(e.target.value);
      filterHandlr(e.target.value)
  }
  const filterHandlr=(value)=>{
   if(value==="") {
      console.log('2');
      setContects(allContects)
   }
     if(value!==""){
      const updateContects=allContects.filter(c=>Object.values(c).join(" ").toLocaleLowerCase().includes(value.toLocaleLowerCase()));
      setContects(updateContects)
     }
  }
  useEffect(()=>{
   filterHandlr(value);
  },[allContects,filterHandlr,value])
    return ( 
        <div className="List">
          <input className="search" type="text" placeholder="search for ..." value={value} onChange={inputHandler} />
          {contects? contects.map(contect=>(
           <Contact contect={contect} clickHandler={clickHandler} key={contect.id} />
          )):"loding ..."}
        </div>
     );
}
 
export default ContectList;