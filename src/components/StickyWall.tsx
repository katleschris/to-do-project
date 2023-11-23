import { useState, useRef } from "react";
import AddIcon from '@mui/icons-material/Add';

//All this is still proof of concept, but just getting a basic idea going 
interface noteProps{
    title : string,
    details : string,
    index : number
}

export const StickyWall = ()=>{
  const notesArr = []
  
 

   function StickyNote(props:noteProps){
    const {title, details, index} = props
    const [newTitle, setNewTitle] = useState<any>("")
    const [newDetails, setNewDetails] = useState<any>("")
    const [confirmTitle, setConfirmTitle] = useState<Boolean>(false) // Will use this as a button later to confirm changes
    const [confirmDetails, setConfirmDetails] = useState<Boolean>(false) // Will use this as a button later to confirm changes

    const note ={
        title,
        details,
        index,
    }

    function handleChangeTitle(e:any){ //Will change the type later
       setNewTitle(e.target.value)
    }
    function handleChangeDetails(e:any){ //Will change the type later
       setNewDetails(e.target.value)
    }


     return (
       <div style={{width:"250px", height:"280px"}}>
        <div> 
            <input name="Title" value={newTitle} onChange={handleChangeTitle}>
           </input>
           </div>
           <div> 
            <input name="Details" value={newDetails} onChange={handleChangeDetails}>
           </input>
           </div>
       </div>
     )
   }

   function handleClick(){
    const newNote:noteProps = {
       title : "",
       details : "",
       index : notesArr.length
    }

    notesArr.push(newNote)
   }

    function Card(){
        return(
            <div className="holder" onClick={handleClick}>
    <div className="card" style={{display:"flex", justifyContent: "center", alignItems:"center"}}>
    <AddIcon color="disabled" fontSize="large" />
</div>
</div>
        )
    }

  //Couldn't really see how the component looked as npm run dev doesn't seem to be working but just creating 
  // a scaffold for now
    return(
        <>
        <div style={{backgroundColor:"white", width:"75vw", height:"100vh", marginLeft:"auto"}}>
            <h2>Sticky Wall</h2>
          <div style={{margin:"10px", border:"solid 1px gray", display:"flex", flexWrap:"wrap"}}>
           <Card />
          </div>
        </div>
        </>
    )

}