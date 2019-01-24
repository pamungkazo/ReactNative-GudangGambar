import React, { Component } from 'react'
import {View, TextInput, Image, FlatList, TouchableOpacity } from 'react-native'
import { Drawer, Container, Header,Input, Content, Card, Item, 
        CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';

import axios from 'axios'

export default class Tipegambar extends Component {
	constructor() {
		super()
		this.state = {
			data: [],
			webformatURL:'',
			tipe:''
		}
	}


	componentDidMount(){
		axios({
			method: 'GET',
			url: 'https://pixabay.com/api/?key=7528484-47ecdc7e30a3217e3ce3d8530&image_type='+this.props.navigation.getParam('tipe')+'&pretty=true'
		}).then((response) => {
			this.setState({data:response.data.hits})
		}).catch(error => {
			console.log(error)
		})
		
	}

	render() {
		const { navigate } = this.props.navigation
		return(
		<Container>
		<Header>
		<Body>
			<Text style={{color:'white'}}>Tipe Gambar : {this.props.navigation.getParam('tipe')}</Text>
		</Body>
        </Header>
        <Content padder>
        <FlatList
       
				data={this.state.data}
				renderItem={({item, index}) =>
        <View style={{marginBottom:20, padding:10}} >
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'Image URL'}} />
                <Text>From</Text>
                <Body>
                  <Text>{item.user}</Text>
                  <Text note>{item.tags}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: item.webformatURL}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button  onPress={() => navigate('Detailgambar',{webformatURL:item.webformatURL})}>
                  <Text>Lihat Gambar</Text>
                </Button>
              </Left>
             
                <Right>
                <Text>Like {item.likes}  View {item.views}</Text>
               
                </Right>
            </CardItem>
          </Card>
          </View>
          } />

        </Content>
      </Container>
			)
	}
}