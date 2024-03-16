import React, {useState} from 'react';
import {TouchableOpacity, Modal, View, Text} from 'react-native';
import {styles} from '../../styles';

const NavMenu = ({navigation}: any) => {
  const [modalVisible, setModalVisible] = useState(false);

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Text style={styles.headerButton}>☰</Text>
        </TouchableOpacity>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={closeModal}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Home');
                  closeModal();
                }}>
                <Text style={styles.modalText}>Home</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Details');
                  closeModal();
                }}>
                <Text style={styles.modalText}>Details</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Settings');
                  closeModal();
                }}>
                <Text style={styles.modalText}>Settings</Text>
              </TouchableOpacity>
              <View style={styles.modalButtonsContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Text style={styles.modalText}>Go Back</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={closeModal}>
                  <Text style={styles.modalText}>Close</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </>
  );
};

export default NavMenu;
