import { Text, TextProps } from "react-native";
import Colors from "../constants/Colors";

export function MonoText(props: TextProps) {
  return (
    <Text
      {...props}
      style={[
        {
          fontFamily: "Ubuntu",
          color: Colors.white,
          fontSize: 46,
        },
        props.style,
      ]}
    />
  );
}
