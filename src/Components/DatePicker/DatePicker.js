import React, {useState} from "react";
import {
  Modal,
  TouchableOpacity,
  ScrollView,
  Text,
  View,
  TouchableWithoutFeedback,
} from "react-native";
import { styles } from "./style";
import ModernDatePicker from "react-native-modern-datepicker";
import { getFormatedDate } from "react-native-modern-datepicker";
import { COLORS } from "../../../util/constant";

const DatePicker = ({showDatePicker, setShowDatePicker, setData, val}) => {
  const today = new Date();
  const startDate = getFormatedDate(
    today.setDate(today.getDate()),
    "YYYY/MM/DD"
  );
  
  const [selectedStartDate, setSelectedStartDate] = useState("");

return (
  <View>
    <Modal
      transparent
      animationType="fade"
      visible={showDatePicker}
      onRequestClose={setShowDatePicker}
    >
      <TouchableOpacity
        style={{
          height: "100%",
          padding: 20,
        }}
        activeOpacity={0}
        onPressOut={setShowDatePicker}
      >
        <ScrollView
          directionalLockEnabled={true}
          contentContainerStyle={styles.scrollModal}
        >
          <TouchableWithoutFeedback>
            <View style={styles.container}>
              <ModernDatePicker
                mode="calendar"
                minimumDate={startDate}
                onSelectedChange={(date) => {
                  setSelectedStartDate(date);
                }}
                options={{
                  backgroundColor: COLORS.background,
                  textHeaderColor: COLORS.primary,
                  textDefaultColor: COLORS.white,
                  selectedTextColor: COLORS.white,
                  mainColor: COLORS.primary,
                  textSecondaryColor: COLORS.white,
                  borderColor: COLORS.grey,
                }}
              />
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  onPress={() => {
                    setShowDatePicker();
                  }}
                >
                  <View style={styles.button}>
                    <Text
                      style={{
                        color: COLORS.primary,
                        textAlign: "center",
                        fontSize: 18,
                      }}
                    >
                      Cancel
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setData(selectedStartDate);
                    setShowDatePicker();
                  }}
                >
                  <View style={styles.button}>
                    <Text
                      style={{
                        color: COLORS.primary,
                        textAlign: "center",
                        fontSize: 18,
                      }}
                    >
                      Select
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </ScrollView>
      </TouchableOpacity>
    </Modal>
  </View>
);
}

export default DatePicker;