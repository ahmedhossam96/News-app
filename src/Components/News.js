import React, {Component} from 'react';
import Favs from './Favs';
import Globalinst from './Global';

class News extends React.Component {
 
  state = {
    article: []
  };


  choose(){
    alert("ygejyrgey");
  }


  display(articles) {
    if(articles!==undefined)
    {const listItems = articles.map((obj) =>

      <div className= "column" onClick={()=>Globalinst.add(obj)}>
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


   

  constructor(props){
    super(props);

    fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=e89d0b4196f7497fa42269fd46f01773')
    .then(res => {
      
      return res.json()}
    )
    .then(data => {
      this.setState({article: data.articles})
    }).catch(error=>{
        console.log(error);
      });
  
  }

  render() {
    return (
       <div>
         {this.display(this.state.article)}
         <button onClick={()=>this.choose()}>click</button>
       </div>

      
    )

    }
    }
  
    export default News;


  
