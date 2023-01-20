import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-web'

const DetailScreen = ({ route }) => {
  const data = route?.params.param

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff", position: 'relative' }}>
      <ScrollView style={{ paddingHorizontal: '20px', paddingTop: '10px' }}>
      <Text style={{textAlign:'center', fontWeight:'bold', marginVertical:'10px'}}>
        {data?.name}
      </Text>
        <Image
          source={{
            uri:
              data?.photo?.images?.large?.url ?
                data?.photo?.images?.large?.url :
                "https://i.pinimg.com/564x/32/24/89/3224894a867134cdf1e7dbb326e75d06.jpg"
          }}
          style={{width: '100%', height:'18rem', }}
        />
        <Text style={{textAlign:'justify', marginTop:'10px'}}>
          {data?.web_url}
          jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj
          jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj
        </Text>
      </ScrollView>
    </SafeAreaView>
  )
}

export default DetailScreen