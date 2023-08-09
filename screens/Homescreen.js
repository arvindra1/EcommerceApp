import React, { useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, TextInput, TouchableOpacity, DrawerLayoutAndroid } from 'react-native';
import { Icon } from 'react-native-elements';
import Card1 from '../components/Card';
import { ScrollView } from 'react-native';
import NavigationView from '../components/NavigationView';
import { product } from '../data';

function Homescreen() {
  // Drawer code
  const drawer = useRef(null);

  const openDrawer = () => {
    drawer.current.openDrawer();
  };
  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={250}
      drawerPosition={'left'}
      renderNavigationView={() => <NavigationView />}
    >

      <View style={{ flex: 1, justifyContent: 'flex-start', backgroundColor: '#ebe8e8' }}>
        <StatusBar style='light' />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ marginTop: 32, marginLeft: 16, marginRight: 16, flexDirection: 'column' }}>
            <View style={{ width: '100%', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
              <Icon onPress={openDrawer}
                size={22}
                containerStyle={{
                  width: 42,
                  height: 42,
                  borderRadius: 20,
                  backgroundColor: 'white',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                type='foundation'
                name='thumbnails'
              />
              <Image
                style={{ width: 42, height: 42, borderRadius: 20 }}
                source={require('../assets/profile.jpg')}
              />
            </View>
            <View>
              <Text style={{ fontSize: 26, marginTop: 19 }}>Match Your Style </Text>
              {/* SearchBar */}
              <TextInput
                style={{ height: 40, width: 332, borderRadius: 16, backgroundColor: 'white', marginTop: 22, paddingLeft: 20 }}
                placeholder='Type your username'
              />
              {/* SearchBar */}
            </View>

            {/* Filter */}
            <View style={{ justifyContent: 'space-between', alignItems: 'center', width: '100%', flexDirection: 'row', marginTop: 27 }}>
              <TouchableOpacity style={{ borderRadius: 14, backgroundColor: '#DF5F5F', fontSize: 14, fontWeight: '500', width: 156, height: 33, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: 'white', fontSize: 14, fontWeight: '500' }}>Trending Now</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ borderRadius: 14, backgroundColor: '#D0C6C6', fontSize: 14, fontWeight: '500', width: 67, height: 33, justifyContent: 'center', alignItems: 'center' }}>
                <Text>All</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ borderRadius: 14, backgroundColor: '#D0C6C6', fontSize: 14, fontWeight: '500', width: 67, height: 33, justifyContent: 'center', alignItems: 'center' }}>
                <Text>New</Text>
              </TouchableOpacity>
            </View>

            {/* Grid */}
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
              {product.map((item, key) => (
                <Card1 items={item} key={key} />
              ))}
            </View>
          </View>
        </ScrollView>
      </View>
    </DrawerLayoutAndroid>
  );
}

export default Homescreen;
