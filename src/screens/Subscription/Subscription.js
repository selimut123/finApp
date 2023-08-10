import React, {useState} from "react";
import { View, Text, TouchableOpacity} from "react-native";
import { styles } from './style';
import { getCurrentDate } from "../../../util/function";
import { COLORS } from "../../../util/constant";

import PieChart from "../../Components/PieChart/PieChart";
import CusModal from "../../Components/Modal/CusModal";
import { ScrollView } from "react-native-gesture-handler";

function Subscription(){
    const [arr, setArr] = useState([
      {
        id: 1,
        description: "Wingstop",
        price: 25,
        duration: "month",
        date: "2023/08/12",
      },
      {
        id: 2,
        description: "Wingstop",
        price: 50,
        duration: "annual",
        date: "2023/08/12",
      },
      {
        id: 3,
        description: "Wingstop",
        price: 25,
        duration: "month",
        date: "2023/08/12",
      },
      {
        id: 4,
        description: "Chegg",
        price: 12,
        duration: "month",
        date: "2023/08/12",
      },
    ]);

    const [showModal, setShowModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [formValue, setFormValue] = useState(null);

    const addSubs = (Subscription) => {
      Subscription.id = Math.floor(Math.random() * 100);
      Subscription.price = parseFloat(Subscription.price);
      setArr((currSubs) => {
        return [Subscription, ...currSubs];
      });
      setShowModal(false);
    };

    const handleEdit = (Subscription) => {
      const newData = arr.map((val) => {
        if (val.id == Subscription.id) {
          val.description = Subscription.description;
          val.price = parseFloat(Subscription.price);
          val.duration = Subscription.duration;
          val.date = Subscription.date;
          return val;
        }
        return val;
      });
      setArr(newData);
      setShowEditModal(false);
    }

    return (
      <View style={styles.mainContainer}>
        <ScrollView>
          <CusModal
            addFunc={addSubs}
            setShowModal={() => {
              setShowModal(false);
            }}
            showModal={showModal}
            title={"Add Subscription"}
            isSubs={true}
          />

          <CusModal
            showModal={showEditModal}
            addFunc={handleEdit}
            setShowModal={() => {
              setShowEditModal(false);
            }}
            isEdit={true}
            formValues={formValue}
            title={"Edit Subscription"}
            isSubs={true}
          />

          <View style={styles.chartContainer}>
            <PieChart
              text={"SUBS USED"}
              database={arr}
              color={COLORS.onprimary}
            />
          </View>
          <View style={styles.listContainer}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>Upcoming Payment</Text>
              <TouchableOpacity onPress={() => setShowModal(true)}>
                <View style={styles.addButton}>
                  <Text style={{ fontWeight: "bold" }}>ADD</Text>
                </View>
              </TouchableOpacity>
            </View>
            {arr.map((val, id) => (
              <TouchableOpacity
                key={id}
                onPress={() => {
                  setShowEditModal();
                  setFormValue(val);
                }}
              >
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: COLORS.grey,
                    backgroundColor: COLORS.onprimary,
                    padding: 10,
                    borderRadius: 10,
                    marginVertical: 10,
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                      }}
                    >
                      <Text style={{ color: COLORS.white, fontSize: 16 }}>
                        {val.description}
                      </Text>
                      <Text style={{ color: COLORS.white, fontSize: 16 }}>
                        ${val.price}/{val.duration}
                      </Text>
                    </View>
                    <View
                      style={{
                        width: 150,
                        height: 55,
                        borderWidth: 3,
                        borderColor: COLORS.grey,
                        borderRadius: 55,
                        backgroundColor: COLORS.white,
                      }}
                    >
                      <Text
                        style={{
                          color: COLORS.black,
                          padding: 10,
                          textAlign: "center",
                          fontWeight: "bold",
                          fontSize: 12,
                        }}
                      >
                        {val.date}
                      </Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
              /* <Card value={val} key={id} onPress={() => {
                setShowEditModal(true); 
                setFormValue(val);
              }}/> */
            ))}
          </View>
        </ScrollView>
      </View>
    );
}

export default Subscription;
