import React from 'react'

import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native'

export interface IUser {
    id: number;
    name: string;
    email: string;
    phone: string;
    images: Array<string>;
}

export interface extraProps {
    onPress: () => void;
}

const UserItem = (props: IUser & extraProps) => {

    return (
        <TouchableOpacity onPress={props.onPress} style={styles.container}>
            <Text style={styles.name}>{props.name}</Text>
            <Text style={styles.email}>{props.email}</Text>
        </TouchableOpacity>
    )
}

export default UserItem;

const styles = StyleSheet.create({
    container: {
        height: 60,
        width: '100%',
        justifyContent: 'center',
        paddingHorizontal: 15,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
    },
    name: {
        fontSize: 14,
        color: 'black',
        fontWeight: 'bold'
    },
    email: {
        fontSize: 12,
        color: 'grey',
    }
})