import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Character from './components/Character';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://swapi.dev/api/people/')
    .then(response => {
      // console.log(response.data)
      setData(response.data)
    })
    .catch(err => {
      console.log(err)
    })
  }, []);

  //console.log(data)

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {data.map(item => {
        return(
          <div>
          <Character
            name = {item.name}
            gender = {item.gender}
            height = {item.height}
            films = {item.films}
          />
          </div>
        )
      })}

    </div>
  );
}

export default App;
