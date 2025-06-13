import styles from './index.js';
import { View, SafeAreaView, StatusBar, Image, Text, Dimensions } from 'react-native';
import carrossel from '../../../carrossel_data.js';
import React from 'react';
import Carousel from 'react-native-snap-carousel';

const { width: screenWidth } = Dimensions.get('window');

const Item = ({ item }) => {
    return (
        <View style={{ width: 300, height: 200, marginHorizontal: 10 }}>
            <Image source={{ uri: item.image }} style={{ width: '100%', height: '100%' }} />
        </View>
    );
};

const Carrossel = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.carouselContainer}>
                <StatusBar barStyle={"dark-content"}
                    translucent={true}
                    backgroundColor={"transparent"} />

                <Text style={styles.bannerText}>Banner</Text>

                <Carousel
                    data={carrossel}
                    renderItem={Item}
                    sliderWidth={screenWidth}
                    itemWidth={300}
                    inactiveSlideScale={0.95}
                    inactiveSlideOpacity={0.7}
                    enableMomentum={true}
                    activeSlideAlignment={'start'}
                    activeAnimationType={'spring'}
                />

            </View>
        </SafeAreaView>
    );
}
export default Carrossel;

