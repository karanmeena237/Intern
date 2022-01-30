import React from "react";
import ContactListCard from "./ContactListCard"
const ContactList=(props)=>{
    console.log(props);
  
    const renderContactList = props.contacts.map((contact)=>{
        // return jsx block
        return <ContactListCard contact={contact}></ContactListCard>

    });

    return(
<div className="ui celled list " id="big">
   {renderContactList}
</div>
    );
};
export default ContactList;