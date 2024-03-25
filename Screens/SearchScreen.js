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
} from 'react-native';
export default class HomeScreen extends React.Component{
    render() {
		return (
			<View style={styles.container}>
				<Text>SearchScreen</Text>
			</View>
		);
	}

}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
