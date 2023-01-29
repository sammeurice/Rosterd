// our-domain.com/nba
import { useState } from "react";
import Link from "next/link";
import styles from "./nbaPageStyles.module.css";
import { NBA_API_KEY } from "../../constants";
import { FaArrowLeft } from "react-icons/fa";
import { NavBar } from "../../components/NavBar";
import { HeaderRow } from "../../components/HeaderRow";
import Lottie from "lottie-react";
import basketballAnimation from "../../public/basketballLottie.json";

function NBAPlayers() {
  const [playerSearch, setPlayerSearch] = useState("");
  const [playerSearchResults, setPlayerSearchResults] = useState([]);
  const [searchHappened, setSearchHappened] = useState(false);

  const fetchPlayers = (name) => {
    fetch(`https://api-nba-v1.p.rapidapi.com/players?search=${name}`, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
        "x-rapidapi-key": NBA_API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => setPlayerSearchResults(data.response));
    setSearchHappened(true);
  };

  function PlayerResultList({ data }) {
    return (
      <div>
        {data.map((item) => (
          <div key={item.id}>
            <p>
              {item.lastname}, {item.firstname}
            </p>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={styles.mainContainer}>
      <NavBar />
      <HeaderRow title={"NBA"} />
      <div className={styles.mainContentContainer}>
        <div className={styles.inputContainer}>
          <input
            onChange={(event) => {
              setPlayerSearch(event.target.value);
            }}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                fetchPlayers(playerSearch);
              }
            }}
            className={styles.inputBox}
            placeholder="Search"
          />
          <button
            onClick={() => fetchPlayers(playerSearch)}
            className={styles.inputButton}
          >
            Search
          </button>
        </div>
        {searchHappened ? (
          <PlayerResultList data={playerSearchResults} />
        ) : (
          <div className={styles.animationContainer}>
            <p>Search for a player!</p>
            <Lottie
              animationData={basketballAnimation}
              style={{ height: "400px" }}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default NBAPlayers;
