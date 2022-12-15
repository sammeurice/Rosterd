// our-domain.com/nba
import { Fragment, useState } from "react";
import Link from "next/link";
import styles from "./nbaPageStyles.module.css";
import { NBA_API_KEY } from "../../constants";

function NBAPlayers() {
  const [playerSearch, setPlayerSearch] = useState("");
  const [playerSearchResults, setPlayerSearchResults] = useState([]);

  const fetchPlayers = (name) => {
    fetch(`https://api-nba-v1.p.rapidapi.com/players?search=${name}`, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
        "x-rapidapi-key": NBA_API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data.response));
  };

  return (
    <Fragment className={styles.mainContainer}>
      <h1>NBA</h1>
      <Link href="/">Go back</Link>
      <h2>Search for NBA players</h2>
      <input
        onChange={(event) => {
          setPlayerSearch(event.target.value);
        }}
      />
      <button
        onClick={() => fetchPlayers(playerSearch)}
        style={{ width: 200, height: 200 }}
      >
        Search
      </button>
    </Fragment>
  );
}

export default NBAPlayers;
