const MyPage=()=>{
    const items=[
        {id:1,title:'Pen',price:10,description:'Reynolds',rating:1.2},
        {id:1,title:'Pencil',price:20,description:'Apsara',rating:4.2},
        {id:1,title:'Sketch',price:50,description:'Reynolds',rating:5.2}
    ];
    return(
        <div className="m-3">
            <h1>Welcome to my Products Page</h1>
            {
                items.map((item)=>(
                    <div key={item.id} className="mt-3">
                        <h3>Name: {item.title}</h3>
                        <p>Price: {item.price}, Description: {item.description}</p>
                        <p>Rating: {item.rating}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default MyPage;