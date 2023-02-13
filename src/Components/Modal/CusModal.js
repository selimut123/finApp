import React from 'react';
import { View, Text, Modal, TouchableOpacity } from "react-native";
import { styles } from "./style";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Form from "../../Components/Form/Form";

const CusModal = ({setShowModal, addFunc, showModal, isEdit, formValues}) => {
    return (
      <Modal
        transparent
        visible={showModal}
        animationType="fade"
        onRequestClose={setShowModal}
      >
        <View style={styles.backgroundContainer}>
          <View style={styles.boxContainer}>
            <View style={styles.row}>
              <Text style={styles.title}>{isEdit ? "EDIT" : "ADD"} SUBS</Text>
              <TouchableOpacity onPress={setShowModal}>
                <Icon name="close" size={25} />
              </TouchableOpacity>
            </View>
            <Form addFunc={addFunc} isEdit={isEdit} formValues={formValues} />
          </View>
        </View>
      </Modal>
    );
}

export default CusModal;
