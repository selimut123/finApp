import React from "react";
import { Modal, TouchableOpacity, ScrollView, Text, View, TouchableWithoutFeedback } from "react-native";
import { styles } from "./style";
import { COLORS } from "../../../util/constant";


const Picker = ({ setShowPicker, showPicker, options, setData }) => {
  const OPTIONS = options.map((val, index) => {
    return (
      <TouchableOpacity onPress={() => {setData(val);setShowPicker();}} key={index}>
        <View style={styles.textContainer}>
          <Text style={{fontSize: 18, color: COLORS.white}}>{val}</Text>
        </View>
      </TouchableOpacity>
    );
  });

  return (
    <View>
      <Modal
        transparent
        animationType="fade"
        visible={showPicker}
        onRequestClose={setShowPicker}
      >
        <TouchableOpacity
          style={{
            height: "100%",
            padding: 20,
          }}
          activeOpacity={0}
          onPressOut={setShowPicker}
        >
          <ScrollView
            directionalLockEnabled={true}
            contentContainerStyle={styles.scrollModal}
          >
            <TouchableWithoutFeedback>
                <View style={styles.container}>{OPTIONS}</View>
            </TouchableWithoutFeedback>
          </ScrollView>
        </TouchableOpacity> 
      </Modal>
    </View>
  );
};

export default Picker;