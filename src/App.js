import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./components/ChatFeed.jsx";
import "./App.css";

const App = () => {
    return (
        <ChatEngine 
            height="100vh"
            projectID="c26d5d4c-058a-4bf3-b228-5ed346eb89e0"
            userName="bishalr0y"
            userSecret="bishalroy"
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    );
}

export default App;
