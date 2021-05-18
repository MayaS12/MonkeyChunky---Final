import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Alert} from 'react-native';
import { Header } from 'react-native-elements';
import db from './localDB';
import PhonicSoundButton from './components/PhonicSoundButton'

export default class App extends React.Component{
  constructor(){
    super();
    this.state={
      text: '',
      displayText: '',
      chunks: [],
      phones: []
    }
  }

  render(){
    return(
      <View>
        <Header centerComponent = {{text: "Monkey Chunky!", 
        style:{color:"black", fontSize:20}}} 
        backgroundColor="skyblue">
         </Header>

        <Image source={{uri:"https://www.shareicon.net/data/128x128/2015/08/06/80805_face_512x512.png"}} 
        style={{width:100, height:100, alignSelf:'center'}}>

        </Image>

        <TextInput style={styles.textBox} 
        onChangeText={(input)=>{
          this.setState({
            text: input,
            chunks: []
          })
        }}>
        </TextInput>

        <TouchableOpacity style={styles.button} onPress={()=>{
          var word = this.state.text.toLowerCase();
          db[this.state.text]?(this.setState({
            chunks:db[this.state.text].chunks,
            phones:db[this.state.text].phones
          })):(alert('This word does not exist in our database'))
        }}>
          <Text style={{textAlign:"center", marginTop: 10}}>
            GO!
          </Text>
        </TouchableOpacity>
        <View>
          {this.state.chunks.map((value, index)=>{
            return(
              <PhonicSoundButton wordChunk = {this.state.chunks[index]} soundChunk = {this.state.phones[index]}
              buttonIndex = {index}/>
            )
          })}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textBox:{
    width: 200,
    height: 40,
    textAlign: 'center',
    borderWidth: 3,
    alignSelf:"center"
  },
  button:{
    width:100,
    height:40,
    alignSelf:'center',
    marginTop: 20,
    backgroundColor: 'lightpink',
    textAlign:'center',
  }
});
