import { Switch } from "react-native";
import Colors from "../constants/Colors";

export function Toggle(props: {
  onValueChange: (e: boolean) => void;
  value: boolean;
  color: string;
}) {
  return (
    <Switch
      style={{ transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }] }}
      onValueChange={(e) => props.onValueChange(e)}
      value={props.value}
      trackColor={{ true: props.color, false: Colors.white }}
      thumbColor={props.color}
    />
  );
}
