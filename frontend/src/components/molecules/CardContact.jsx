export default function CardContact({ contact }) {  

  return (
    <div className="flex flex-col  xs:flex-col   ">
      <div className="flex flex-row text-blue-500  text-sm font-thin mb-2 mr-5">
   
            <div className="text-blue-500 mr-2 mt-40">
              <p>{contact.email}</p>
                
            </div> 



      </div>
    </div>
  );
}
