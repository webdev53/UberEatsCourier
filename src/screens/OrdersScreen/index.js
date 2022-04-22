import { useRef, useMemo } from 'react';
import { View, Text, FlatList } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import orders from '../../../assets/data/orders.json';
import OrderItem from '../../components/OrderListItem';

import { GestureHandlerRootView } from 'react-native-gesture-handler';

const OrdersScreen = () => {
  const bottomSheetRef = useRef(null);

  const snapPoints = useMemo(() => ['12%', '95%'], []);

  return (
    <GestureHandlerRootView style={{ backgroundColor: 'lightblue', flex: 1 }}>
      <BottomSheet ref={bottomSheetRef} snapPoints={snapPoints}>
        <View style={{ flex: 1, alignItems: 'center', marginBottom: 30 }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: '600',
              letterSpacing: 0.5,
              paddingBottom: 5,
            }}
          >
            You're Online
          </Text>
          <Text style={{ letterSpacing: 0.5, color: 'gray' }}>
            Available Orders: {orders.length}
          </Text>
        </View>
        <FlatList
          data={orders}
          renderItem={({ item }) => <OrderItem order={item} />}
        />
      </BottomSheet>
    </GestureHandlerRootView>
  );
};

export default OrdersScreen;
