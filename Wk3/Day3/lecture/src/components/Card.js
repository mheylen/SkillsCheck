import React from 'react';

export default function Card( props){
    console.log(props);
    return (
<div>
    <span>name: {props.name} </span>
    <button onClick={()=> props.action(props.name)}>Push Me</button>
    <span>age: {props.age}</span>
</div>
    )
}