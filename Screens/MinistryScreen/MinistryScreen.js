import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import ItemCardMinistry from '../../Components/ItemCardMinistry'

const MinistryScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff", position: 'relative' }}>
      <View style={{ flexDirection: 'column', paddingHorizontal: '20px', paddingTop: '10px', backgroundColor: '#0885F8' }}>
        <View style={{ marginVertical: '10px' }}>
          <Text style={{ fontWeight: '600', color: '#fff', fontSize: '16px' }}>Ministry</Text>
          <Text style={{ fontWeight: 'normal', color: '#fff', fontSize: '12px' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </Text>
        </View>
      </View>

      <View style={{ paddingHorizontal: '20px', marginTop: '10px', alignItems: 'center', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
        <ItemCardMinistry
          key={"1"} 
          imageSrc={"https://i.pinimg.com/564x/32/24/89/3224894a867134cdf1e7dbb326e75d06.jpg"}
          title={"Haloooo"}
        />
        <ItemCardMinistry
          key={"1"}
          imageSrc={"https://i.pinimg.com/564x/32/24/89/3224894a867134cdf1e7dbb326e75d06.jpg"}
          title={"Haloooo"}
        />
        <ItemCardMinistry
          key={"1"}
          imageSrc={"https://i.pinimg.com/564x/32/24/89/3224894a867134cdf1e7dbb326e75d06.jpg"}
          title={"Haloooo"}
        />
      </View>
    </SafeAreaView>
  )
}

export default MinistryScreen