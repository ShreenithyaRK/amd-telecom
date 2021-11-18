import React,{useState, useEffect} from 'react';
import axios from 'axios';

export default function Home() {
    const[searchInput,setSearchInput]=useState('')

    const[searchQuery,setSearchQuery]=useState('')
    const[searchResult,setSearchResult]=useState([])

    const [loading, setLoading]= useState();

    const handleSearchInput = (e) => {
        setSearchInput(e.target.value)
    }
    useEffect(() => {
        axios.get('https://www.serpapi.com/search',
     {
        
         "params": {
           q: searchQuery,
           api_key: '7d74d23db3aeb2ae5043cf96a3653f1a6f309326fc5e98509c7b99720a6775d8',
           method: 'get',
           engine: 'google'
         }
 }).then(res => {
     setLoading(false);
     setSearchQuery(searchInput)
     setSearchResult(res.data.organic_results);
    
 })
   },[searchQuery])
    const handleSearchClick = () => {
        setLoading(true)
        setSearchQuery(searchInput)
    }
    return (
        <div className="home-component">
            <input type="text" onChange={handleSearchInput} value={searchInput}/> 
            <button onClick={handleSearchClick}>Search</button>
            {loading && <div className="loader">Loading !!!!</div>}
            {!loading && searchResult.length>0 && searchResult.map(function(item){
                return (
                    <div className="card flex-column" key={item.position}>
                        <a href={item.link}>
                            <span>{item.displayed_link}</span>
                            <h3>{item.title}</h3>
                        </a>
                        <div>{item.snippet}</div>
                    </div>
                )
            })}

        </div>
    )
}
