import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const ItemCardCommunity = ({ imageSrc, title }) => {
    const navigation = useNavigation()
    return (
        <TouchableOpacity
        onPress={()=> navigation.navigate("DetailComm")}
            style={{ padding: '5px', marginTop: '10px', marginBottom: '10px', backgroundColor: '#fff', borderRadius: '0.375rem', borderWidth: '1px', borderColor: '#000' }}
        >
            <Image
                source={{ uri: imageSrc }}
                style={{ width: '80px', height: '80px', borderRadius: '0.375rem' }}
            />
            <Text>{title}</Text>
        </TouchableOpacity>
    )
}

export default ItemCardCommunity