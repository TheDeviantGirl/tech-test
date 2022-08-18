import { View } from "react-native";
import { MonoText } from "./MonoText";
import { Toggle } from "./Toggle";

export default function Item(props: {
  title: string;
  value: boolean;
  color: string;
  onChange: (e: boolean) => void;
}) {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Toggle
        color={props.color}
        onValueChange={props.onChange}
        value={props.value}
      />
      <MonoText style={{ marginLeft: 24, marginBottom: 16 }}>
        {props.title}
      </MonoText>
    </View>
  );
}
