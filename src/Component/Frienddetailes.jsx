import { useLoaderData } from "react-router-dom";

const Frienddetailes = () => {
    const Frienddetailes = useLoaderData();
    // console.log(Frienddetailes);
    return (
        <div>
            <h1>Friends detailes here</h1> 
             <p>Name: {Frienddetailes.name}</p>
             <p>Email: {Frienddetailes.email}</p>
        </div>
    );
};

export default Frienddetailes;