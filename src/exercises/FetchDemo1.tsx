import { useEffect, useState } from "react";
import { BaseProps } from "../types";
const SERVER_URL = "http://localhost:8000/users";
const DELAY = 500;


type User = { id: number; name: string };


//Utility function to fetch a user from the server
function fetchUser(userId: number, options?: object): Promise<User> {
    return fetch(`${SERVER_URL}/${userId}?delay=${DELAY}`, options).then((res) => res.json());
}


export default function FetchDemo1({ title }: BaseProps) {
    const [userId] = useState(1);
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);


    //Use this to fetch the next user when the "Next User" button is clicked
    //Make sure you understand why we don't need useEffect here
    const fetchNextUser = async () => {
        const nextUser = user ? (user.id % 15) + 1 : 1;
        //Do not set call setUserId here it will cause an extra render
        setLoading(true);
        const theUser = await fetchUser(nextUser);
        setLoading(false);
        setUser(theUser);
    };


    //Call fetchUser(..) immediately when the component is mounted

    useEffect(() => {
        fetchUser(userId).then((response) => {
            setUser(response);
            console.log(response);
        });
    },[])

    useEffect(() => {
        // Det der skal gøres

        //Eventuelt returner en clean up funktion
    }, [])


    return (
        <>
            <h2>{title}</h2>
            {loading && <h1>Loading ....</h1>}
            {user && JSON.stringify(user)}
            <br />
            <button onClick={fetchNextUser}>Next User</button>
        </>
    );
}
