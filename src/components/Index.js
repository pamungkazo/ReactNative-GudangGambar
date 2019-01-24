import React, { Component } from 'react';
import {  View, FlatList,Image, Alert, TouchableOpacity, AsyncStorage,ScrollView } 
 from 'react-native'
import { Drawer, Container, Header,Input, Content, Card, Item, 
        CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import SideBar from './MenuSamping';
import axios from 'axios'
export default class Index extends Component {
	constructor() {
    super()
    this.state = {
      data: [],
      data2: [],
      webformatURL:'',
      carigambar:'',
      tipe:'',
      kategori:''
    }
  }

	closeDrawer(){
      this._drawer._root.close()
    }
    openDrawer(){
      this._drawer._root.open()
    }
	

  componentDidMount(){
    axios({
      method: 'GET',
      url: 'https://pixabay.com/api/?key=7528484-47ecdc7e30a3217e3ce3d8530&order=popular&image_type=all&pretty=true'
    }).then((response) => {
      this.setState({data:response.data.hits})
    }).catch(error => {
      console.log(error)
    })

     axios({
      method: 'GET',
      url: 'https://pixabay.com/api/?key=7528484-47ecdc7e30a3217e3ce3d8530&order=latest&image_type=all&pretty=true'
    }).then((response) => {
      this.setState({data2:response.data.hits})
    }).catch(error => {
      console.log(error)
    })
    
  }

	render() {
		const { navigate } = this.props.navigation
		return(
			<Drawer
        		ref={(ref) => { this._drawer = ref; }}
        		content={<SideBar navigator={this._navigator} />}
        		onClose={() => this.closeDrawer()} >
        	<Container style={{padding:5}}>
        	<Header searchBar rounded>
          <View style={{marginTop:8,marginBottom:10,width:100,height:null}}>
          <Body>
          <Button light rounded style={{color:'white'}}><Text style={{color:'blue'}} onPress={()=> this.openDrawer()}>About</Text></Button>
          </Body>
          </View>
          <Item> 
            <Input placeholder="Search" 
                   onChangeText   ={(carigambar) => this.setState({carigambar})}/>
            <Button onPress={()=> navigate('Carigambar',{carigambar:this.state.carigambar})}><Text>Cari</Text></Button>
          </Item>
        </Header>
        <ScrollView>
          <Content style={{backgroundColor:'#F2F1EF'}}>

       <Card>
       <Text style={{fontWeight: 'bold'}}>Tipe Gambar</Text>

         <View style={{flex: 1, flexDirection: 'row',margin:5}}>

         <View style={{margin:2, flex:1}} >
         <TouchableOpacity onPress={()=>  navigate('Tipegambar',{tipe:'photo'})}>
          <Image source={{uri: 
            'http://www.jurnalweb.com/wp-content/uploads/2017/07/fotografi.jpg'}} 
          style={{height: 150, width: null,flex:1}}/>
          <Body>
          <Text>Foto</Text>
          </Body>
          </TouchableOpacity>
          </View>

          <View style={{margin:2,flex:1}}>
          <TouchableOpacity onPress={()=>  navigate('Tipegambar',{tipe:'illustration'})}>
          <Image source={{uri: 
            'https://cdn.dribbble.com/users/329207/screenshots/3761869/bemocs_rei_labor_day_dribbble.jpg'}} 
          style={{height: 150, width: null,flex:1}}/>
          <Body>
          <Text>Illustrasi</Text>
          </Body>
          </TouchableOpacity>
          </View>

          <View style={{margin:2,flex:1}}>
          <TouchableOpacity onPress={()=>  navigate('Tipegambar',{tipe:'vector'})}>
          <Image source={{uri: 'https://i.ytimg.com/vi/TM4SHUef3tQ/maxresdefault.jpg'}} 
          style={{height: 150, width: null,flex:1}}/>
          <Body>
          <Text>Vector</Text>
          </Body>
          </TouchableOpacity>
           </View> 


         </View>
  
       </Card>

      <Card>
      <Text style={{fontWeight: 'bold'}}>Kategori</Text>
      
      <View style={{flex: 1, flexDirection: 'row',margin:5}}>
      <ScrollView horizontal={true}>

         <View style={{margin:2}}>
         <TouchableOpacity onPress={()=>  navigate('Kategori',{kategori:'fashion'})}>
          <Image source={{uri: 
            'https://image.afcdn.com/story/20180108/-1141060_w767h767c1cx396cy260.jpg'}} 
          style={{height: 100, width: 100}}/>
          <Body>
          <Text>Fashion</Text>
          </Body>
          </TouchableOpacity>
          </View>

          <View style={{margin:2}}>
           <TouchableOpacity onPress={()=>  navigate('Kategori',{kategori:'nature'})}>
          <Image source={{uri: 
            'http://pmb.kampusku.online/assets/gambar/slider1537118403.jpg'}} 
          style={{height: 100, width: 100}}/>
          <Body>
          <Text>Nature</Text>
          </Body>
          </TouchableOpacity>
          </View>

          <View style={{margin:2}}>
           <TouchableOpacity onPress={()=>  navigate('Kategori',{kategori:'backgrounds'})}>
          <Image source={{uri: 
            'https://designshack.net/wp-content/uploads/best-watercolor-backgrounds.jpg'}} 
          style={{height: 100, width: 100}}/>
          <Body>
          <Text>Backgrounds</Text>
          </Body>
          </TouchableOpacity>
           </View>

           <View style={{margin:2}}>
            <TouchableOpacity onPress={()=>  navigate('Kategori',{kategori:'science'})}>
          <Image source={{uri: 
            'https://ichef.bbci.co.uk/childrens-responsive-ichef-live/r/640/1x/cbbc/science-onward-journey_v3.png'}} 
          style={{height: 100, width: 100}}/>
          <Body>
          <Text>Science</Text>
          </Body>
          </TouchableOpacity>
          </View>

          <View style={{margin:2}}>
           <TouchableOpacity onPress={()=>  navigate('Kategori',{kategori:'education'})}>
          <Image source={{uri: 
            'http://redsvn.net/wp-content/uploads/2018/11/politique-euro-formation-education-a387ed0502.jpg'}} 
          style={{height: 100, width: 100}}/>
          <Body>
          <Text>Education</Text>
          </Body>
          </TouchableOpacity>
          </View>

          <View style={{margin:2}}>
           <TouchableOpacity onPress={()=>  navigate('Kategori',{kategori:'people'})}>
          <Image source={{uri: 
            'https://parade.com/wp-content/uploads/2018/02/city-crosswalk-people-busy-ftr.jpg'}} 
          style={{height: 100, width: 100}}/>
          <Body>
          <Text>People</Text>
          </Body>
          </TouchableOpacity>
           </View>

           <View style={{margin:2}}>
            <TouchableOpacity onPress={()=>  navigate('Kategori',{kategori:'feelings'})}>
           <Image source={{uri: 
            'https://a-static.besthdwallpaper.com/ring-of-love-wallpaper-9777_L.jpg'}} 
          style={{height: 100, width: 100}}/>
          <Body>
          <Text>Feelings</Text>
          </Body>
          </TouchableOpacity>
           </View>

           <View style={{margin:2}}>
          <TouchableOpacity onPress={()=>  navigate('Kategori',{kategori:'religion'})}>
          <Image source={{uri: 
            'https://media-cdn.tripadvisor.com/media/photo-s/0e/ac/f5/8a/al-fatih-mosque-great.jpg'}} 
          style={{height: 100, width: 100}}/>
          <Body>
          <Text>Religion</Text>
          </Body>
          </TouchableOpacity>
          </View>

          <View style={{margin:2}}>
           <TouchableOpacity onPress={()=>  navigate('Kategori',{kategori:'health'})}>
          <Image source={{uri: 
            'https://image.cermati.com/f_auto,q_70/cgqzvo4kxoltfitmjzvw'}} 
          style={{height: 100, width: 100}}/>
          <Body>
          <Text>Health</Text>
          </Body>
          </TouchableOpacity>
          </View>

          <View style={{margin:2}}>
           <TouchableOpacity onPress={()=>  navigate('Kategori',{kategori:'place'})}>
          <Image source={{uri: 
            'https://www.telegraph.co.uk/content/dam/Travel/Destinations/Europe/France/Paris/paris-vintage-car.jpg?'}} 
          style={{height: 100, width: 100}}/>
          <Body>
          <Text>Places</Text>
          </Body>
          </TouchableOpacity>
           </View>

           <View style={{margin:2}}>
         <TouchableOpacity onPress={()=>  navigate('Kategori',{kategori:'animals'})}>
          <Image source={{uri: 
            'https://www.swarnanews.co.id/wp-content/uploads/2017/12/Harimau-Sumatera-Panthera-Tigris-Sumatrae.jpg'}} 
          style={{height: 100, width: 100}}/>
          <Body>
          <Text>Animals</Text>
          </Body>
          </TouchableOpacity>
          </View>

          <View style={{margin:2}}>
           <TouchableOpacity onPress={()=>  navigate('Kategori',{kategori:'industry'})}>
          <Image source={{uri: 
            'https://s3.reutersmedia.net/resources/r/?m=02&d=20171114&t=2&i=1209765779&r=LYNXMPEDAD0RL&w=1280'}} 
          style={{height: 100, width: 100}}/>
          <Body>
          <Text>Industry</Text>
          </Body>
          </TouchableOpacity>
          </View>

          <View style={{margin:2}}>
           <TouchableOpacity onPress={()=>  navigate('Kategori',{kategori:'food'})}>
          <Image source={{uri: 
            'https://foodrevolution.org/wp-content/uploads/2018/04/blog-featured-diabetes-20180406-1330.jpg'}} 
          style={{height: 100, width: 100}}/>
          <Body>
          <Text>Food</Text>
          </Body>
          </TouchableOpacity>
           </View>

           <View style={{margin:2}}>
            <TouchableOpacity onPress={()=>  navigate('Kategori',{kategori:'computer'})}>
          <Image source={{uri: 
            'http://oradeamagazin.ro/wp-content/uploads/2015/02/computers.jpg'}} 
          style={{height: 100, width: 100}}/>
          <Body>
          <Text>Computer</Text>
          </Body>
          </TouchableOpacity>
          </View>

          <View style={{margin:2}}>
           <TouchableOpacity onPress={()=>  navigate('Kategori',{kategori:'sports'})}>
          <Image source={{uri: 
            'http://deafinitelyinclusive.co.uk/wp-content/uploads/sites/90/2018/01/sport-facilities-2.jpg'}} 
          style={{height: 100, width: 100}}/>
          <Body>
          <Text>Sports</Text>
          </Body>
          </TouchableOpacity>
          </View>

          <View style={{margin:2}}>
           <TouchableOpacity onPress={()=>  navigate('Kategori',{kategori:'transportation'})}>
          <Image source={{uri: 
            'https://images.hgmsites.net/lrg/ferrari-f60-america_100484801_l.jpg'}} 
          style={{height: 100, width: 100}}/>
          <Body>
          <Text>Transportation</Text>
          </Body>
          </TouchableOpacity>
           </View>

           <View style={{margin:2}}>
            <TouchableOpacity onPress={()=>  navigate('Kategori',{kategori:'travel'})}>
           <Image source={{uri: 
            'https://media-cdn.tripadvisor.com/media/photo-s/08/b7/50/9a/omega-travel-santorini.jpg'}} 
          style={{height: 100, width: 100}}/>
          <Body>
          <Text>Travel</Text>
          </Body>
          </TouchableOpacity>
           </View>

           <View style={{margin:2}}>
          <TouchableOpacity onPress={()=>  navigate('Kategori',{kategori:'buildings'})}>
          <Image source={{uri: 
            'https://scontent-dfw5-1.cdninstagram.com/vp/46df20ad4f3453a2405f0d91b3376ffb/5CAF04D1/t51.2885-15/sh0.08/e35/c0.135.1080.1080/s640x640/43683277_1556651421101043_133310173246357108_n.jpg'}} 
          style={{height: 100, width: 100}}/>
          <Body>
          <Text>Buildings</Text>
          </Body>
          </TouchableOpacity>
          </View>

          <View style={{margin:2}}>
           <TouchableOpacity onPress={()=>  navigate('Kategori',{kategori:'business'})}>
          <Image source={{uri: 
            'https://s3.amazonaws.com/influencive.com/wp-content/uploads/2016/11/08185308/Depositphotos_22928632_m-2015.jpg'}} 
          style={{height: 100, width: 100}}/>
          <Body>
          <Text>Bussines</Text>
          </Body>
          </TouchableOpacity>
          </View>

          <View style={{margin:2}}>
           <TouchableOpacity onPress={()=>  navigate('Kategori',{kategori:'music'})}>
          <Image source={{uri: 
            'https://i.ytimg.com/vi/q9k_CwM8ez4/maxresdefault.jpg'}} 
          style={{height: 100, width: 100}}/>
          <Body>
          <Text>Music</Text>
          </Body>
          </TouchableOpacity>
           </View>  

           </ScrollView> 
         </View>
      </Card>

      <Card>
      <Text style={{fontWeight: 'bold'}}>Terpopular</Text>
      <FlatList
        horizontal={true}
        data={this.state.data}
        renderItem={({item, index}) =>
         <View style={{margin:5}}>
            <CardItem>
              <Right>
                <Text>From</Text>
                <Text>{item.user}</Text>
                <Text note>{item.tags}</Text> 
              </Right>
            </CardItem>
            <CardItem cardBody>
              <Left>
              <Image source={{uri: item.webformatURL}} style={{height: 200, width: null, flex:1}}/>
              </Left>
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
         </View>
         
          } />
      </Card>

      <Card>
      <Text style={{fontWeight: 'bold'}}>Terbaru</Text>
      <FlatList
        horizontal={true}
        data={this.state.data2}
        renderItem={({item, index}) =>
         <View style={{margin:5}}>
            <CardItem>
              <Right>
                <Text>From</Text>
                <Text>{item.user}</Text>
                <Text note>{item.tags}</Text> 
              </Right>
            </CardItem>
            <CardItem cardBody>
              <Left>
              <Image source={{uri: item.webformatURL}} style={{height: 200, width: null, flex:1}}/>
              </Left>
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
         </View>
         
          } />
      </Card>

     </Content>
     </ScrollView>
			</Container>
			</Drawer>
	
		)
	}
}