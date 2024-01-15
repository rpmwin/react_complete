import React from 'react'
import Card from './Card'

function Events() {
    let eventList = [
        {
            id:1,
            eventName : "event A",
            eventDiscription: "this a short discription based upon a event - A",
            price:"1",
            pair:"two players event"
        },
        {
            id:2,
            eventName : "event B",
            eventDiscription: "this a short discription based upon a event - B",
            price:"1",
            pair:"one player event"
        },
        {
            id:3,
            eventName : "event C",
            eventDiscription: "this a short discription based upon a event - C",
            price:"1",
            pair:"two players event"
        },
        {
            id:4,
            eventName : "event D",
            eventDiscription: "this a short discription based upon a event - D",
            price:"1",
            pair:"one players event"
        }
    ]
  return (
    <div className='w-screen flex flex-wrap flex- '>
        {eventList.map((event)=>(
            <Card 
            key={event.id}
            id = {event.id}
            eventName = {event.eventName}
            eventDiscription = {event.eventDiscription}/>

        ))}
    </div>
  )
}

export default Events
