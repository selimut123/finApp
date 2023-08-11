import React, {useEffect, useState} from 'react';
import { Text, View, Image, Button, KeyboardAvoidingView } from "react-native";
import { COLORS } from "../../../util/constant";
import { styles } from './style';
import { getCurrentDate } from "../../../util/function";

import Circle from '../../Components/Circle/Circle';
import Script from '../../Components/Script/Script';
import CusModal from '../../Components/Modal/CusModal';
import AddButton from '../../Components/AddButton/AddButton';
import api from '../../../util/api';

const HomeScreen = (props) => {
    const [arr, setArr] = useState([
      {
        id: 1,
        description: "Wingstop purchased",
        price: "24.14",
        date: "Tuesday, March 30, 2021",
      },
      {
        id: 2,
        description: "Wingstop purchased",
        price: "24.1",
        date: "Tuesday, March 30, 2021",
      },
      {
        id: 3,
        description: "Wingstop purchased",
        price: "24.14",
        date: "Tuesday, March 30, 2021",
      },
    ]);

    const getExpenses = async () => {
      try{
        const responseData = await api.get('/expense/');
        console.log(responseData);
      }catch(err){
        console.log(err);
        return;
      }
    }

    useEffect(() => {
      getExpenses();
    }, []);

    const [showModal, setShowModal] = useState(false);
    const [editShowModal, setEditShowModal] = useState(false);
    const [formValue, setFormValue] = useState(null);

    const handleEdit = (Transaction) => {
      const newData = arr.map((val) => {
        if(val.id == Transaction.id){
          val.description = Transaction.description;
          val.price = Transaction.price;
          return val;
        }
        return val;
      });
      setArr(newData);
      setEditShowModal(false);
    }
    
    const addTrans = (Transaction) => {
      Transaction.id = Math.random.toString();
      Transaction.date = getCurrentDate();
      setArr((currTrans) => {
        return [Transaction, ...currTrans];
      });
      setShowModal(false);
    };

    return (
      <>
        <CusModal
          addFunc={addTrans}
          setShowModal={() => {
            setShowModal(false);
          }}
          showModal={showModal}
          title={"Add Transaction"}
        />
        <CusModal
          addFunc={handleEdit}
          showModal={editShowModal}
          setShowModal={() => {
            setEditShowModal(false);
          }}
          isEdit={true}
          formValues={formValue}
          title={"Edit Transaction"}
        />
        <View style={styles.mainContainer}>
          <Circle borderColor={COLORS.primary} data={arr} />
          <Script
            arr={arr}
            setShowModal={setEditShowModal}
            setFormValue={setFormValue}
            {...props}
            title={"Newest Transaction"}
          />
          <AddButton
            onPress={() => {
              setShowModal(true);
            }}
          />
        </View>
      </>
    );
}

export default HomeScreen;
