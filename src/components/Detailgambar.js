import React, { Component } from 'react';
import { View, Image, FlatList,Alert, TouchableOpacity, AsyncStorage, Linking} 
 from 'react-native'
 import {Button,Text} from 'native-base'

export default class Detailgambar extends Component {
	constructor(){
		super()
		this.state = {
			data:[],
			webformatURL:''
		}
	}

	componentDidMount(){
		this.setState({
      webformatURL:this.props.navigation.getParam('webformatURL')})

		
  }



		

	render() {
		const { navigate } = this.props.navigation
		return(
			<View >
				<View>
				<Image 
       				style={{width: 500, height: 500}}
       				resizeMode="contain"
       				source={{ uri: this.state.webformatURL }}
    			/>
    			</View>
    			<View style={{marginLeft:10,marginRight:10}}>
    			 <Button  full rounded onPress={ ()=>{ Linking.openURL(this.state.webformatURL)}}><Text>Download</Text></Button>
				</View>
			</View>
			
		)
	}
}