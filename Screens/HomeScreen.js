import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	SafeAreaView,
	Platform,
	StatusBar,
	Image,
	ScrollView,
	TextInput,
	Dimensions,
	Button,
	Alert,
	FlatList
} from 'react-native';
import LostItemCard from './LostItemCard';
import { RFValue } from 'react-native-responsive-fontsize';
export default class HomeScreen extends React.Component{
	constructor(props)
	{
	super(props);
	this.state = 
				{
					lostItems:[
						{ name: 'Keys', description: 'A bunch of keys'},
						{ name: 'Wallet', description: 'A black leather wallet'},
					]
				}
	}

	handleClaim = (item) => {
		// Implement claim logic here
		console.log('Claiming:', item);
	  };
    render() {
		return (
			<View style={styles.container}>
				<SafeAreaView style={styles.droidSafeArea} />
				<Text style={styles.heading}>Lost & Found App</Text>
				 <TextInput
				 	style= {styles.searchBox}
					placeholder={'search box'}/>
					<FlatList
						data={this.state.lostItems}
						renderItem={({ item }) => <LostItemCard item={item} onClaim={this.handleClaim} />}
						keyExtractor={(item, index) => index.toString()}
					/>
					<Image source={require("../assets/Magnifying.png")} style={styles.icon} />
					
			</View>
		);
	}

}
const styles = StyleSheet.create({
	container: {
		flex: 1,	
	},
	droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
	heading: {
		fontSize: 24,
		fontWeight: 'bold',
		marginBottom: 20,
		justifyContent:"center"
	  },
	searchBox:
	{
		width:300,
		height:50,
		borderRadius:20,
		backgroundColor:"grey",
		marginTop:20,
		fontSize:25,
		borderwidth:1
		

	},
	icon:
	{
		width: RFValue(40),
        height: RFValue(40),
        marginRight: RFValue(10),
	}
	

});
