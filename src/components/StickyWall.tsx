import { useState, useRef, useEffect} from "react";
import AddIcon from '@mui/icons-material/Add';

//All this is still proof of concept, but just getting a basic idea going 
interface noteProps{
    title : string,
    details : string,
    index : number
}
const notesArr: any[] = []
export const StickyWall = ()=>{
  const [notesTsx, setNotesTsx] = useState<any>([])
 
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
     <div className="note" style={{width:"250px", height:"250px", backgroundColor:"red"}}>
      <div className="note-title"> 
          <textarea cols={24} maxLength={55} name="Title" value={newTitle} onChange={handleChangeTitle} placeholder="Title">
         </textarea>
         </div>
         <div className="note-details"> 
          <textarea rows={10} cols={28} maxLength={33*10} name="Details" value={newDetails} onChange={handleChangeDetails} placeholder="Details">
         </textarea>
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

    return(
        <>
        <div style={{backgroundColor:"white", width:"75vw", height:"100vh", marginLeft:"auto"}}>
            <h2 style={{marginLeft:"26px"}}>Sticky Wall</h2>
          <div style={{ width:"92.5%", height:"82%", margin:"0 auto", border:"solid 1px gray", display:"flex", flexWrap:"wrap", 
          gap: "25px", overflow:"auto", overflowX:"hidden",
          padding:"10px"}}>
           {notesTsx.map((note:noteProps)=>{
      return(
        <StickyNote key={note.index} {...note}/>
        
      )
    })}
           <Card />
          </div>
        </div>
        </>
    )

}

