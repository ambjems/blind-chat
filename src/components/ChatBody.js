import  React , {useState, useEffect} from 'react';
import firebaseDb from "../firebase";
import Delete from './delete.svg'
import "./ChatBody.css"

export default function ChatBody() {
  const [data, setData] = useState({ message:'', dateTime:''})
  const [result, setResult] = useState({});

  useEffect(() => {
        getData();
    },[])

    const getData = () =>{
        firebaseDb.child('chats').on('value', snapshot => {

        var box = document.getElementById('messageBody');
        box.scrollTop = box.scrollHeight;

        if (snapshot.val() != null)
        setResult({...snapshot.val()})
        else
        setResult({})
        })
       
    }

  const handleOnChange = (e) =>{
    const dt = new Date();
    const [date,month,year,hour,minute] = [dt.getDate(), dt.getMonth()+1, dt.getFullYear(), dt.getHours(), dt.getMinutes()];
    const timeStamp = `${date}/${month}/${year} ${hour}:${minute}`;
    setData({message:e.target.value, dateTime:timeStamp})

    firebaseDb.child('chats').on('value', snapshot => {
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
    if(data.message){

    const res = firebaseDb.child('chats').push(data)

    if(res){setData({ message:'', dateTime:''})}
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
                firebaseDb.child(`chats/${key}`).remove();
            }
    }


    return (
        <div style={{height:"70vh", width:"50vw", backgroundColor:"#b2e8be", margin:"auto"}}>
           <div style={{height:"93%", padding:"2% 0 2% 2%"}}> 
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
                            <div style={{width:"85%"}}>
                                <p style={{margin:"0", padding:"2px"}}>{result[id].message}</p>
                            </div>
                            <div style={{width:"15%", display:"flex", flexDirection:"column", alignItems:"center"}}>
                                <img src={Delete} alt="Delete" height="20" onClick={()=>{onDelete(id)}} 
                                    style={{cursor:"pointer"}}
                                />
                                <p style={{margin:"0", padding:"2px", textAlign:"right", fontSize:"10px"}}>
                                    {result[id].dateTime}</p>
                            </div>
                        </div>

                    ))
                    ):(
                        <div style={{height:"100%",display:"flex", justifyContent:"center", alignItems:"center"}}>
                             <p>No messages in the conversation.</p>
                        </div>
                    )
                }
                </div>
           </div>
           
            <div style={{height:"7%"}}>
                <form>
                    <input type="text" name="message" 
                            value={data.message} 
                            onChange = {handleOnChange} autoFocus
                            placeholder="Message..." 
                            onKeyPress={handleKeypress}
                            style={{width:"90%", padding:"2px", 
                                    borderRadius:"5px", 
                                    border:"1px solid black"}}
                    />
                    <button style={{width:"10%", padding:"2px", 
                                    backgroundColor:"#B3D3EA", 
                                    borderRadius:"5px", 
                                    border:"1px solid black"}} 
                            onClick={sendData}>Send</button>
                </form>
            </div>

    
        </div>
       
    )
}
