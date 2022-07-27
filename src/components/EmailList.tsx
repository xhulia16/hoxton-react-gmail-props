import "./EmailList.css";

import EmailItem from "./Email";

type Index=number
type Email={
    id: number;
    sender: string;
    title: string;
    starred: boolean;
    read: boolean;
}
 // @ts-ignore
function EmailList({getFilteredEmails, toggleRead, toggleStar}){
    return(
        <main className="emails">
        <ul>
          {getFilteredEmails().map((email:Email, index:Index) => (
           
             <EmailItem 
             email = {email}
             toggleRead ={toggleRead}
             toggleStar={toggleStar}
             index={index}
              />
            
          ))}
        </ul>
      </main>
    )
}

export default EmailList