import React from 'react';
import Chat from './Chat';
import './Chats.css';

function Chats() {
    return (
        <div className='chats'>
            <Chat 
            name='Mark'
            message='Hello how are you'
            timestamp='40 seconds ago'
            profilePic='https://www.mensjournal.com/wp-content/uploads/mf/1280-selfie.jpg?w=900&quality=86&strip=all&iswp=1'              
            />

<Chat 
            name='Brandon'
            message='you ok?'
            timestamp='10 seconds ago'
            profilePic='https://cache.desktopnexus.com/thumbseg/2487/2487414-bigthumbnail.jpg'              
            />

<Chat 
            name='Sal'
            message='Are you home you'
            timestamp='25 seconds ago'
            profilePic='https://i.dailymail.co.uk/1s/2020/06/19/17/29825344-8436839-image-m-59_1592584250275.jpg'              
            />

<Chat 
            name='Joe'
            message='call me'
            timestamp='93seconds ago'
            profilePic='https://www.irreverentgent.com/wp-content/uploads/2018/03/Awesome-Profile-Pictures-for-Guys-no-shirt.jpg'              
            />

<Chat 
            name='Brian'
            message='curbside pickup'
            timestamp='22 seconds ago'
            profilePic='https://s3-eu-west-2.amazonaws.com/metro-news-s3-prod/wp-content/uploads/2017/07/Header_1113731_1.11.jpg'              
            />



        </div>
    );
    
}

export default Chats
