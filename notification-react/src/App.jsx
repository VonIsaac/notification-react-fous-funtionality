import './App.css'
import MarkWebber from './Components/MarkWebber';
import Markwebberimg from './assets/avatar-mark-webber.webp';
import AngelaGray from './Components/AngelaGray';
import AngeleImg from './assets/avatar-angela-gray.webp';
import JacobThompson from './Components/JacobThompson';
import JacobImg from "./assets/avatar-jacob-thompson.webp";
import RizkyHasanuddin from './Components/RizkyHasanuddin';
import RizkyImg from "./assets/avatar-rizky-hasanuddin.webp";
import Nathan from './Components/Nathan.jsx'
import NatanImg from './assets/avatar-nathan-peterson.webp';

import { useState, useRef} from 'react';


function App({number}) {
   
  const notifFunction = useRef();
    const [isEdit, setEdit] = useState(number = 3);
    
  
    if(isEdit <= -1){
      setEdit((prevNum) => prevNum = 0);
    };


    function setActive(){
      setEdit( notifFunction.current = (prevNum) => prevNum  -1 );
      
    };
    
    function unreadAll(){
      setEdit( (prevNum) => prevNum = 0);
    } ;


  return (
    <>
    <div className='section'>
        <section className='notif'>
          <h1>Notifications <span>{isEdit}</span></h1>
          <div className='unread'><strong onClick={unreadAll} >Unread</strong></div>

          <MarkWebber 
              img= {Markwebberimg}
              strongz= " Mark Webber"
              title= " reacted to your recent post" 
              strong= "My first tournament today!"
              paragraph= "1m ago"
              num1 = {number}
              onClick = {setActive}
              unread = {isEdit}
              ref={notifFunction}
          />

          <AngelaGray 
            img2={AngeleImg}
            strong2= "Angela Gray"
            title2="followed you"
            paragraph2= "5m ago"
            num2 = {number}
            onClick = {setActive}
            unread ={isEdit }
            ref={notifFunction}
          />

          <JacobThompson 
            img3={JacobImg}
            title3= "has joined your group"
            strong3= "Jacob Thompson"
            strongs= "Chess Club"
            paragraph3= "1 day ago"
            num3 = {number}
            onClick = {setActive}
            unread ={isEdit }
            ref={notifFunction}
          />

          <RizkyHasanuddin 
              img4={RizkyImg}
              title4= "Rizky Hasanuddin "
              strong4= "sent you a private message"
              paragraph4= "5 days ago"
          />

          <Nathan
              img5={NatanImg}
              strong5= "Nathan Pererson"
              title5= "reacted to your recent post"
              strongss= "5 end-game strategies to increase your win rate"
              paragraph5="2 weeks ago"
          />
        </section>
    </div>  
    </>
  );
};

export default App
