"use client"
import {useState, useEffect} from 'react'
import io from "socket.io-client"

const socket = io("http://localhost:8080")

const Chat = () => {

    const [message, setMessage] = useState([])  
    const [inputMessage, setInputMessage] = useState("")
    
    useEffect(()=> {
        socket.on("connection", (msg) => {
            console.log("conectado",msg)
            setMessage(msg)
        })
    },[])

    const handleSendMessages = () => {
        socket.emit("connection",inputMessage);
        setInputMessage("")
    }

    return (
        <div className='flex flex-col justify-center items-center'>
        <div className='my-20'>
            <ul>
                {message.map((msg,index)=> (
                    <li key={index}>{msg}</li>
                ))}
            </ul>

             <div className='mt-5 '>   
                <input type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                className="border rounded p-2 focus:outline-none focus:border-blue-500" />

                <button onClick={handleSendMessages}
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none"
                >Enviar
                </button>
            </div>
        </div>
        </div>



  )
}

export default Chat