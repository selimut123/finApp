import React, {useState} from 'react';
import { View, Text } from 'react-native';
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

    return (
        <Script isTransaction={true} arr={arr}/>
    );
}

export default TransactionList;
