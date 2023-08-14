import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native'
import React from 'react'
import tw from "twrnc"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import {theme } from "../theme"
import { categoriesData } from '../constants'


export default function Categories() {
  return (
    <View style={tw`gap-y-5`}>
     <View style={tw`mx-5 flex-row justify-between items-center`}>
      <Text style={[tw`font-semibold text-neutral-700 `, {fontSize: wp(4)}]} >Categories</Text>
      <TouchableOpacity>
        <Text style={{fontSize: wp(4), color: theme.text}}>See all</Text>
      </TouchableOpacity>
     </View>
     <ScrollView
      horizontal
      contentContainerStyle={{paddingHorizontal:15}}
      style={tw`gap-x-4`}
      showsHorizontalScrollIndicator={false}
     >
        {
          categoriesData.map((cat, index) => {
            return (
              <TouchableOpacity key={index} style={tw` items-center px-2`}>
                  <Image source={cat.image} style={[tw`rounded-3xl`, {width: wp(20), height: wp(19)}]} />
                  <Text style={[tw`text-neutral-700 font-medium`, {fontSize: wp(3)}]} >{cat.title}</Text>
              </TouchableOpacity>
            )
          })
        }
     </ScrollView>
    </View>
  )
}