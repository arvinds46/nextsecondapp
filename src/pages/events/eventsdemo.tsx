
    const events=[
        {id:1,title:"Orientation Class",date:"2024-01-24"},
        {id:1,title:"Live Class",date:"2024-01-24"},
        {id:1,title:"Doubt Class",date:"2024-01-26"}
    ];


function EventPage({events}:any) {
    return ( <>
        <h1>Events</h1>
        {
            events.map((event:any)=>(
                <div key={event.id}>
                    <h2>{event.title}</h2>
                    <p>Date: {event.date}</p>
                </div>
            ))
        }
    </> );
}

export default EventPage;