import { useRef, useMemo } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import { FontAwesome5, Fontisto } from '@expo/vector-icons';
import orders from '../../../assets/data/orders.json';

import { GestureHandlerRootView } from 'react-native-gesture-handler';

const order = orders[0];

const OrderDelivery = () => {
  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ['12%', '95%'], []);

  return (
    <GestureHandlerRootView style={{ backgroundColor: 'lightblue', flex: 1 }}>
      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={snapPoints}
        handleIndicatorStyle={{ backgroundColor: 'grey', width: 100 }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 10,
            marginBottom: 30,
          }}
        >
          <Text style={{ fontSize: 25, letterSpacing: 1 }}>14 min</Text>
          <FontAwesome5
            name="shopping-bag"
            size={30}
            color="#3FC060"
            style={{ marginHorizontal: 10 }}
          />
          <Text style={{ fontSize: 25, letterSpacing: 1 }}>5 km</Text>
        </View>
        <View style={{ paddingHorizontal: 20 }}>
          <Text style={{ fontSize: 25, letterSpacing: 1, paddingVertical: 20 }}>
            {order.Restaurant.name}
          </Text>
          <View style={{ flexDirection: 'row', marginBottom: 20 }}>
            <Fontisto name="shopping-store" size={22} color="gray" />
            <Text
              style={{
                fontSize: 20,
                color: 'gray',
                fontWeight: '600',
                letterSpacing: 1,
                marginLeft: 15,
                textAlign: 'center',
              }}
            >
              {order.Restaurant.address}
            </Text>
          </View>
          <View style={{ flexDirection: 'row', marginBottom: 20 }}>
            <Fontisto name="map-marker-alt" size={30} color="gray" />
            <Text
              style={{
                fontSize: 20,
                color: 'gray',
                fontWeight: '500',
                letterSpacing: 1,
                marginLeft: 15,
                textAlign: 'center',
              }}
            >
              {order.User.address}
            </Text>
          </View>

          <View
            style={{
              borderTopWidth: 1,
              borderColor: 'lightgrey',
              paddingTop: 20,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                color: 'gray',
                fontWeight: '500',
                letterSpacing: 0.5,
                marginBottom: 5,
              }}
            >
              Onion Rings x1
            </Text>
            <Text
              style={{
                fontSize: 18,
                color: 'gray',
                fontWeight: '500',
                letterSpacing: 0.5,
                marginBottom: 5,
              }}
            >
              Big Mac x2
            </Text>
            <Text
              style={{
                fontSize: 18,
                color: 'gray',
                fontWeight: '500',
                letterSpacing: 0.5,
                marginBottom: 5,
              }}
            >
              Cheese Burger x2
            </Text>
            <Text
              style={{
                fontSize: 18,
                color: 'gray',
                fontWeight: '500',
                letterSpacing: 0.5,
                marginBottom: 5,
              }}
            >
              Coca-Cola x1
            </Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: '#3FC060',
            marginTop: 'auto',
            marginHorizontal: 10,
            marginVertical: 30,
            borderRadius: 10,
          }}
        >
          <Text
            style={{
              color: 'white',
              paddingVertical: 15,
              fontSize: 25,
              fontWeight: '500',
              textAlign: 'center',
              letterSpacing: 1,
            }}
          >
            Accept Order
          </Text>
        </View>
      </BottomSheet>
    </GestureHandlerRootView>
  );
};

// const styles = StyleSheet.create({});

export default OrderDelivery;
