import React from 'react';

const Avatar= props=> <img src={props.user.img} alt={props.user.name}/>;
const UserName = props =><p>{props.user.name}</p>
const User = props=>{
    return(
        <div>
            <Avatar user={props.user.img}/>
            <UserName user={props.user.name}/>
            <p>{props.name}</p>
        </div>
    )
};


export default Avatar;