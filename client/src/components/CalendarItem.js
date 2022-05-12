import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import { Link, useHistory, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./App.css";

const locales = {
    "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});



// const events = [
//     {
//         title: "Big Meeting",
//         start: new Date(2022, 4, 2),
//         end: new Date(2022, 4, 3),
//     },
//     {
//         title: "Vacation",
//         start: new Date(2022, 4, 7),
//         end: new Date(2022, 4, 10),
//     },
//     {
//         title: "Conference",
//         start: new Date(2022, 4, 20),
//         end: new Date(2022, 4, 23),
//     },
// ];
function CalendarItem({groups}){

    const [group, setGroup] = useState([])
    const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
    const [allEvents, setAllEvents] = useState([]);
    const [groupID, setGroupID] =([])
    const [eventsData, setEventsData] = useState([]);

    function LoadGroupByID(id) {
        fetch(`/groups/${id}`)
          .then(r => r.json())
          .then(group => {
            setGroup(group);
            // setGroupID(group.id)
          })
      }
      function LoadEventByID(ID) {
        
        fetch(`/groups/${ID}/events`)
          .then(r => r.json())
          .then(e => {
            setEventsData(e);
          })
      }

      
    
      const data = useParams()
      useEffect(() => {
          LoadGroupByID(data.id);
          LoadEventByID(data.id);
        }, [data]);
        // const eventsList = eventsData;
        
        console.log(eventsData);
     const events = eventsData.map(e => ({
        "title" : e.title,
        "start" : e.start,
        "end" : e.end
      }))


       

    function handleAddEvent() {
        setAllEvents([...allEvents, newEvent]);
    }

    return (
        <div className="Cal">
            <h1>Calendar</h1>
            <h2>Add New Event</h2>
            <div>
                <input type="text" placeholder="Add Title" style={{ width: "20%", marginRight: "10px" }} value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} />
                <DatePicker type="datetime" placeholderText="Start Date" style={{ marginRight: "10px" }} selected={newEvent.start} onChange={(start) => setNewEvent({ ...newEvent, start })} />
                <DatePicker type="datetime" placeholderText="End Date" selected={newEvent.end} onChange={(end) => setNewEvent({ ...newEvent, end })} />
                <button stlye={{ marginTop: "10px" }} onClick={handleAddEvent}>
                    Add Event
                </button>
            </div>
            <Calendar localizer={localizer} events={events} startAccessor="start" endAccessor="end" style={{ height: 500, margin: "50px" }} />
        </div>
    );
}

export default CalendarItem;