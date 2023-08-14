import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import tw from "twrnc"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { LinearGradient } from "expo-linear-gradient"
import { useNavigation } from '@react-navigation/native'

export default function WelcomeScreen() {

   const navigation = useNavigation()

  return (
    <View style={tw `flex-1 flex justify-end`}>
      <Image
      source={require("../../assets/images/welcome.png")}
      style={tw `h-full w-full absolute`}
      />
      <View style={tw `p-5 pb-10 py-8`}>
        <LinearGradient
          colors={['transparent', 'rgba(3,105,161,0.8)']}
          style={[tw`absolute bottom-0`, {width: wp(100), height: hp(60)}]}
          start={{x: 0.5, y: 0}}
          end={{x: 0.5, y: 1}}
        />
        <View style={tw`py-3`}>
            <Text style={[tw`text-white font-bold text-5xl`, {fontSize: wp(10)}]} >Travelling made easy!</Text>
            <Text style={[tw`text-neutral-200 font-medium`, {fontSize: wp(4)}]}>Experience the world's best adventure around the world with us</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("Home")} style={tw`bg-orange-500 mx-auto  p-3 px-12 rounded-full`}>
          <Text style={[tw`text-white font-bold`, {fontSize: wp(5.5)}]}>Let's go</Text>
        </TouchableOpacity> 
      </View>
    </View>
  )
}