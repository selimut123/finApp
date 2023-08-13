import React, {useState, useEffect, useCallback} from 'react';
import { View, Text, RefreshControl } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { COLORS } from '../../../util/constant';
import CusModal from '../../Components/Modal/CusModal';
import Script from '../../Components/Script/Script';
import api from '../../../util/api';

const TransactionList = () => {
    const [arr, setArr] = useState([]);

    const [showModal, setShowModal] = useState(false);
    const [formValue, setFormValue] = useState();
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
      setShowModal(false);
    }

    return (
      <ScrollView style={{flex: 1, backgroundColor: COLORS.background}} refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
        <CusModal
          addFunc={handleEdit}
          showModal={showModal}
          setShowModal={() => {
            setShowModal(false);
          }}
          isEdit={true}
          formValues={formValue}
          title={"Edit Transaction"}
        />
        <Script
          isTransaction={true}
          arr={arr}
          setShowModal={setShowModal}
          setFormValue={setFormValue}
          title={"Transaction History"}
        />
      </ScrollView>
    );
}

export default TransactionList;
