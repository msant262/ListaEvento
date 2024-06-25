import { StyleSheet } from "react-native";
import { Inter_400Regular, Inter_900Black } from "@expo-google-fonts/inter";

export const styles =  StyleSheet.create({
    container:{
        width: '100%',
        backgroundColor: '#262626',
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        marginTop: 0
    },
    name: {
        color: '#FFF',
        flex: 1,
        fontSize: 14,
        marginLeft: 16

    },    
    name2: {
        color: '#FFF',
        flex: 10,
        marginLeft:10

    },  
    button:{
        width: 56,
        height: 56,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText:{
        color: '#FFF',
        fontSize: 24
        },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    paragraph: {
        fontSize: 15,
    },
    checkbox: {
        margin: 8,
    },


})