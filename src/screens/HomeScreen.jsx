import { View, Text, ScrollView, Dimensions, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { FlatList } from 'react-native-gesture-handler';

const HomeScreen = () => {
  const [scrollX, setScrollX] = useState(0);
  const [showDetails, setShowDetails] = useState(false);

  const { width } = Dimensions.get("screen");
  const scrollWidth = width - 50;

  return (
    <View className="flex-1">
      {/* navbar */}
      <View className="w-full h-28 bg-blue-400 flex-row items-center">
        <Text className="w-10/12 text-center">erodk</Text>
        <View className="w-1/12 relative">
          <View className="w-2 h-2 rounded-full bg-red-500 absolute right-3 z-10" />
          <FontAwesome name="bell" size={23} color="white" />
        </View>
      </View>

      {/* main body */}
      <ScrollView className="p-3 w-full bg-black">
        <FlatList
          data={Array(3).fill(0)}
          onScroll={(e) => {
            setScrollX(e.nativeEvent.contentOffset.x)
          }}
          showsHorizontalScrollIndicator={false}
          horizontal
          snapToInterval={width - 50}
          style={{
            height: 220,
            padding: 5,
          }}

          renderItem={({ item, index }) => (
            <View className="h-48 bg-yellow-300 rounded-xl" style={{ width: width - 50 }} />
          )}
          ListFooterComponent={() => <View />}
          ListFooterComponentStyle={{ height: "100%", width: 10 }}
          ItemSeparatorComponent={() => <View className="h-full w-2 " />}
        />

        <View className="flex-row justify-center">
          {
            Array(3).fill(null)
              .map((_, i) => (
                (i === Math.round(scrollX / scrollWidth)) ?
                  <View key={i} className="w-3 h-3 rounded-full bg-blue-500 ml-2" />
                  :
                  <View key={i} className="w-3 h-3 rounded-full bg-blue-200 ml-2" />
              ))
          }
        </View>

        <View className="items-center">
          <View className="h-40 bg-yellow-300 rounded-xl mt-5" style={{ width: width - 50 }}>
            <View className={`w-full ${showDetails ? "h-8" : "h-full"} absolute bottom-0 rounded-bl-xl rounded-br-xl`} style={{ backgroundColor: "rgba(0,0,0,.2)" }}>

            </View>
            <TouchableOpacity
              className="bg-white w-10 h-10 rounded-full items-center justify-center absolute right-5 bottom-3"
              style={{ elevation: 5 }}
              onPress={() => setShowDetails(!showDetails)}
            >
              <FontAwesome name={showDetails ? "angle-down" : "angle-up"} size={26} />
            </TouchableOpacity>
          </View>
          <View className="h-40 bg-yellow-300 rounded-xl mt-5" style={{ width: width - 50 }}>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default HomeScreen;