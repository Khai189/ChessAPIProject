import {useState} from "react";

function Request() {
    const [response, setResponse] = useState([]);

    const handleRequest = async () => {
        try {
            const res = await fetch("https://api.github.com/users", {
                method: "GET",
            });
            const data = await res.json();
            setResponse(transformResponse(data));
        } catch (error) {
            console.error("Error making request:", error);
            setResponse([]);
        }
    };
    const transformResponse = (data: any) => {
        if(data.length === 0) {
            return [];
        }
        // Transform the response data into a more readable format
        return data.map((item: any) => ({
            id: item.id,
            login: item.login,
            avatar_url: item.avatar_url,

        }));
    };

    return (
        <div>
            <button onClick={handleRequest}>Make Request</button>
            <pre>{response.map((item: any) => (
                <div key={item.id}>
                    <img src={item.avatar_url} alt={item.login} width={50} />
                    {item.login}
                </div>
            ))}</pre>
        </div>
    );
}
export default Request;