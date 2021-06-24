const MyMessage = ({ message }) => {

    if(message?.attachment?.length > 0) {
        return (
            <img 
                src={message.attachment[0].file}
                alt="message-attachment"
                className="message-image"
                style={{ float: 'right'}}
            />
        )
    }

    return (<div classname="message" style={{ float: "right", marginRight: '18px', color: 'white', background: '#3B2A50'}}>
        {message.txt}
    </div>)
}

export default MyMessage;