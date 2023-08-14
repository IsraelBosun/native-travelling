import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ChevronLeftIcon } from 'react-native-heroicons/outline'
import { ClockIcon, HeartIcon, MapPinIcon, SunIcon } from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native'
import { theme } from '../theme'


export default function DestinationScreen(props) {
  // console.log(props.route.params)
  const item = props.route.params
  const navigation = useNavigation();
  const [isFavourite, setIsFavourite] = useState(false)


  return (
    <View className = "bg-white flex-1">
      <Image source={item.image} style={{width: wp(100), height: hp(55)}} />
      <StatusBar style={'inverted'} />

      <SafeAreaView className="flex-row justify-between items-center w-full absolute">
        <TouchableOpacity className="p-2 rounded-full ml-4" style={{backgroundColor: "rgba(255, 255, 255, 0.5)"}} onPress={()=> navigation.goBack()}>
          <ChevronLeftIcon size={wp(7)} strokeWidth={4} color="white" />
        </TouchableOpacity>
        <TouchableOpacity className="p-2 rounded-full mr-4" style={{backgroundColor: "rgba(255, 255, 255, 0.5)"}} onPress={()=> setIsFavourite(!isFavourite)}>
          <HeartIcon size={wp(7)} strokeWidth={4} color={isFavourite? "red" : "white"} />
        </TouchableOpacity>
      </SafeAreaView> 

      <View style={{borderTopLeftRadius: 40, borderTopRightRadius: 40}} className="px-5 flex flex-1 justify-between bg-white pt-8 -mt-14">
        <ScrollView showVerticalScrollIndicator={false} className="space-y-5">
          <View className="flex-row justify-between items-start">
            <Text style={{fontSize: wp(7)}} className="flex-1 font-bold text-neutral-700">
                {item?.title}
            </Text>
            <Text style={{fontSize: wp(7), color: theme.text}} className="font-semibold">
                #{item?.price}
            </Text>
          </View>
          <Text style={{fontSize: wp(3.7)}} className="text-neutral-700 tracking-wide mb-2">{item?.longDescription}</Text>
          <View className="flex-row justify-between mx-1">
            <View className="flex-row space-x-2 items-start">
              <ClockIcon size={wp(7)} color="skyblue" />
              <View className="flex space-y-2"> 
                <Text style={{fontSize: wp(4.5)}} className="font-bold text-neutral-700">{item.duration}</Text>
                <Text className="text-neutral-600 tracking-wide">Duration</Text>
              </View>
            </View>

            <View className="flex-row space-x-2 items-start">
              <MapPinIcon size={wp(7)} color="#f87171" />
              <View className="flex space-y-2"> 
                <Text style={{fontSize: wp(4.5)}} className="font-bold text-neutral-700">{item.distance}</Text>
                <Text className="text-neutral-600 tracking-wide">Distance</Text>
              </View>
            </View>

            <View className="flex-row space-x-2 items-start">
              <SunIcon size={wp(7)} color="orange" />
              <View className="flex space-y-2"> 
                <Text style={{fontSize: wp(4.5)}} className="font-bold text-neutral-700">{item.weather}</Text>
                <Text className="text-neutral-600 tracking-wide">Sunny</Text>
              </View>
            </View>
          </View>
        </ScrollView>
        <TouchableOpacity style={{backgroundColor: theme.bg(0.7), height: wp(15), width: wp(50)}} className="mb-6 mx-auto flex justify-center items-center rounded-full ">
          <Text className="text-white font-bold" style={{fontSize: wp(5.5)}}>Book Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}