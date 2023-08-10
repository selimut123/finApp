import React from 'react';
import { View, Text, Modal, TouchableOpacity, ScrollView,TouchableWithoutFeedback } from "react-native";
import { styles } from "./style";
import { COLORS } from '../../../util/constant';

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Form from "../../Components/Form/Form";

const CusModal = ({setShowModal, addFunc, showModal, isEdit, formValues, title, isSubs}) => {
    return (
      <View>
        <Modal
          transparent
          visible={showModal}
          animationType="fade"
          onRequestClose={setShowModal}
        >
          <TouchableOpacity
            style={{
              height: "100%",
              padding: 40,
            }}
            activeOpacity={0}
            onPressOut={setShowModal}
          >
            <ScrollView
              directionalLockEnabled={true}
              contentContainerStyle={styles.scrollModal}
            >
              <TouchableWithoutFeedback>
                <View style={styles.boxContainer}>
                  <View style={styles.row}>
                    <Text style={styles.title}>{title}</Text>
                    <TouchableOpacity onPress={setShowModal}>
                      <Icon name="close" size={30} color={COLORS.white}/>
                    </TouchableOpacity>
                  </View>
                  <Form
                    addFunc={addFunc}
                    isEdit={isEdit}
                    formValues={formValues}
                    isSubs={isSubs}
                  />
                </View>
              </TouchableWithoutFeedback>
            </ScrollView>
          </TouchableOpacity>
        </Modal>
      </View>
    );
}

export default CusModal;
