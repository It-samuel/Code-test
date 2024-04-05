import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native'
import React,{useState} from 'react'
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import { addContact } from '../Components/contactSlice';
import { v4 as uuidv4 } from 'uuid';


let nextId = 1;
const AddContacts = ({navigation}) => {

    const dispatch = useDispatch(); // Define dispatch

  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');


const handleSave = () => {
    const id = nextId++;
    // Dispatch action to add the contact
    dispatch(addContact({id, name, phoneNumber, email, address }));
    // Navigate back to the contact screen
    navigation.navigate('ContactScreen');
  };
  return (
    <View style={styles.container}>
        <View style={{flexDirection:'row', alignItems:'center', marginTop:20}}>
        <TouchableOpacity style={{marginLeft:10}} onPress={() => navigation.navigate('ContactScreen')} activeOpacity={0.5}
        ><AntDesign name="arrowleft" size={30} color="white" /></TouchableOpacity>
        <Text style={styles.text}>New Contact</Text>
        </View>
      {/* view for contact photo and edit */}
        <View style={styles.image}>
        <Ionicons name="person-circle-outline" size={90} color="white"  />
        <TouchableOpacity style={styles.pen} activeOpacity={0.4}>
        <FontAwesome5 name="pen" size={14} color="white" />
        </TouchableOpacity>
        
        </View>
        {/* section for inputting contact details  */}
        <View style={styles.form}>
        <View style={styles.textinput}> 
        <Ionicons name="person-circle-outline" size={24} color="#051fb0"  />
        <TextInput placeholder='Name' style={{fontWeight:'600', padding:10}}
         value={name} 
         onChangeText={setName}  />
        </View>

        <View style={styles.textinput}> 
        <Feather name="phone" size={24} color="#051fb0" />
        <TextInput placeholder='+233-5628-773-434' style={{fontWeight:'600', padding:10}} 
         value={phoneNumber} 
         onChangeText={setPhoneNumber} />
        </View>

        <View style={styles.textinput}> 
        <Fontisto name="email" size={24} color="#051fb0" />
        <TextInput placeholder='Email' style={{fontWeight:'600', padding:10}} />
        </View>

        <View style={styles.textinput}> 
        <SimpleLineIcons name="location-pin" size={24} color="#051fb0" />
        <TextInput placeholder='Address' style={{fontWeight:'600', padding:10}} />
        </View>
        {/*  Action buttons*/}
        <View style={styles.btns}>
            <TouchableOpacity style={styles.CancelButton} activeOpacity={0.4}
            onPress={() => navigation.navigate('ContactScreen')}>
                <Text style={{color:'#051fb0',fontSize:18,fontWeight:'bold',padding:8}}>
                    Cancel
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.ConfirmButton} activeOpacity={0.4} onPress={handleSave}>
                <Text style={{color:'white',fontSize:18,fontWeight:'bold',padding:8}}>
                    Save
                </Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default AddContacts

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#051fb0',
        marginTop: "8%",
        
    },
    text:{
        color:'white',
        fontSize:24,
        fontWeight:'500',
        marginLeft:15,
        
    },
    image:{
        height:150,
        width:150,
        borderRadius:90,
        padding:10,
        backgroundColor:'fff',
        alignSelf:"center",
        justifyContent:'center',
        borderWidth:4,
        borderColor:'white',
        alignItems:'center',
        marginTop:30

    },
    pen:{
        position:'absolute',
        bottom:10,
        left:110,
        height:30,
        width:30,
        backgroundColor:"#051fb0",
        alignItems:'center',
        justifyContent:'center',
        borderColor:'white',
        borderWidth:1,
        borderRadius:30
    },
    form:{
        backgroundColor:'white',
        width:"100%",
        height:"100%",
        marginTop:40,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
    },
    textinput:{
        borderBottomWidth:1,
        height:35,
        width:300,
        marginHorizontal:25,
        borderColor:'#051fb0',
        alignSelf:'center',
        marginTop:35,
        flexDirection:'row'
    },
    btns:{
        flexDirection:'row', 
        justifyContent:'space-around',
        marginTop:50
    },
    CancelButton:{
        height:40,
        width:120,
        borderRadius:30,
        borderWidth:1,
        borderColor:'#051fb0',
        alignItems:'center',
        justifyContent:'center'
    },
    ConfirmButton:{
        height:40,
        width:120,
        borderRadius:30,
        borderWidth:1,
        borderColor:'#051fb0',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:"#051fb0"
    }
})