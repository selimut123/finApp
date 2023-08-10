import React, {useState} from 'react';
import { View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { COLORS } from '../../../util/constant';
import CusModal from '../../Components/Modal/CusModal';
import Script from '../../Components/Script/Script';

const TransactionList = () => {
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
      {
        id: 4,
        description: "Wingstop purchased",
        price: "24.14",
        date: "Tuesday, March 30, 2021",
      },
    ]);

    const [showModal, setShowModal] = useState(false);
    const [formValue, setFormValue] = useState();

    const handleEdit = (Transaction) => {
      const newData = arr.map((val) => {
        if (val.id == Transaction.id) {
          val.description = Transaction.description;
          val.price = Transaction.price;
          return val;
        }
        return val;
      });
      setArr(newData);
      setShowModal(false);
    }

    return (
      <ScrollView style={{flex: 1, backgroundColor: COLORS.background}}>
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
          title={"Monthly Transaction"}
        />
      </ScrollView>
    );
}

export default TransactionList;
