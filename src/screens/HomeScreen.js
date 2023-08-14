import { View, Text, SafeAreaView, Image } from 'react-native'
import React from 'react'
import tw from "twrnc"
import { ScrollView } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { TouchableOpacity } from 'react-native'
// import { MagnifyingGlassIcon } from "react-native-heroicons/outline"
import { MagnifyingGlassIcon } from 'react-native-heroicons/outline'
import { TextInput } from 'react-native'
import Categories from '../components/Categories'
import SortCategories from "../components/SortCategories"
import Destinations from '../components/Destinations'



// style={tw``}
const ios = Platform.OS=="ios";
const topMargin = ios? "mt-3": "mt-10"
export default function HomeScreen() {
  return (
    <SafeAreaView style={tw`flex-1 bg-white `} > 
      <ScrollView showsVerticalScrollIndicator={false} className={"space-y-6 "+topMargin} >
        <View style={tw`mx-5 flex-row justify-between items-center mb-10`} >
          <Text style={[tw`font-bold text-neutral-700`, {fontSize: wp(7)}]}>Let's Discover</Text>
          <TouchableOpacity>
            <Image source={require("../../assets/images/avatar.png")} style={{height: wp(12), width: wp(12)}} />
          </TouchableOpacity>
        </View>

        <View style={tw`mx-5 mb-4`} >
          <View style={tw`flex-row items-center bg-neutral-100 rounded-full p-4 gap-x-2 pl-6`}>
            <MagnifyingGlassIcon size={20} strokeWidth={3} color="gray" />
            <TextInput placeholder='Search Destination' placeholderTextColor={"gray"} style={tw`flex-1 text-base mb-1 pl-1 tracking-wide`} />
          </View>
        </View>

        <View style={tw`mb-4`}>
          <Categories />
        </View>

        <View style={tw`mb-4`}>
          <SortCategories />
        </View>

        <View >
          <Destinations />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}