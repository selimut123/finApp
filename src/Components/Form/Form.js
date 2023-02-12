import React from 'react';
import { View, TextInput, Button, Text, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { Formik } from 'formik';
import { styles } from './style';
import { ScrollView } from 'react-native-gesture-handler';

const Form = ({ addFunc }) => {
  return (
    <ScrollView>
      <View>
        <Formik
          initialValues={{ description: "", price: "" }}
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
                  <TextInput
                    onChangeText={handleChange("price")}
                    onBlur={handleBlur("price")}
                    value={values.price}
                    style={styles.input}
                  />
                  <TouchableOpacity
                    onPress={handleSubmit}
                    style={styles.button}
                  >
                    <Text style={styles.buttonText}>ADD</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
        </Formik>
      </View>
    </ScrollView>
  );
};

export default Form;
