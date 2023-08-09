import React, { useState } from 'react'
import { Text, View, TouchableOpacity, Image, Alert, ScrollView, Pressable } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { Icon, Card, Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';


function ProductDetails(props) {
    let product = props.route.params;
    const navigation = useNavigation();
    const [rang, setrang] = useState('');
    const [size, setsize] = useState('');

    return (
        <View style={{ flex: 1, justifyContent: 'flex-start', backgroundColor: '#ebe8e8' }}>
            <StatusBar style='light' />

            <View style={{ marginTop: 32, marginLeft: 16, marginRight: 16, flexDirection: 'column' }}>
                <View style={{ width: '100%', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
                    <Icon
                        size={22}
                        onPress={() => navigation.goBack()}
                        containerStyle={{
                            width: 42,
                            height: 42,
                            borderRadius: 20,
                            backgroundColor: 'white',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                        type='material'
                        name='chevron-left'
                    />
                    <Image
                        style={{ width: 42, height: 42, borderRadius: 20 }}
                        source={require('../assets/profile.jpg')}
                    />
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{ width: '100%' }}>
                        <Card
                            containerStyle={{ borderRadius: 20, height: 424, marginLeft: 0, marginRight: 0, padding: 0 }}

                        >

                            <Image
                                style={{ width: "100%", height: '100%', borderRadius: 20 }}
                                resizeMode="contain"
                                source={product.image}
                            />
                            {/* <Text>Pranshu Chittora</Text> */}

                        </Card>

                    </View>

                    <View style={{ width: '100%', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ fontSize: 15, fontWeight: 'bold' }} className="mt-2">{product.name}</Text>
                        <Text style={{ fontSize: 15, fontWeight: 'bold' }} className="mt-2">$ {product.price}</Text>
                    </View>
                    <View className="mt-2">
                        <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Size</Text>
                        <View className="justify-start flex-row items-center mt-2">

                            <Pressable className="      h-5 w-5  bg-white rounded-full " onPress={size == !'S' ? () => setsize('S') : rang}  ><Text style={{ fontSize: 15 }} >S</Text></Pressable>
                            <Pressable className=" ml-3     h-5 w-5 bg-white rounded-full " onPress={size == !'M' ? () => setsize('M') : rang}  ><Text style={{ fontSize: 15 }} >M</Text></Pressable>
                            <Pressable className=" ml-3   h-5 w-5 bg-white rounded-full " onPress={size == !'L' ? () => setsize('L') : rang}  ><Text style={{ fontSize: 15 }} >L</Text></Pressable>
                            <Pressable className=" ml-3     h-5 w-5 bg-white rounded-full " onPress={size == !'XL' ? () => setsize('XL') : rang}><Text style={{ fontSize: 15 }} >XL</Text></Pressable>
                        </View>

                    </View>
                    <View className="mt-2 mb-4">
                        <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Colour</Text>
                        <View className="justify-start flex-row  mt-1">
                            <Pressable onPress={rang == !'red' ? () => setrang('red') : rang}      ><Text style={{ backgroundColor: 'red' }} className="p-2        h-5 w-5  bg-white rounded-full"></Text></Pressable>
                            <Pressable onPress={rang == !'green' ? () => setrang('green') : rang}  ><Text style={{ backgroundColor: 'green' }} className="p-2 ml-3  h-5 w-5 bg-white rounded-full "></Text></Pressable>
                            <Pressable onPress={rang == !'blue' ? () => setrang('blue') : rang}    ><Text style={{ backgroundColor: 'blue' }} className="p-2 ml-3   h-5 w-5 bg-white rounded-full "></Text></Pressable>
                            <Pressable onPress={rang == !'purple' ? () => setrang('purple') : rang}><Text style={{ backgroundColor: 'purple' }} className="p-2 ml-3 h-5 w-5 bg-white rounded-full "></Text></Pressable>
                        </View>

                    </View>
                    <View>
                        <Button
                            containerStyle={{ margin: 5, marginBottom: 5, borderRadius: 20 }}
                            disabledStyle={{
                                borderWidth: 2,
                                borderColor: "#DF5F5F"
                            }}
                            buttonStyle={{ backgroundColor: '#DF5F5F' }}
                            disabledTitleStyle={{ color: "#00F" }}
                            linearGradientProps={null}
                            loadingProps={{ animating: true }}
                            loadingStyle={{}}
                            onPress={() => navigation.navigate("Cart")}
                            title="ADD TO CART"
                            titleProps={{}}
                        />
                    </View>

                </ScrollView>

            </View>


        </View>
    )
}

export default ProductDetails
