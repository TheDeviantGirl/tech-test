import * as Font from "expo-font";
import { useEffect, useState } from "react";

export function useFont() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    async function loadFont() {
      try {
        // loading the font using expo-font
        await Font.loadAsync({
          Ubuntu: require("../assets/fonts/Ubuntu-Medium.ttf"),
        });
      } catch (e) {
        // we may need to try reloading the font or showing the error
        console.warn(e);
      } finally {
        setLoadingComplete(true);
      }
    }

    loadFont();
  }, []);

  return isLoadingComplete;
}
