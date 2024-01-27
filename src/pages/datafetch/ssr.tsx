export async function getServerSideProps() {
    //fetch data
    const resp = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await resp.json();
    return {
        props:{
            data
        }
    }
}

const SSR=({data}:any)=>{
    return (<>
        <h1>Users List</h1>
        <table>
            <thead>
                <tr><th>ID</th><th>Name</th><th>Email</th><th>Department</th><th>Operations</th></tr>
            </thead>
            <tbody>
                {
                    data.map((item:any) => {
                        return(
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.department}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
        </>);
}

export default SSR;