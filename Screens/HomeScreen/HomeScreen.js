import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React, { useLayoutEffect, useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import ItemCardComponent from '../../Components/ItemCardComponent'
import { getNewsData } from '../../API'

const HomeScreen = () => {
    const navigation = useNavigation()

    const [mainData, setMainData] = useState([])

    const [isLoading, setIsLoading] = useState(false)

    

    useEffect(() => {
        setIsLoading(false)
        getNewsData().then(data => {
            setMainData(data)
            setInterval(() => {
                setIsLoading(false)
            }, 2000)
        })
    }, [])

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#fff", position: 'relative' }}>
            <View style={{ flexDirection: 'column', paddingHorizontal: '20px', paddingTop: '10px', backgroundColor: '#0885F8' }}>
                <View style={{ marginVertical: '10px' }}>
                    <Text style={{ fontWeight: '600', color: '#fff', fontSize: '16px' }}>Selamat Datang di</Text>
                    <Text style={{ fontWeight: '600', color: '#fff', fontSize: '16px' }}>Pusat Informasi Gereja Jemaat Purwodadi</Text>
                </View>
            </View>
            <View style={{ paddingHorizontal: '20px', marginTop: '10px' }}>
                <Text style={{ fontWeight: 'bold', fontSize: '20px', borderBottomWidth: '2px', borderBottomColor: '#b1b1b1' }}>
                    Kabar Terkini Gereja
                </Text>
            </View>
            {isLoading ? <View className="flex-1 items-center justify-center">
                <ActivityIndicator size="large" color="#00ff00" />
            </View> :
                <ScrollView style={{ flexDirection: 'column', paddingHorizontal: '20px', marginTop: '10px' }}>
                    {mainData?.length > 0 ? (
                        <>
                            {mainData?.map((data, index) => (
                                <ItemCardComponent
                                    key={index}
                                    imageSrc={
                                        data?.photo?.images?.medium?.url ?
                                            data?.photo?.images?.medium?.url :
                                            "https://i.pinimg.com/564x/32/24/89/3224894a867134cdf1e7dbb326e75d06.jpg"
                                    }
                                    title={data?.name}
                                    date={data?.latitude}
                                    data={data}
                                />
                            ))}

                        </>) : (
                        <>
                            <View>
                                <Text>Ooops... No Data Found</Text>
                            </View>
                        </>)
                    }
                </ScrollView>
            }

        </SafeAreaView>
    )
}

export default HomeScreen