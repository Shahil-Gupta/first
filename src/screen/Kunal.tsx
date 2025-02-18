import {useState} from 'react';

import {
  Image,
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const kunal = () => {
  const [modalVisible, setModalVisible] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      {/* success Message */}
      <View style={styles.successBanner}>
        <Text style={styles.successText}>Success</Text>
        <Text>Service Deleted Successfully</Text>
      </View>
      <View style={styles.brandingSection}>
        <Text style={styles.brandingText}>
          Current no one have upload there Branding images
        </Text>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>Add your services</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity style={styles.btnItem1}>
          <Text style={styles.btnItemText1}>Facial & Clean Up</Text>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/128/8495/8495922.png',
            }}
            style={styles.facialicon}
          />
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/128/2609/2609205.png',
            }}
            style={styles.upwordicon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnItem2}>
          <Text style={styles.btnItemText1}>Makeup</Text>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/128/3163/3163173.png',
            }}
            style={styles.makeupicon}
          />
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/128/2609/2609205.png',
            }}
            style={styles.upwordicon}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnItem2}>
          <Text style={styles.btnItemText1}>Bridal Makeup</Text>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/128/828/828437.png',
            }}
            style={styles.bridalmakeup}
          />

          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/128/2609/2609205.png',
            }}
            style={styles.upwordicon}
          />
        </TouchableOpacity>
      </View>
      <Modal visible={modalVisible} transparent animationType="fade">
        <View style={styles.modalBackground}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Bridal Makeup</Text>
            <Text style={styles.amount}>₹100</Text>
            <Image
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/128/1827/1827933.png',
              }}
              style={styles.edit}
            />
            <Text style={styles.makeupText}>Dewy makeup</Text>
            <Text style={styles.makeupText2}>sahi hai</Text>
            <Text style={styles.modalText}>Prime</Text>
            <TouchableOpacity style={styles.btnItem3}>
              <Text style={styles.textbtn}>View service image</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      {/* navigation */}
      <View>
        <Text style={styles.hometext}>Home </Text>

        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/128/25/25694.png',
          }}
          style={styles.homeicon}
        />
        <Text style={styles.servicetext}>Service Calender</Text>
        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/128/3827/3827362.png',
          }}
          style={styles.serviceicon}
        />
        <Text style={styles.brandtext}>Brand</Text>
        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/128/4064/4064205.png',
          }}
          style={styles.brandicon}
        />
        <Text style={styles.accountext}>Account</Text>
        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/128/1077/1077114.png',
          }}
          style={styles.accounticon}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems:"center",
    // justifyContent:"center",
    // backgroundColor:"red"
  },
  successBanner: {backgroundColor: 'green', padding: 10, alignItems: 'center'},
  successText: {color: 'white', fontSize: 18, fontWeight: 'bold'},
  brandingSection: {padding: 15, alignItems: 'center'},
  brandingText: {
    fontSize: 16,
    color: 'hsla(109, 91.80%, 42.90%, 0.89)',
    marginBottom: 10,
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: 'rgba(208, 12, 136, 0.88)',
    padding: 14,
    borderRadius: 10,
    width: '100%',
  },
  addButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
  },
  btnItem1: {
    backgroundColor: 'rgba(208, 12, 136, 0.88)',
    width: '92%',
    padding: 15,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 30,
  },
  btnItemText1: {color: 'white', fontWeight: 'bold', fontSize: 16},
  btnItem2: {
    backgroundColor: 'rgba(208, 12, 136, 0.88)',
    width: '92%',
    padding: 15,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 10,
  },
  modalBackground: {
    flex: 1,
    backgroundColor: "'#fff",
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 150,
  },
  modalContent: {
    width: 370,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    // alignItems: 'center',
    shadowRadius: 5,
    shadowOpacity: 0.2,
    shadowColor: '#000',
    elevation: 5,
    marginTop: 130,
  },
  modalTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#a2003b',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 10,
    color: '#c03b6e',
    fontWeight: 'bold',
  },
  makeupText: {
    fontSize: 16,
    marginBottom: 10,
    color: '#000',
    fontWeight: 'bold',
  },
  makeupText2: {
    fontSize: 14,
    marginBottom: 10,
    color: 'gray',
    fontWeight: 'bold',
  },
  btnItem3: {
    backgroundColor: 'rgba(208, 12, 136, 0.88)',
    width: '80%',
    padding: 15,
    borderRadius: 30,
    alignSelf: 'center',
    marginTop: 0,
  },
  textbtn: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    color: 'white',
  },
  homeicon: {
    width: 30,
    height: 30,
    position: 'absolute',
    top: 390,
    right: 346,
    color: 'gray',
  },
  serviceicon: {
    width: 30,
    height: 30,
    position: 'absolute',
    top: 390,
    right: 240,
    color: 'gray',
  },
  hometext: {
    position: 'absolute',
    right: 340,
    top: 420,
    fontSize: 12,
    fontWeight: 'bold',
    color: 'gray',
  },

  servicetext: {
    position: 'absolute',
    right: 210,
    top: 420,
    fontSize: 12,
    fontWeight: 'bold',
    color: 'gray',
  },
  brandicon: {
    width: 30,
    height: 30,
    position: 'absolute',
    top: 390,
    right: 135,
    // backgroundColor:"rgba(208, 12, 136, 0.88)",
  },
  brandtext: {
    position: 'absolute',
    right: 135,
    top: 420,
    fontSize: 12,
    fontWeight: 'bold',
    color: 'gray',
  },
  accounticon: {
    width: 30,
    height: 30,
    position: 'absolute',
    top: 390,
    right: 35,
  },
  accountext: {
    position: 'absolute',
    right: 30,
    top: 420,
    fontSize: 12,
    fontWeight: 'bold',
    color: 'gray',
  },

  upwordicon: {
    // alignSelf:"flex-end",
    borderRadius: 20,
    height: 20,
    width: 20,
    marginLeft: 200,
    backgroundColor: 'white',
    position: 'absolute',
    right: 20,
    top: 10,
  },

  facialicon: {
    borderRadius: 20,
    height: 43,
    width: 40,
    // marginLeft:20,
    // backgroundColor:"white",
    position: 'absolute',
    right: 200,
    top: 10,
    color: 'rgba(208, 12, 136, 0.88',
  },
  makeupicon: {
    borderRadius: 20,
    height: 43,
    width: 40,
    // marginLeft:20,
    // backgroundColor:"white",
    position: 'absolute',
    right: 260,
    top: 7,
    color: 'rgba(208, 12, 136, 0.88',
  },
  bridalmakeup: {
    borderRadius: 20,
    height: 43,
    width: 40,
    // marginLeft:20,
    // backgroundColor:"white",
    position: 'absolute',
    right: 220,
    top: 7,
    color: 'rgba(208, 12, 136, 0.88',
  },
  amount: {
    position: 'absolute',
    top: 15,
    right: 70,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'gray',
  },
  edit: {
    position: 'absolute',
    top: 10,
    right: 30,
    width: 30,
    height: 30,
  },
});

export default kunal;