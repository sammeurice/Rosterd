import { useRouter } from "next/router";

// our-domain.com/nba/playerId

function NBAPlayerSpotlight() {
  const router = useRouter();

  const playerId = router.query.playerId;

  // fetch(`https://api-nba-v1.p.rapidapi.com/players?id=${playerId}`, {
  //   method: "GET",
  //   headers: {
  //     "x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
  //     "x-rapidapi-key": "3cbcd84b6emshf3b9e22abe26663p19a2b5jsnc3aad965199c",
  //   },
  // })
  //   .then((response) => response.json())
  //   .then((data) => console.log(data));

  return <h1>NBA Player Spotlight</h1>;
}

export default NBAPlayerSpotlight;
