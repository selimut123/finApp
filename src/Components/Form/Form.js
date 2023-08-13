import React, {useState} from 'react';
import { View, TextInput, Text, TouchableOpacity, Pressable } from 'react-native';
import { Formik } from 'formik';
import { styles } from './style';
import { ScrollView } from 'react-native-gesture-handler';
import { COLORS } from '../../../util/constant';
import Picker from '../Picker/Picker';
import DatePicker from '../DatePicker/DatePicker';
import { getFormatedDate } from 'react-native-modern-datepicker';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import moment from 'moment';

const Form = ({ addFunc, formValues, isEdit, isSubs }) => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showPicker, setShowPicker] = useState(false);

  const initialValues = {
    description: "",
    price: "",
  };

  const subInitialValues = {
    description: "",
    price: "",
    duration: "month",
    date: new Date().setDate(new Date().getDate() + 1),
  };

  const addButton = (handleSubmit, subButton) => {
    return (
      <TouchableOpacity
        onPress={handleSubmit}
        style={[styles.button, { marginLeft: subButton ? 0 : 20 }]}
      >
        {isEdit ? (
          <Text style={styles.buttonText}>EDIT</Text>
        ) : (
          <Text style={styles.buttonText}>ADD</Text>
        )}
      </TouchableOpacity>
    );
  };

  const subForm = () => {
    return (
      <Formik
        initialValues={formValues || subInitialValues}
        onSubmit={(value) => addFunc(value)}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          setFieldValue,
          values,
        }) => (
          <View style={styles.container}>
            <View>
              <Text style={styles.inputText}>Description</Text>
              <TextInput
                onChangeText={handleChange("description")}
                onBlur={handleBlur("description")}
                value={values.description}
                style={styles.input}
              />
            </View>
            <View style={styles.inputContainer}>
              <View style={styles.container2}>
                <View style={{ flex: 3 }}>
                  <Text style={styles.inputText}>Price</Text>
                  <View
                    style={[
                      styles.input,
                      {
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                      },
                    ]}
                  >
                    <TextInput
                      onChangeText={handleChange("price")}
                      onBlur={handleBlur("price")}
                      value={"" + values.price}
                      style={{
                        fontSize: 18,
                        color: COLORS.white,
                      }}
                      keyboardType="numeric"
                    />
                    <Text
                      style={{
                        marginLeft: 2,
                        fontSize: 18,
                        color: COLORS.white,
                      }}
                    >
                      $
                    </Text>
                  </View>
                </View>

                <Picker
                  options={["month", "annual"]}
                  showPicker={showPicker}
                  setShowPicker={() => {
                    setShowPicker(false);
                  }}
                  setData={(option) => {
                    setFieldValue("duration", option);
                  }}
                />

                <View style={{ flex: 5, marginLeft: 10 }}>
                  <Text style={styles.inputText}>Type</Text>
                  <TouchableOpacity
                    onPress={() => setShowPicker(true)}
                    activeOpacity={1}
                  >
                    <View style={styles.pickerContainer}>
                      <Text style={{ fontSize: 18, color: COLORS.white }}>
                        {values.duration}
                      </Text>
                      <Icon name="menu-down" size={30} color={COLORS.primary} />
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <DatePicker
              setShowDatePicker={() => setShowDatePicker(false)}
              showDatePicker={showDatePicker}
              setData={(data) => {setFieldValue("date", data);}}
              val={values.date}
            />
            <View style={styles.inputContainer}>
              <Text style={styles.inputText}>Next Payment Date</Text>
              <TouchableOpacity onPress={() => setShowDatePicker(true)}>
                <TextInput
                  value={moment(values.date).format("DD MMM YYYY")}
                  style={styles.input}
                  editable={false}
                />
              </TouchableOpacity>
            </View>
            <View style={{ marginTop: 15 }}>
              {addButton(handleSubmit, true)}
            </View>
          </View>
        )}
      </Formik>
    );
  };

  return (
    <ScrollView>
      <View>
        {isSubs ? (
          subForm()
        ) : (
          <Formik
            initialValues={formValues || initialValues}
            onSubmit={(value) => addFunc(value)}
          >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
              <View style={styles.container}>
                <View style={styles.inputContainer}>
                  <Text style={styles.inputText}>Description</Text>
                  <TextInput
                    onChangeText={handleChange("description")}
                    onBlur={handleBlur("description")}
                    value={values.description}
                    style={styles.input}
                  />
                </View>
                <View style={styles.inputContainer}>
                  <Text style={styles.inputText}>Price</Text>
                  <View style={styles.container2}>
                    <View
                      style={[
                        styles.input,
                        {
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "space-between",
                        },
                      ]}
                    >
                      <TextInput
                        onChangeText={handleChange("price")}
                        onBlur={handleBlur("price")}
                        value={"" + values.price}
                        style={{
                          fontSize: 18,
                          color: COLORS.white,
                        }}
                        keyboardType="numeric"
                      />
                      <Text
                        style={{
                          marginLeft: 2,
                          fontSize: 18,
                          color: COLORS.white,
                        }}
                      >
                        $
                      </Text>
                    </View>
                    {addButton(handleSubmit)}
                  </View>
                </View>
              </View>
            )}
          </Formik>
        )}
      </View>
    </ScrollView>
  );
};

export default Form;
