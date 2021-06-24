import MessageForm from "./MessageForm";
import MyMessage from "./MyMessage";
import TheirMessage from "./TheirMessage";

const ChatFeed = (props) => {
    const { chats, activeChat, userName, messages } = props;
    const chat = chats && chats[activeChat];

    const renderMessages = () => {
        const keys = Object.keys(messages);

        console.log(keys);
        return keys.map((key, index) => {
            const message = messages[key];
            const lastMessageKey = index === 0 ? null : keys[index - 1] // to get the last message
            const isMyMessage = userName === message.sender.username;
            return (
                <div key={`msg_${index}`} style ={{ width: '100%' }}>
                    <div className="message-block">
                        {
                            isMyMessage 
                            ? <MyMessage />
                            : <TheirMessage />
                        }

                    </div>
                    <div className="read-receipts" style={{marginRight: isMyMessage ? '18px' : '0px', marginLeft: isMyMessage ? '0px' : '68px'}}>
                        read-receipts
                    </div>
                </div>
            )
        })
    }

    if(!chat) return "Loading...";

    return(
        <div className="chat-feed">
            <div className="chat-title-container">
                <div className="chat-title">{chat?.title}</div> {/*this will make sure that the title is only rendered when there is chat */}
                <div className="chat-subtitle">
                    {chat.people.map((person) => `${person.person.username}`)}
                </div>

            </div>
            {renderMessages()}
            <div style={{ height: '100px'}} />
            <div className="message-form-container">
                <MessageForm {...props} chatId={activeChat}/>
            </div>
        </div>
    )
}

export default ChatFeed;
