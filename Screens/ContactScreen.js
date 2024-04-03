import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';

const ContactScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.contacts}>Contacts</Text>
      <View style={styles.search}>
      <FontAwesome name="search" size={24} color="#d4d5d6" />
      <TextInput placeholder="search for contact" style={{paddingLeft:10}} />
      </View>
      <View>
        <TouchableOpacity style={styles.button}>
        <Octicons name="person-add" size={24} color="white"  />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ContactScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop:15,
    },
    contacts:{
        fontSize:20,
        marginLeft:24,
        fontWeight: "500",
        marginTop:20
    },
    search:{
        height:36,
        paddingHorizontal:18,
        borderWidth:1,
        borderRadius:10, 
        marginHorizontal:36,
        marginTop:15,
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:"#f5f7f7",
        borderColor:"#fcf4fe"

    },
    button:{
        position:'absolute',
        bottom:-560,
        right:15,
        backgroundColor:'#051fb0',
        elevation:10,
        width:60,
        height:60,
        borderRadius:30,
        alignItems:'center',
        justifyContent:'center',
        
    }
})