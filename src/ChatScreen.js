import { Avatar } from '@material-ui/core';
import React,{useState} from 'react';
import './ChatScreen.css';


function ChatScreen() {
    const [input,setInput]=useState('');

const [messages,setMessages]=useState([
    {
        name:'Rafael',
        image:'https://upload.wikimedia.org/wikipedia/commons/b/b8/Ellen_DeGeneres_2011.jpg',
        message:'Whats up'

    },

    {
        name:'Rafael',
        image:'https://upload.wikimedia.org/wikipedia/commons/b/b8/Ellen_DeGeneres_2011.jpg',
        message:'hows it going'
    },
    {
      
        message:'what the fuck'
    }
])


const handleSend=e=>{
    e.preventDefault();
    setMessages([...messages,{message:input}]);
    setInput('');
}
    return (
        <div className='chatScreen'>
          
           <p className='chatScreen__timestamp'>your matched with ellen on 10/08/20</p>

           {messages.map(message=>(
               message.name ? (

                   <div className='chatScreen__message'>
                   <Avatar
                   className='chatScreen__image'
                   alt={message.name}
                   src={message.image}
                   />
                   <p className='chatScreen__text'>{message.message}</p>
                   </div>
               ):(
                 <div className='chatScreen__message'>
                     <p className='chatScreen__textUser'>{message.message}</p>   
                     </div>
               )
           ))}

           <div >
               <form className='chatScreen__input'>
                   <input
                   value={input}
                   onChange={e=>setInput(e.target.value)}
                    className='chatScreen__inputField' placeholder='Type a message' type='text' />
                   <button
                   onClick={handleSend}
                   type='submit'
                    className='chatScreen__inputButton'>SEND</button> 
               </form>
           </div>
        </div>
    )
}

export default ChatScreen
