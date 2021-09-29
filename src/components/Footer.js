import React from 'react'
import firebaseDb from "../firebase";

const onDelete = () => {    
    if (window.confirm('Are you sure to clear all the chats?')) {
        firebaseDb.child(`chats`).remove();
    }  
}

export default function Footer() {
    return (
        <div style={{height:"10vh", width:"50vw", margin:"auto", display:"flex", justifyContent:"center", alignItems:"center"}}>
            <button style={{width:"25%", padding:"2px", 
                            backgroundColor:"#B3D3EA", 
                            borderRadius:"5px", 
                            border:"1px solid black"}}
                            onClick={onDelete}>Clear all the chats</button>
        </div>
    )
}
