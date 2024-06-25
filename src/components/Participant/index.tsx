import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { useState } from "react";
import Icon from 'react-native-vector-icons/FontAwesome';
import CheckBox, { Checkbox } from "expo-checkbox";


type Props = {
    name: string;
    onRemove: () => void;
}

export function Participant({name, onRemove} : Props){
    const [isChecked, setChecked] = useState(false);
    
    
    return(
        <View style={styles.container}>
            <View style={styles.section}>
                <Checkbox
                style={styles.checkbox}
                value={isChecked}
                onValueChange={setChecked}
                color={isChecked ? '#5e60ce' : '#1e6f9f'}
                />
            </View>
            
            <Text 
            style={[styles.name2, { textDecorationLine:isChecked ? 'line-through' : 'none'}, {color:isChecked ? '#808080' : '#FFF'}]}
            >
                {name}
            </Text>

            <TouchableOpacity style={styles.button} onPress={onRemove}>
            <Text style={styles.buttonText}>
                <Icon 
                name="trash"
                size={22}
                color="#808080"
                
                />
            </Text>
          </TouchableOpacity>

        </View>

    )
}
