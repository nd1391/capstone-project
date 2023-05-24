import { checkToken } from "../../utilities/users-service";
import { useEffect, useState } from 'react';
import * as outfitsApi from '../../utilities/outfits-api'


export default function WardrobeHistory() {

  const [toggle, setToggle] = useState(false)



  const handleCheckToken = async () => {
    const expDate = await checkToken();
    alert(expDate);
  };
  // const { outfit } = props

  const [wardrobe, setWardrobe] = useState([])

  const getWardrobe = async () => {
    try {
      
      const wardrobeRes = await outfitsApi.getAll()
      setWardrobe(wardrobeRes)      

    } catch(err) {
      console.log(err)

    }
  }

  useEffect( () => {
    getWardrobe()
  }, [toggle])

  return (
    <div>
      <h1>Your Wardrobe's Assisted Memory</h1>

     
      <div>
        <ul>
            {wardrobe.length && wardrobe.map((outfit, i) => {
              const date = new Date(outfit.createdAt)
                return (
                    <li key={i}>
                      <h4>{date.toLocaleString()}</h4> 
                        Event:{" "}
                        <a href={`/outfits/${outfit._id}`}>
                            {outfit.event}
                        </a>{" "}
                        <br />
                        Top: {outfit.top} <br></br>
                        Top Color: {outfit.topColor}
                        <br />
                        Bottom: {outfit.bottom}
                        <br />
                        Bottom Color: {outfit.bottomColor}
                        < br />
                        Footwear: {outfit.feet}
                        <br></br>
                        Footwear Color: {outfit.feetColor}
                        <br />
                        Additional Description: {outfit.description}
                        {/* link to this specific fruit's edit page */}
                        <br />
                        {/* <a href={`/outfits/${outfit._id}/edit`}>Edit This Captain Log</a>  */}
                        {/* we must use a Form for delete because we need to make a request to our server.  You can't use handleClick in server-side app */}
                        <br></br>
                        <button onClick={async () =>  {
                          const deleted = await outfitsApi.deleteOutfit(outfit._id)
                          setToggle(!toggle)
                          }}>DELETE</button>
                    </li>
                );
                
            })}
        </ul>
        </div>


      <button onClick={handleCheckToken}>Check When My Login Expires</button>
    </div>
  );
}
