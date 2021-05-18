import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image} from 'react-native';
import {Audio} from 'expo-av'

export default class PhonicSoundButton extends React.Component{
    constructor(){
        super();
        this.state={
            pressedButtonIndex: ''
        }
    }

    playSound = async (soundChunk) => {
        console.log(soundChunk);
        var soundLink = "https://s3-whitehatjrcontent.whjr.online/phones/"+soundChunk+".mp3"
        await Audio.Sound.createAsync(
            {uri: soundLink},{shouldPlay: true}
        )
    }  
    
    render(){
        return(
            <View>
                <TouchableOpacity style = {this.state.pressedButtonIndex === this.props.buttonIndex
                        ?([styles.button,{backgroundColor: 'blue'}]):(styles.button)}
                    onPress={()=>{
                        this.setState({
                            pressedButtonIndex: this.props.buttonIndex,
                        })
                        this.playSound(this.props.soundChunk)
                    }}>
                    <Text style = {this.state.pressedButtonIndex === this.props.buttonIndex
                        ?([styles.buttonText,{color:'white'}]):(styles.buttonText)}>
                        {this.props.wordChunk}
                    </Text>
                </TouchableOpacity>
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
    },
    buttonText:{
        fontSize:20,
        textAlign:'center',
        fontWeight:'bold',
        color: 'black'
    },
  });
  