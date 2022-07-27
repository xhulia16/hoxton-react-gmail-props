type Index=number
type Email={
    id: number;
    sender: string;
    title: string;
    starred: boolean;
    read: boolean;
}
 // @ts-ignore
function Main({getFilteredEmails, toggleRead, toggleStar}){
    return(
        <main className="emails">
        <ul>
          {getFilteredEmails().map((email:Email, index:Index) => (
            <li
              key={index}
              className={`email ${email.read ? "read" : "unread"}`}
            >
              <div className="select">
                <input
                  className="select-checkbox"
                  type="checkbox"
                  checked={email.read}
                  onChange={() => toggleRead(email)}
                />
              </div>
              <div className="star">
                <input
                  className="star-checkbox"
                  type="checkbox"
                  checked={email.starred}
                  onChange={() => toggleStar(email)}
                />
              </div>
              <div className="sender">{email.sender}</div>
              <div className="title">{email.title}</div>
            </li>
          ))}
        </ul>
      </main>
    )
}

export default Main