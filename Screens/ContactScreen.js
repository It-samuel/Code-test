import { StyleSheet, Text, TextInput, TouchableOpacity, View,ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContactsFromApi } from '../Components/contactSlice';
import { FontAwesome5 } from '@expo/vector-icons';
import { deleteContact } from '../Components/contactSlice';
import { searchContacts } from '../Components/contactSlice';


const ContactScreen = ({ navigation, contact }) => {
  const dispatch = useDispatch();
  const { contacts, loading, error } = useSelector((state) => state.contacts);
  const [contactList, setContactList] = useState(contacts);
  const [searchQuery, setSearchQuery] = useState('');


  const handleDelete = (id) => {
    // Dispatch the delete action
    dispatch(deleteContact(id));
  };


  
    
    const handleSearch = (query) => {
      // Dispatch the search action
      dispatch(searchContacts(query));
      setSearchQuery(query); // Update the search query state
    };
  
  

  useEffect(() => {
    dispatch(fetchContactsFromApi());
  }, [dispatch]); 

  if (loading) {
    return <Text style={{alignSelf:'center', justifyContent:'center',marginTop:'50%'}}>Loading...</Text>;
  }

  if (error) {
    return <Text style={{alignSelf:'center', justifyContent:'center',marginTop:'50%'}}>Error: {error}</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.contacts}>Contacts</Text>
      <View style={styles.search}>
        <FontAwesome name="search" size={24} color="#d4d5d6" />
        <TextInput placeholder="search for contact" style={{ paddingLeft: 10 }} 
        value={searchQuery}
        onChangeText={handleSearch}/>
      </View>

      

      <View style={styles.scrollView}>
      <ScrollView>
      {contacts.map((item) => (
        <View key={item.id} style={styles.contactContainer}>
          {/* Contact details */}
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Profile', {
                firstName: item.firstName,
                lastName: item.lastName,
                name: item.name,
                phoneNumber: item.phoneNumber,
              })
            }
            style={styles.contactItem}
          >
            <View style={styles.contactDetails}>
              {item.firstName ? <Text>{item.firstName}</Text> : null}<Text>{`  `}</Text>
              {item.lastName ? <Text>{item.lastName}</Text> : null}
              {item.name ? <Text>{item.name}</Text> : null}
              
            </View>
            <View style={{flexDirection:'column'}}>{item.phoneNumber ? <Text style={{flexDirection:'column'}}>{item.phoneNumber}</Text> : null}</View>
          </TouchableOpacity>
          {/* Buttons */}
          <View style={styles.buttonsContainer}>
            {/* Call button (dummy) */}
            <TouchableOpacity style={styles.button}>
              <FontAwesome5 name="phone-alt" size={24} color="green" />
            </TouchableOpacity>
            {/* Delete button */}
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleDelete(item.id)}
            >
              <FontAwesome5 name="trash" size={24} color="red" />
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </ScrollView>
</View>

 {/* Floating button */}
 <View style={styles.floatingBtn}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('AddContacts')}
          activeOpacity={0.4}
        >
          <Octicons name="person-add" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ContactScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 15,
  },
  contacts: {
    fontSize: 20,
    marginLeft: 24,
    fontWeight: "500",
    marginTop: 20
  },
  search: {
    height: 36,
    paddingHorizontal: 18,
    borderWidth: 1,
    borderRadius: 10,
    marginHorizontal: 36,
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: "#f5f7f7",
    borderColor: "#fcf4fe"
  },
  button: {
    position: 'absolute',
    top:0, 
    right: 20, 
    backgroundColor: '#051fb0',
    elevation: 30,
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',

  },
  contactContainer:{
    justifyContent:'center',
    alignContent:'center'
  },
  contactItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  floatingBtn: {
    position: 'absolute',
    top:0, 
    right: 20, 
    backgroundColor: '#051fb0',
    elevation: 30,
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    top:'80%'
  },
  scrollView: {
    flex: 1,
    padding: 20, 
    
    
  },
  deleteButton:{
    marginLeft:15
  },
  contactContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
  },
  contactItem: {
    flex: 1,
  },
  contactDetails: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    marginHorizontal: 5,
  },
})
