export default function CardContacts({ contacts }) {  


  return (
    <div className="flex flex-col  xs:flex-col   ">
      <div className="flex flex-row text-black-500 group-hover:text-white-500 text-sm font-thin mb-2 mr-5">
   
            <div className="text-black-500 mr-2 mt-40">
            {contacts.map((contact) => (
                <div className="text-black-500">{contact.name}</div>
            ))}    
                
            </div> 



      </div>
    </div>
  );
}
