import { useState } from "react";
import axios from "axios";

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const authObject = { 'Project-ID': "c26d5d4c-058a-4bf3-b228-5ed346eb89e0", 'User-Name': username, "User-Secret": password }
        

        try {
            await axios.get('https://api.chatengine.io/chats', { headers: authObject });
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
            window.location.reload(); //reloads the page
        } catch (error) {
            setError("Oops! incorrect credentials. Contact the admin")
        }
    }

    return (
        <div className="wrapper">
            <div className="form">
               <h1 className="title">Open Chat</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required/>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required/>
                    <div align="center">
                        <button type="submit" className="button">
                            <span>Start Chatting...</span>
                        </button>
                    </div>
                </form>
                <h2 className="error">{error}</h2>
            </div>
        </div>
    );
}

export default LoginForm;