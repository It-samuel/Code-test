import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';



const Profile = ({route}) => {

  const { firstName, lastName, name, phoneNumber } = route.params;
  return (
    <View  style={styles.container}>
        
      <View style={styles.info}>
      <View style={styles.image}>
        <Ionicons name="person-circle-outline" size={90} color="white"  />
        </View>
        <View style={{alignItems:'center', justifyContent:'center',bottom:30 }}>
      <Text style={{fontSize:15, fontWeight:'bold'}}>{firstName ? <Text>{firstName}</Text> : null}{` `}
      {lastName ? <Text>{lastName}</Text> : null}{` `}
      {name ? <Text>{name}</Text> : null}{` `}
      </Text>
      {phoneNumber ? <Text>{phoneNumber}</Text> : null}
      
    </View>
        <View style={{flexDirection:'row', justifyContent:'space-evenly', marginTop:10}}>
            <TouchableOpacity style={styles.buttons}>
            <FontAwesome5 name="phone-alt" size={24} color="white" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttons}>
            <AntDesign name="message1" size={24} color="white" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttons}>
            <MaterialCommunityIcons name="video-account" size={35} color="white"  />
            </TouchableOpacity>
        </View>
        
        <Text style={styles.calls}>Call logs</Text>
        <ScrollView style={{marginBottom:20}}>
        <View style={styles.logs}>
        <View ><MaterialCommunityIcons name="phone-incoming" size={24} color="black" /></View>
        <Text>Incoming Call</Text>
        <Text>April 04, 03:37 PM</Text>
      </View>

      <View style={styles.logs}>
        <View ><MaterialIcons name="phone-missed" size={24} color="black" /></View>
        <Text>Missed Call</Text>
        <Text>April 04, 03:37 PM</Text>
      </View>

      <View style={styles.logs}>
        <View ><MaterialCommunityIcons name="phone-incoming" size={24} color="black" /></View>
        <Text>Incoming Call</Text>
        <Text>April 04, 03:37 PM</Text>
        </View>

        <View style={styles.logs}>
        <View ><MaterialCommunityIcons name="phone-incoming" size={24} color="black" /></View>
        <Text>Incoming Call</Text>
        <Text>April 04, 03:37 PM</Text>
      </View>

      <View style={styles.logs}>
        <View ><MaterialCommunityIcons name="phone-outgoing" size={24} color="black" /></View>
        <Text>Outgoing Call</Text>
        <Text>April 04, 03:37 PM</Text>
      </View>

      <View style={styles.logs}>
        <View ><MaterialCommunityIcons name="phone-outgoing" size={24} color="black" /></View>
        <Text>Outgoing Call</Text>
        <Text>April 04, 03:37 PM</Text>

        </View><View style={styles.logs}>
        <View ><MaterialCommunityIcons name="phone-outgoing" size={24} color="black" /></View>
        <Text>Outgoing Call</Text>
        <Text>April 04, 03:37 PM</Text>

        </View><View style={styles.logs}>
        <View ><MaterialCommunityIcons name="phone-outgoing" size={24} color="black" /></View>
        <Text>Outgoing Call</Text>
        <Text>April 04, 03:37 PM</Text>



      </View><View style={styles.logs}>
        <View ><MaterialCommunityIcons name="phone-outgoing" size={24} color="black" /></View>
        <Text>Outgoing Call</Text>
        <Text>April 04, 03:37 PM</Text>

      </View><View style={styles.logs}>
        <View ><MaterialCommunityIcons name="phone-outgoing" size={24} color="black" /></View>
        <Text>Outgoing Call</Text>
        <Text>April 04, 03:37 PM</Text>
      </View>

      <View style={styles.logs}>
        <View ><MaterialCommunityIcons name="phone-incoming" size={24} color="black" /></View>
        <Text>Incoming Call</Text>
        <Text>April 04, 03:37 PM</Text>
      </View>

      <View style={styles.logs}>
        <View ><MaterialIcons name="phone-missed" size={24} color="black" /></View>
        <Text>Missed Call</Text>
        <Text>April 04, 03:37 PM</Text>
      </View>
        </ScrollView>
      

      
      </View>
      
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#051fb0',
        
        flex:1,
        marginTop:'8%'
    },
    info:{
        width:"100%",
        height:"100%",
        marginTop:100,
        backgroundColor:'white',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
    },
    image:{
        height:150,
        width:150,
        borderRadius:90,
        backgroundColor:'#051fb0',
        alignSelf:"center",
        justifyContent:'center',
        borderWidth:4,
        borderColor:'white',
        alignItems:'center',
        top:-50
        

    },
    buttons:{
        backgroundColor:"#051fb0",
        height:50,
        width:60,
        borderRadius:30,
        alignItems:"center",
        justifyContent:'center'
    },
    calls:{
        marginTop:15,
        fontSize:18,
        margin:15
    },
    logs:{
        justifyContent:'space-evenly',
        flexDirection:'row',
        opacity:0.6,
        margin:10
    }
})