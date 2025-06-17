import styles from './index.js';
import { View, SafeAreaView, StatusBar, Image, Text, Dimensions } from 'react-native';
import Carrossa from '../../../carrossel_data.js';
import React from 'react';
import Carousel from 'react-native-reanimated-carousel';
import { renderItem } from "@/utils/render-item";
import * as React from "react";
import { View } from "react-native";
import { ICarouselInstance } from "react-native-reanimated-carousel";


const { width: screenWidth } = Dimensions.get('window');


function Carrossel() {
	const ref = React.useRef<ICarouselInstance>(null);
 
	return (
		<View
			id="carousel-component"
			dataSet={{ kind: "basic-layouts", name: "stack" }}
		>
			<Carousel
				ref={ref}
				autoPlayInterval={2000}
				data={defaultDataWith6Colors}
				height={220}
				loop={true}
				pagingEnabled={true}
				snapEnabled={true}
				width={430 * 0.75}
				style={{
					alignItems: "center",
					justifyContent: "center",
					width: "100%",
					height: 240,
				}}
				mode={"horizontal-stack"}
				modeConfig={{
					snapDirection: "left",
					stackInterval: 18,
				}}
				customConfig={() => ({ type: "positive", viewCount: 5 })}
				renderItem={renderItem({ rounded: true })}
			/>
		</View>
	);
}

export default Carrossel;

