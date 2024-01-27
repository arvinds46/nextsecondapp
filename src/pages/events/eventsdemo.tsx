import { getEvents } from "./event";

export async function getServerSideProps() {
    //fetch data
    const events = await getEvents();
    
    return {
        props:{
            events
        }
    }
}

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