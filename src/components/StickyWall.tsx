import { useState, useRef, useEffect} from "react";
import AddIcon from '@mui/icons-material/Add';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from "@mui/material";

//All this is still proof of concept, but just getting a basic idea going 
interface noteProps{
    title : string,
    details : string,
    index : number,
    color : string,
}
const colors :any = {
   1 : "#fff9b1",
   2 : "#f5f6f8",
   3 : "#f5d128",
   4 : "#d0e17a",
   5 : "#d5f692",
   6 : "#a6ccf5",
   7 : "#67c6c0",
   8 : "#ff9d48",
   9 : "#b384bb",
}
export const StickyWall = ()=>{
  const [notesTsx, setNotesTsx] = useState<any>([])
 
  function StickyNote(props:noteProps){
  const {title, details, index, color} = props
  const [confirm, setConfirm] = useState<Boolean>(false)
  const [newTitle, setNewTitle] = useState<any>("")
  const [newDetails, setNewDetails] = useState<any>("")
 // const [confirmTitle, setConfirmTitle] = useState<Boolean>(false) // Will use this as a button later to confirm changes
 // const [confirmDetails, setConfirmDetails] = useState<Boolean>(false) // Will use this as a button later to confirm changes

 useEffect(()=>{
  setNewDetails(details)
  setNewTitle(title)
 },[])

  function handleChangeTitle(e:any){ //Will change the type later
     setNewTitle(e.target.value)
     setConfirm(true)
  }
  function handleChangeDetails(e:any){ //Will change the type later
     setNewDetails(e.target.value)
     setConfirm(true)
  }

  function cancelUpdate(){
    setNewTitle(notesTsx[index].title)
    setNewDetails(notesTsx[index].details)
    setConfirm(false)
  }

  function pushUpdate(){
    const note ={
      title : newTitle,
      details : newDetails,
      index,
      color,
  }
  setNotesTsx(() => {
    const newNotes = [...notesTsx];
    newNotes[index] = {...note};
    return newNotes;
  });

    setConfirm(false)
  }
   
  function handleDelete(){
    setNotesTsx(() =>
    notesTsx.filter((_:any, ind:number) => ind !== index)
  )
  }

   return (
     <div className="note" style={{width:"250px", height:"250px", backgroundColor: color}}>
      <div className="note-title" style={{display:"flex", gap:"5px", alignItems:"center"}}> 
         
          <textarea style={{marginTop:"5px"}} cols={20} maxLength={40} name="Title" value={newTitle} onChange={handleChangeTitle} placeholder="Title">
         </textarea>
         <IconButton color="error" onClick={handleDelete}>
          <DeleteIcon  fontSize="small" color="error"/>
         </IconButton>
         </div>
         <div className="note-details"> 
          <textarea rows={8} cols={28} maxLength={33*8} name="Details" value={newDetails} onChange={handleChangeDetails} placeholder="Details">
         </textarea>
         </div>
      { confirm && <div style={{ width:"100px", margin: "0 auto"}}> 
      <div className="confirm-buttons" style={{display:"flex", justifyContent:"space-around"}}>
      <IconButton color="error" onClick={cancelUpdate}>
      <CloseIcon fontSize="small" color="error"/>
       </IconButton>
       <IconButton color="success" onClick={pushUpdate}>
        <CheckIcon fontSize="small" color="success" />
       </IconButton>
      </div>
      </div>}
     </div>
   )
 }
  

   function handleClick(){
    const newNote: noteProps = {
       title : "",
       details : "",
       index : notesTsx.length,
       color : colors[Math.floor(Math.random() *10)]
    }
    setNotesTsx([...notesTsx, newNote]);
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
            <h2 style={{marginLeft:"26px"}}>Sticky Wall</h2>
          <div style={{ width:"92.5%", height:"82%", margin:"0 auto", border:"solid 1px gray", display:"flex", flexWrap:"wrap", 
          gap: "25px", overflow:"auto", overflowX:"hidden",
          paddingTop:"30px", paddingLeft:"60px", paddingBottom:"30px"}}>
           {notesTsx.map((note:noteProps)=>{
      return(
        <StickyNote key={note.index} title={note.title}    
        details={note.details}
        index={note.index}
        color={note.color}
        />
      )
    })}
           <Card />
          </div>
        </div>
        </>
    )

}

