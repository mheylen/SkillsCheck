import React from 'react';
export default function User(props){

    const friends = props.friends.map(friend => {
        return<li>{friend}</li>
    });
    return <ul>{friends}</ul>;
}