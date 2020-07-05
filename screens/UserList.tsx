import React, { useState } from 'react'

import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    StyleSheet,
    FlatList
} from 'react-native'
import UserItem, { IUser } from '../components/UserItem'
import { useNavigation } from '@react-navigation/native';
import SearchBar from '../components/SearchBar';

const dummy = require('../assets/users.json')

const UserList = () => {

    const [searchString, setSearchString] = useState("");
    const [users, setUsers] = useState<Array<IUser>>(dummy);
    const navigation = useNavigation();

    const onSearch = (text: string) => {
        setSearchString(text)
    }

    const selectItem = (item: IUser) => {
        navigation.navigate("UserDetail", { screen: "UserDetail", params: { user: item } });
    }

    return (
        <View style={styles.container}>
            <SearchBar onChange={onSearch} />

            <FlatList
                data={users.filter((item: IUser) => item.name.toLowerCase().indexOf(searchString) >= 0)}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) =>
                    <UserItem
                        {...item}
                        onPress={() => selectItem(item)}
                    />}
            />
        </View>
    )
}

export default UserList;

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})