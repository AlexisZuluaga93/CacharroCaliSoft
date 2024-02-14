import React from 'react';
import { StyleSheet, Text, View,Image, TextInput } from 'react-native';
import { RoundedButton } from './src/components/RoundedButton';
import { MyColors } from './src/theme/AppTheme';

export default function App() {
  return (
    <View  style={styles.container}>
        <Image
        source={require("./assets/backGroudImage.jpeg")}
        style={styles.background}
        />

        <View style={styles.logoContainer}>
          <Image
            source={require("./assets/logo.jpg")}
            style={styles.logo}
          />

        </View>
        <View style={styles.form}>
          <Text style={styles.formTxt}>INGRESAR</Text>
            <View style={styles.formInput}>
              <Image
                source={require("./assets/correo-electronico.png")}
                style={styles.imgInput}
              />
              <TextInput
                placeholder='Correo Electronico'
                style={styles.txtInput}
                keyboardType='email-address'
              />
            </View>

            <View style={styles.formInput}>
              <Image
                source={require("./assets/candado.png")}
                style={styles.imgInput}
              />
              <TextInput
                placeholder='Contraseña'
                style={styles.txtInput}
                secureTextEntry={true}
              />
            </View>
            <RoundedButton text='ENTRAR'/>
        </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"black"

  },
  background:{
    height:"100%",
    width:"100%",
    opacity:0.9

  },
  logoContainer:{
    position:"absolute",
    alignSelf:"center",
    top:"15%",
    
    
  },
  logo:{
    height:180,
    width:180,
    
    
  },

  form:{
    width:"100%",
    borderTopLeftRadius:40,
    borderTopRightRadius:40,
    height:"40%",
    backgroundColor:"white",
    position:"absolute",
    bottom:0,
    padding:30
  },
  formTxt:{
    fontWeight:"bold",
    fontSize:16,
    color:MyColors.fontColor

  },
  txtInput:{
    flex:1,
    borderBottomWidth:1,
    borderBottomColor:"#AAAAAA",
    marginLeft:15
  },
  formInput:{
    flexDirection:"row",
    marginTop:30,
  },
  imgInput:{
    height:25,
    width:25,
    marginTop:5,
    
    
    
    
  }
});
