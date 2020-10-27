import React from 'react'
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import "./Header.css";
import IconButton from '@material-ui/core/IconButton';
import { Link, useHistory } from 'react-router-dom';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';


function Header({backButton}) {
    const history=useHistory();
    return (
        //BEM
        <div className='header'>
            {backButton ?(
<IconButton onClick={() => history.replace(backButton)}>  
    <ArrowBackIosIcon fontSize='large' className='header__icon'/>
</IconButton>
            ):(
                <Link to='/'>             
                <IconButton>
                <PersonIcon  className="header__icon" fontSize="large"/>   
                </IconButton>
                </Link>
 )}

            <Link to='/'>
            
            <img className="header__logo" src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png" alt="tinder logo"></img>

            </Link>
           
            
           

           < Link to='/chat'>
            <IconButton>
            <ForumIcon  className="header__icon" fontSize="large"/>
            </IconButton>
            </Link>
        </div>
    )
}

export default Header
