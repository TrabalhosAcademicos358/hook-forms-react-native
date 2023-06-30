import { TextInput } from "react-native";
import { styles } from "./style.js";

export default function Input(props) {
    return (
        <TextInput
            placeholderTextColor="#999999"
            style={styles.input}
            {...props}
        />
    )
}