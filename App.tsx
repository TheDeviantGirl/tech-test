import { useFont } from "./hooks/useFont";
import Main from "./screens/Main";

//after the fonts are loaded, the application launches.
export default function App() {
  const isFontLoaded = useFont();
  if (!isFontLoaded) {
    return null;
  } else {
    return <Main />;
  }
}
