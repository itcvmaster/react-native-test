import React, { useRef, useState } from 'react'
import {
    View,
    StyleSheet,
    ScrollView,
    Text,
    TouchableOpacity,
    Image,
    Dimensions
} from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import Device from '../constants/Device'
import { useRoute, useNavigation } from '@react-navigation/native';

const { width: screenWidth } = Dimensions.get('window');

const ImageList = () => {
    const route = useRoute<any>();
    const navigation = useNavigation();
    const [index, setIndex] = useState(route.params?.selected || 0);
    const images = route.params?.images || [];
    const scrollRef = useRef<ScrollView>();
    const smallRef = useRef<ScrollView>();

    const changePage = (index: number) => {
        setIndex(index)
        scrollRef.current?.scrollTo({ x: screenWidth * index, y: 0, animated: true })
    }

    const changedPage = (e: any) => {
        let { contentOffset } = e.nativeEvent
        let index = Math.round(contentOffset.x / screenWidth)
        setIndex(index)
        let length = images.length
        if ((length - index) * 100 < screenWidth) {
            smallRef.current?.scrollToEnd({ animated: true })
        } else {
            smallRef.current?.scrollTo({ x: index * 100, y: 0, animated: true })
        }
    }

    const onClose = () => {
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <Text style={styles.imageTitle}>Images</Text>
            </View>
            <View style={styles.centerContainer}>
                {/* @ts-ignore */}
                <ScrollView ref={scrollRef} horizontal
                    pagingEnabled
                    onMomentumScrollEnd={changedPage}
                    showsHorizontalScrollIndicator={false}
                >
                    {images.map((image: string, idx: number) =>
                        <Image
                            key={idx}
                            source={{ uri: image }}
                            style={styles.centerImage}
                        />
                    )}
                </ScrollView>
            </View>
            <View style={styles.bottomContainer}>
                <Text style={styles.indexText}>{index + 1}/{images.length}</Text>
                <View style={styles.scrollContainer}>
                    {/* @ts-ignore */}
                    <ScrollView ref={smallRef} showsHorizontalScrollIndicator={false} horizontal style={styles.scroll}>
                        {images.map((image: string, idx: number) =>
                            <TouchableOpacity key={idx} onPress={() => changePage(idx)}>
                                <Image
                                    source={{ uri: image }}
                                    style={[styles.bottomImage, { borderWidth: index == idx ? 1.5 : 0 }]}
                                />
                            </TouchableOpacity>)}
                    </ScrollView>
                </View>
            </View>
            <TouchableOpacity onPress={onClose} style={styles.closeContainer}>
                <Ionicons name="ios-close" size={30} color={'white'} />
            </TouchableOpacity>
        </View>
    )
}

export default ImageList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(74, 74, 74)',
        paddingTop: Device.ToolbarHeight
    },
    closeContainer: {
        position: 'absolute',
        left: 15,
        top: Device.ToolbarHeight + 15,
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    topContainer: {
        flex: 0.5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    centerContainer: {
        flex: 1,
        justifyContent: 'center'
    },
    bottomContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginBottom: 10
    },
    imageTitle: {
        color: 'white',
        fontSize: 20
    },
    centerImage: {
        resizeMode: 'cover',
        width: screenWidth,
        height: '100%'
    },
    indexText: {
        color: 'white',
        fontSize: 18
    },
    scroll: {
    },
    bottomImage: {
        width: 100,
        height: 100,
        resizeMode: 'cover',
        borderColor: 'white'
    },
    scrollContainer: {
        marginTop: 20,
        height: 100
    }
})