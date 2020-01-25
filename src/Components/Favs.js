import React, {Component} from 'react';
import Globalinst from './Global';
 
let fav= [];
class Favs extends React.Component {
 
    
  
    show() {
      
   fav =  Globalinst.extract()

   if(fav!==undefined)
   {const listItems = fav.map((obj) =>

     <div className= "column" >
   <h1>{obj.title}</h1>
   <img src = {obj.urlToImage} style={{width: "400px"}} />
   <p>{obj.description}</p>
 </div>
 

     
   );
   return (
     <ul>{listItems}</ul>
   )
   }
   return;

     
    }
  
  
    render() {
      return (
         <div>
          {this.show()}
         </div>
  
        
      )
  
      }
      }
      export default Favs;