import React, { useState } from 'react'


import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import { Ionicons } from '@expo/vector-icons';

interface IProps {
    onChange: (text: string) => void;
}

const SearchBar = (props: IProps) => {

    const [value, setValue] = useState("");

    const onChange = (text: string) => {
        setValue(text);
        props.onChange(text)
    }

    return (
        <View style={styles.container}>
            <TextInput
                onChangeText={onChange}
                value={value}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.input}
            />
            <Ionicons name="ios-search" size={20} color="black" style={styles.icon} />
        </View>
    )
}

export default SearchBar

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 50,
        paddingHorizontal: 15,
        backgroundColor: '#ccc',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        fontSize: 14,
        color: 'black',
        borderRadius: 4,
        backgroundColor: 'white',
        height: 36,
        width: '100%',
        paddingHorizontal: 10
    },
    icon: {
        position: 'absolute',
        right: 25,
        top: 15
    }
})