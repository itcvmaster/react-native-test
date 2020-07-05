import React from 'react'


import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    FlatList,
    Image,
    Dimensions
} from 'react-native'
import { IUser } from '../components/UserItem'
import { useRoute, useNavigation } from '@react-navigation/native'

const { width: screenWidth } = Dimensions.get('window');

const UserDetail = () => {

    const route = useRoute<any>();
    const navigation = useNavigation();
    const user: IUser = route.params?.user;

    const selectItem = (index: number) => {
        navigation.navigate("ImageList", { images: user.images || [], selected: index })
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.name}>{user.name}</Text>
                <Text style={styles.email}>{user.email}</Text>
            </View>
            <FlatList
                data={user?.images || []}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) =>
                    <TouchableOpacity onPress={() => selectItem(index)} style={styles.imageContainer}>
                        <Image source={{ uri: item }} style={styles.image} />
                    </TouchableOpacity>
                }
                numColumns={4}
                style={styles.imageList}
            />
        </View>
    )
}

export default UserDetail;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    imageContainer: {
        width: screenWidth / 4 - 1,
        height: screenWidth / 4 - 1,
        borderWidth: 1,
        borderColor: 'white'
    },
    image: {
        width: screenWidth / 4 - 1,
        height: screenWidth / 4 - 1,
        resizeMode: 'cover',
        backgroundColor: 'black'
    },
    header: {
        alignItems: 'center',
        width: '100%',
        height: 150,
        justifyContent: 'center'
    },
    name: {
        fontSize: 16,
        color: 'black',
        fontWeight: 'bold'
    },
    email: {
        fontSize: 12,
        color: 'grey'
    },
    imageList: {
        backgroundColor: 'grey'
    }
})