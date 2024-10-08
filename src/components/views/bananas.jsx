import { useRouteError } from "react-router-dom";
import { useState } from 'react'
import "./styles/tailwindStyle.css"

export default function Bananas() {
  const error = useRouteError();
  console.error(error);

  
  // After every time this state changes, the page will re-render
  const [count, setBanana] = useState(3)

  function addBanana(){
    setBanana(count + 1)
  }

  function removeBanana(){
    setBanana(count -1)
  }



  // How to render lists or mutliple things!
  var tmp = [];
  for (var i = 0; i < count; i++) {
    tmp.push(i);
  }

  // 'i' is not used but we use a map function to create each banana
  var bananasDynanamic = tmp.map(function (i) {
    return (
      <img src="https://i.imgur.com/Mudezu4.png" alt="banana" className="banana"></img>
    );
  });


  return (
    <div  id="banana-page" >
      <div>{bananasDynanamic}</div>
      {/* <img src="https://i.imgur.com/Mudezu4.png" alt="banana" className="banana"></img>
      <img src="https://i.imgur.com/Mudezu4.png" alt="banana" className="banana"></img>
      <img src="https://i.imgur.com/Mudezu4.png" alt="banana" className="banana"></img> */}
      
      <div>
      <button  onClick={addBanana}> Add Banana</button>
      <button  onClick={removeBanana}> Remove Banana</button>
      </div>

    </div>
    
  );
}