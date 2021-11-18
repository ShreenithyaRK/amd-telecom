import React,{useState, useEffect} from 'react';
import axios from 'axios';

export default function News() {
    const [loading, setLoading]= useState(true);
    const [newsResult, setNewsResult]=useState([]);

  useEffect(() => {
       axios.get('https://www.serpapi.com/search',
    {
       
        "params": {
          q: 'latest news',
          tbm: 'nws',
          api_key: '7d74d23db3aeb2ae5043cf96a3653f1a6f309326fc5e98509c7b99720a6775d8',
          method: 'get',
        }
}).then(res => {
    setLoading(false);
    setNewsResult(res.data.news_results);
   
})
  })
   

  
  
    return (
        <div>
             {loading && <div className="loader">Loading !!!!</div>}
             {newsResult.length> 0 && 
      newsResult.map(function(item){
        return (
          <div className="card" key={item.position}>
          <div className="thumbnail">
            <img src={item.thumbnail} alt="Thumbnail Image"/></div>
          <div className="details">
            <h3>{item.title}</h3>
            <div className="description">{item.snippet}</div>
            <a href={item.link}>Source: Evanston RoundTable</a>
            <br/>
            <span>Date: {item.date}</span>
          </div>
        </div>
        )
      })
      }
        </div>
    )
}
