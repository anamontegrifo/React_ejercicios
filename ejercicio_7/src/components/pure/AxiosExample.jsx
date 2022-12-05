import React from "react";
import { getRandomJoke } from "../../services/axiosService";
import { useEffect, useState } from "react";

import Button from '@mui/material/Button';


const AxiosExample = () => {
  const [joke, setJoke] = useState(null);
  const [positiveVotes, setpositiveVotes] = useState(0);
  const [negativeVotes, setnegativeVotes] = useState(0);

  useEffect(() => {
    obtainJoke();
  }, []);

  const obtainJoke = () => {
    getRandomJoke()
      .then((response) => {
        if (response.status === 200) {
          setJoke(response.data);
          console.log(response);
        }
      })
      .catch((error) => {
        alert(`Something went wrong: ${error}`);
      });
  };

const sumVotes = () => {
    setpositiveVotes(positiveVotes + 1);
    obtainJoke();

}

const remainVotes = () => {
    setnegativeVotes(negativeVotes + 1);
    obtainJoke();
}

  return (
    <div>
      <h1>Chuck Norris jokes</h1>
      {joke != null ? (
        <div>
          <img alt="avatar" style={{height: '100px'}} src={"https://api.chucknorris.io/img/chucknorris_logo_coloured_small@2x.png"} />
          <h2>
            {joke.value}
          </h2>
        </div>
      ) : null}

      <div>
        <Button variant="contained" onClick={obtainJoke}>Obtain a new joke</Button>
      </div>

      <div>
      <Button variant="contained" color="success" onClick={sumVotes} style={{margin: '20px'}}>{`I love this joke`}</Button>
      <Button variant="contained" color="error" onClick={remainVotes} style={{margin: '10px'}}>{`I hate this joke`}</Button>
      </div>
      <h2>{`I love ${positiveVotes} ${positiveVotes === 1 ? "joke" : "jokes "} and I hate ${negativeVotes} ${negativeVotes === 1 ? "joke" : "jokes "}`}</h2>
     
    </div>
  );
};

export default AxiosExample;
