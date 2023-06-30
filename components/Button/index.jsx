import { TouchableOpacity, Text } from "react-native";
import { styles } from "./style.js";

export default function Input(props) {
    return (
        <TouchableOpacity style={styles.button} { ...props }>
            <Text style={styles.buttonText}>
                Clique Aqui
            </Text>
        </TouchableOpacity>
    )
}