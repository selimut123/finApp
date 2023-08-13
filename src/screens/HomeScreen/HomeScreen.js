import React, {useEffect, useState, useCallback} from 'react';
import { Text, View, Image, Button, KeyboardAvoidingView, RefreshControl } from "react-native";
import { COLORS } from "../../../util/constant";
import { styles } from './style';

import Circle from '../../Components/Circle/Circle';
import Script from '../../Components/Script/Script';
import CusModal from '../../Components/Modal/CusModal';
import AddButton from '../../Components/AddButton/AddButton';
import api from '../../../util/api';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';

const HomeScreen = (props) => {
    const [arr, setArr] = useState([]);
    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = useCallback(async () => {
      setRefreshing(true);
      await getExpenses();
      setTimeout(() => {
        setRefreshing(false);
      }, 2000);
    }, []);

    const getExpenses = async () => {
      try{
        const responseData = await api.get('/expense/');
        setArr(responseData.data);
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

    const handleEdit = async (Transaction) => {
      try{
        await api.patch(`/expense/${Transaction._id}`, {
          "description": Transaction.description,
          "price": Transaction.price,
        });
        await getExpenses();
      }catch(err){
        console.log(err);
        return;
      }
      setEditShowModal(false);
    }
    
    const addTrans = async (Transaction) => {
      try{
        await api.post('/expense/', {
          "description": Transaction.description,
          "price": Transaction.price,
        });
        await getExpenses();
      }catch(err){
        console.log(err);
        return;
      }
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
          <ScrollView
            contentContainerStyle={styles.mainContainer}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
          >
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
          </ScrollView>
      </>
    );
}

export default HomeScreen;
