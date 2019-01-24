import React, { Component } from 'react';
import { Container, View,Header, Content, Button,Text } from 'native-base';
import { Image } from 'react-native';



 export default class MenuSamping extends Component {
 	 
 	render(){
 		
 		return(

 	 <Container>
        <Content>
        <View style={{margin:20 ,paddingTop:50}}>
            <View style={{alignItems: 'center'}}>
              <Image source={require('gudanggambar/src/components/reactnative.png')} 
                    style={{height:150, width:150}}/>
            </View>
        	<View style={{marginBottom:10}}>
        	<Text style={{fontWeight:'bold',textAlign: 'center',}}>Aplikasi Gudang Gambar adalah Aplikasi Kumpulan gambar yang bisa di
        	download dengan API Pixabay.com</Text>
        	
        	</View>
        	<View>
        	<Text style={{textAlign: 'center'}}>Aplikasi ini dibuat untuk Tugas Akhir Mobile Aplication II</Text>
            <View style={{marginTop:10}}>
        	<Text style={{textAlign: 'center'}}>Anggota Kelompok :</Text>
            </View>
            <View style={{alignItems:'center'}}>
        	<Text>Muhamad Sujud Pamungkas (16.240.0003)</Text>
        	<Text>Saiful Ampri (16.240.0071)</Text>
        	<Text>Maharani Pitaloka (16.240.0080)</Text>
        	<Text>Noor Eva Kartika S (16.240.0090)</Text>
            </View>
        	</View>
        	<View style={{marginTop:10}}>
        	<Text style={{textAlign: 'center'}}>Kelas : 5P42A</Text> 
        	<Text style={{textAlign: 'center'}}>STMIK WIDYA PRATAMA PEKALONGAN</Text>
        	</View>

        </View>
        </Content>
      </Container>
)
 };
}