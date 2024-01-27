import { useEffect, useState } from "react";
interface DataType {
    id: string;
    name: string;
    email: string;
    department: string;
}
const csr=()=>{
    const [data,setData] = useState<Array<DataType>>([]);

    const fetchData=async()=>{
        try {
            const resp = await fetch('https://jsonplaceholder.typicode.com/users');
            const json = await resp.json();
            setData(json);
        } catch (error) {
            console.log("Error Occured", error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (<>
        <h1>User's List</h1>
        <table>
            <thead>
                <tr><th>ID</th><th>Name</th><th>Email</th><th>Department</th><th>Operations</th></tr>
            </thead>
            <tbody>
                {
                    data.map((item) => {
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

export default csr;