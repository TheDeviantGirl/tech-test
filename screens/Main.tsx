import { useState } from "react";
import { Container } from "../components/Container";
import Item from "../components/Item";
import Colors from "../constants/Colors";

export default function Main() {
  const [isGood, setGood] = useState(false);
  const [isFast, setFast] = useState(false);
  const [isCheap, setCheap] = useState(false);

  if (isCheap && isFast && isGood) {
    //i avoided using useEffect because it would run twice as strict mode is stated as true.
    // whenever the three states return true, one of the three is randomly picked to change state to false.
    var randomNumber = Math.floor(Math.random() * 3) + 1;
    randomNumber === 1
      ? setGood(false)
      : randomNumber === 2
      ? setFast(false)
      : setCheap(false);
  }
  return (
    <Container>
      <Item
        title="Good"
        color={Colors.green}
        value={isGood}
        onChange={(e) => setGood(e)}
      />
      <Item
        title="Fast"
        color={Colors.blue}
        value={isFast}
        onChange={(e) => setFast(e)}
      />
      <Item
        title="Cheap"
        color={Colors.red}
        value={isCheap}
        onChange={(e) => setCheap(e)}
      />
    </Container>
  );
}
