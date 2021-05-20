import React, {Component} from 'react'
import lesson from "./lesson1.json";


export default function mydata() {
    return (
        <div>
            {lesson.map((vocab, index)=>{
                return <h1>{vocab.English}</h1>
            })}
        </div>
    )
}
