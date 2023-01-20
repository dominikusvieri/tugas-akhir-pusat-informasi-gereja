import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const ItemCardComponent = ({ imageSrc, title, date, data }) => {
    const navigation = useNavigation()
    return (
        <TouchableOpacity
            onPress={() => navigation.navigate("DetailNews", { param: data })}
            style={{ flexDirection: 'row', marginBottom: '5px', borderWidth: '2px', padding: '5px' }}>
            <Image
                source={{ uri: imageSrc }}
                style={{ width: '50px', height: '50px' }}
            />
            <View style={{ marginLeft: '5px' }}>
                <Text style={{ fontWeight: 'bold', fontSize: '16px' }}>
                    {title?.length > 20 ? `${title.slice(0, 20)}..` : title}
                </Text>
                <Text style={{ fontWeight: '500', color: '#b1b1b1', fontSize: '10px' }}>
                    {date}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

export default ItemCardComponent