import axios from "axios";
import { useEffect, useState } from "react";
import './App.css'

function App() {
  let [user, setUser] = useState([])
  let [search, setSearch] = useState('')
  useEffect(()=>{
    axios.get('https://randomuser.me/api/?results=100').then((res)=>{
      if (search) {
        let filter = res.data.results.filter((x)=>{
          return x.name.first.toLowerCase().includes(search.toLowerCase());
        })
        setUser(filter)
        
      }
        setUser(res.data.results)
      
    })
  }, [search])
  console.log(user);
  return (
    <>
    <input placeholder="search" type="text" onChange={(e)=>{
      let value = e.target.value
      setSearch(value)
    }}/>


    {
      user.map((profil)=>{
        return <div className="user">
        
            <div className="photo">
            <img src={`${profil.picture.medium}`} alt="salam"/>
            </div>
            <div className="about">
              <p>{profil.name.title} {profil.name.first} {profil.name.last}</p>
              <p>{profil.location.country} {profil.location.city}</p>
            </div>
          </div>
              })
    }
     
    </>
    
   


       
      
  );
}

export default App;
