import { View, ViewProps } from "react-native";
import Colors from "../constants/Colors";

export function Container(props: ViewProps) {
  //since we are not dealing with big, complicated components, using a separate styleSheet seemed unnecessary
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.background,
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
      }}
    >
      <View>{props.children}</View>
    </View>
  );
}
