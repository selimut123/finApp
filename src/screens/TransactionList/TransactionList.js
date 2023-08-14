import React, {useState, useEffect, useCallback} from 'react';
import { View, Text, RefreshControl, ScrollView } from 'react-native';
import { COLORS } from '../../../util/constant';
import CusModal from '../../Components/Modal/CusModal';
import Script from '../../Components/Script/Script';
import api from '../../../util/api';
import AppLoader from '../../Components/AppLoader';
import { SafeAreaView } from 'react-native-safe-area-context';

const TransactionList = () => {
    const [arr, setArr] = useState([]);

    const [showModal, setShowModal] = useState(false);
    const [formValue, setFormValue] = useState();
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
      setShowModal(false);
    }

    return (
      <>
        {isLoading ? <AppLoader /> : <></>}
        <SafeAreaView>
          
        </SafeAreaView>

        <ScrollView
          style={{ flex: 1, backgroundColor: COLORS.background }}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
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
      </>
    );
}

export default TransactionList;
