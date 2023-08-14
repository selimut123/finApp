import React, {useEffect, useState, useCallback} from 'react';
import { RefreshControl } from "react-native";
import { COLORS } from "../../../util/constant";
import { styles } from './style';

import Circle from '../../Components/Circle/Circle';
import Script from '../../Components/Script/Script';
import CusModal from '../../Components/Modal/CusModal';
import AddButton from '../../Components/AddButton/AddButton';
import api from '../../../util/api';
import { ScrollView } from 'react-native-gesture-handler';
import AppLoader from '../../Components/AppLoader';

const HomeScreen = (props) => {
    const [arr, setArr] = useState([]);
    const [refreshing, setRefreshing] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const onRefresh = useCallback(async () => {
      setRefreshing(true);
      await getExpenses();
      setTimeout(() => {
        setRefreshing(false);
      }, 0);
    }, []);

    const getExpenses = async () => {
      try{
        setIsLoading(true);
        const responseData = await api.get('/expense/');
        setArr(responseData.data);
        setIsLoading(false);
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
        setIsLoading(true);
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
        setIsLoading(true);
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
        {isLoading ? <AppLoader /> : <></>}
      </>
    );
}

export default HomeScreen;
