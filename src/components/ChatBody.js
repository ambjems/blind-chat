import  React , {useState, useEffect} from 'react';
import firebaseDb from "../firebase";
import Delete from './delete.svg'
import Send from './send.svg'
import Reply from './reply.svg'
import Cancel from './cancel.svg'
import "./ChatBody.css"

export default function ChatBody() {
  const [data, setData] = useState({ message:'', dateTime:'', repliedTo:''})
  const [result, setResult] = useState({});
  const [loading, setLoading] = useState(true);
  const [replyingTo, setReplyingTo] = useState('');

  useEffect(() => {
        getData();
 },[])

    const getData = () =>{
        firebaseDb.child('chats-new').on('value', snapshot => {

        var box = document.getElementById('messageBody');
        box.scrollTop = box.scrollHeight;

        if (snapshot.val() != null)
        {
            setResult({...snapshot.val()})
            setLoading(false)
        }
        else
        {
            setResult({})
            setLoading(false)
        }
        })
       
    }

  const handleOnChange = (e) =>{
    const dt = new Date();
    let [date,month,year,hour,minute] = [dt.getDate(), dt.getMonth()+1, dt.getFullYear(), dt.getHours(), dt.getMinutes()];

    if(date < 10){
        date = `0${date}`;
    }
    if(month < 10){
        month = `0${month}`;
    }
    if(hour < 10){
        hour = `0${hour}`;
    }
    if(minute < 10){
        minute = `0${minute}`;
    }
    let timeStamp = `${date}/${month}/${year} ${hour}:${minute}`;
    setData({...data, message:e.target.value, dateTime:timeStamp})

    firebaseDb.child('chats-new').on('value', snapshot => {
        if (snapshot.val() != null)
        setResult({
                ...snapshot.val()
            })
        else
        setResult({})

    })
  }
 
  const sendData = async (e) =>{
    e.preventDefault();
    document.getElementById("messageInput").focus();
    if(data.message){

    const res = firebaseDb.child('chats-new').push(data)

    if(res){setData({ message:'', dateTime:'', repliedTo:''}); setReplyingTo('')}
    }
    else{
      alert('Empty message can not be sent.')
    }
        var box = document.getElementById('messageBody');
        box.scrollTop = box.scrollHeight;
  }

    const handleKeypress = e => {

        if (e.keyCode === 13) {
            sendData();
        }
    };

    const onDelete = key => {
            if (window.confirm('Are you sure to delete this message?')) {
                firebaseDb.child(`chats-new/${key}`).remove();
            }
            document.getElementById("messageInput").focus();
    }

    const onDeleteAll = () => {    
        if (window.confirm('Are you sure to clear all the chats?')) {
            firebaseDb.child(`chats-new`).remove();
        }  
        document.getElementById("messageInput").focus();
        setReplyingTo('')
    }

    const replyTo = (reply) =>{
            setData({...data, repliedTo:reply})
            setReplyingTo(reply)
            document.getElementById("messageInput").focus();
    }

    return (
        <div style={{height:"80vh", width:"50vw", backgroundColor:"#b2e8be", margin:"auto"}}>
       
           <div style={{height:"75%", padding:"2% 0 2% 2%"}}> 
                <div id="messageBody" 
                     style={{height:"100%", 
                             width:"100%", 
                             padding:"0 0 8% 0", 
                             overflow:"scroll", 
                             overflowX:"hidden"}}>
                {
                    ( Object.keys(result).length > 0)?(
                        Object.keys(result).map((id)=>(
                        
                        <div key={id} style={{backgroundColor:"#ffffff", borderRadius:"5px", marginBottom:"2px", display:"flex"}}>
                            <div style={{width:"85%", height:'auto', wordWrap:"break-word"}}>
                                   
                                <p style={{margin:"0", padding:"2px", fontSize:'12px', fontWeight:"bold"}}>{result[id].repliedTo}</p>
                                <p style={{margin:"0", padding:"2px"}}>{result[id].message}</p>

                            </div>
                            <div style={{width:"15%", display:"flex", flexDirection:"column", alignItems:"center"}}>
                                <div style={{display:'flex'}}>
                                <img src={Delete} alt="Delete" height="20" onClick={()=>{onDelete(id)}} 
                                    style={{cursor:"pointer"}}
                                />
                                <img src={Reply} alt="Delete" height="20" onClick={()=>{replyTo(result[id].message)}} 
                                    style={{cursor:"pointer"}}
                                />
                                </div>
                                <p style={{margin:"0", padding:"2px", textAlign:"right", fontSize:"10px"}}>
                                    {result[id].dateTime}</p>
                            </div>
                        </div>

                    ))
                    ):(
                        (loading)?
                        <div style={{height:"100%",display:"flex", justifyContent:"center", alignItems:"center"}}>
                             <p>Loading...Please wait !</p>
                        </div>:
                        <div style={{height:"100%",display:"flex", justifyContent:"center", alignItems:"center"}}>
                             <p>No messages in the conversation.</p>
                        </div>
                    )
                }
                </div>
           </div>
           {
            (replyingTo !== '')?
            <div style={{padding:'0 2% 0 2%', backgroundColor:'#B3D3EA', 
                        width:'100%',overflow:'hidden', wordWrap:"break-word",
                        height:'7%', display:'flex', 
                        justifyContent:'space-between'}}>
            {
                (replyingTo.length > 50)?
                <p><b>Replying to:</b> {replyingTo.substring(0,40)}.......{replyingTo.slice(replyingTo.length-10)}</p>:
                <p><b>Replying to:</b> {replyingTo}</p>
            }
            
            <img src={Cancel} height="20" alt="cancel" style={{cursor:"pointer"}}
            onClick={()=>{setReplyingTo(''); setData({...data, repliedTo:''}); 
                        document.getElementById("messageInput").focus();}}/>
            
            </div>:
            <div style={{ height:'7%'}}></div>
        }
            <div style={{height:"7%",backgroundColor:"#B3D3EA", marginBottom:'-0.5%'}}>
                <form>
                    <input type="text" name="message" 
                            id="messageInput"
                            value={data.message} 
                            onChange = {handleOnChange} autoFocus
                            placeholder="Type your message and hit ENTER..." 
                            onKeyPress={handleKeypress}
                            style={{width:"90%", padding:"2px", 
                                    borderRadius:"5px", 
                                    border:"1px solid black"}}
                    />
                    
                    <button style={{width:"10%", padding:"2px", 
                                    backgroundColor:"#B3D3EA", 
                                    borderRadius:"5px", 
                                    border:"1px solid black"}} 
                            onClick={sendData}><img src={Send} alt="Delete" height="20"/></button>
                </form>
            </div>

            <div style={{height:"11.5%", width:"50vw", backgroundColor:"#EFF4F0", margin:"auto", display:"flex", justifyContent:"center", alignItems:"center"}}>
                <button style={{width:"25%", padding:"2px", 
                            backgroundColor:"#B3D3EA", 
                            borderRadius:"5px", 
                            border:"1px solid black"}}
                        onClick={onDeleteAll}>Clear all the chats</button>
            </div>

    
        </div>
       
    )
}
