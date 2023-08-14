import React, {useState, useEffect, useCallback} from "react";
import { View, Text, TouchableOpacity, RefreshControl, ScrollView} from "react-native";
import { styles } from './style';
import { COLORS } from "../../../util/constant";
import { parseISO } from "date-fns";

import PieChart from "../../Components/PieChart/PieChart";
import CusModal from "../../Components/Modal/CusModal";
import api from "../../../util/api";
import moment from "moment";
import AppLoader from "../../Components/AppLoader";

function Subscription(){
    const [arr, setArr] = useState([]);
    const [refreshing, setRefreshing] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const [showModal, setShowModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [formValue, setFormValue] = useState(null);

    const onRefresh = useCallback(async () => {
      setRefreshing(true);
      await getSubscriptions();
      setTimeout(() => {
        setRefreshing(false);
      }, 0);
    }, []);

    const getSubscriptions = async () => {
      try{
        setIsLoading(true);
        const responseData = await api.get('/subs/');
        setArr(responseData.data);
        setIsLoading(false);
      }catch(err){
        console.log(err);
        return;
      }
    }

    useEffect(() => {
      getSubscriptions();
    }, []);

    const addSubs = async (Subscription) => {
      try{
        setIsLoading(true);
        await api.post('/subs/', {
          "description": Subscription.description,
          "price": Subscription.price,
          "duration": Subscription.duration,
          "date": new Date(Subscription.date),
        });
        await getSubscriptions();
      }catch(err){
        console.log(err);
        return;
      }
      setShowModal(false);
    };

    const handleEdit = async (Subscription) => {
      try{
        setIsLoading(true);
        await api.patch(`/subs/${Subscription._id}`, {
          "description": Subscription.description,
          "price": Subscription.price,
          "duration": Subscription.duration,
          "date": new Date(Subscription.date),
        });
        await getSubscriptions();
      }catch(err){
        console.log(err);
        return;
      }
      setShowEditModal(false);
    }

    return (
      <>
      {isLoading ? <AppLoader/> : <></>}
        <View style={styles.mainContainer}>
          <ScrollView
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
          >
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
                  <View style={styles.box}>
                    <View style={styles.row}>
                      <View style={styles.col}>
                        <Text style={{ color: COLORS.yellow, fontSize: 16 }}>
                          {val.description}
                        </Text>
                        <Text style={{ color: COLORS.white, fontSize: 16 }}>
                          ${val.price}/{val.duration}
                        </Text>
                      </View>
                      <View style={styles.circleDate}>
                        <Text style={styles.circleText}>
                          {moment(parseISO(val.date)).format("DD MMM")}
                        </Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        </View>
      </>
    );
}

export default Subscription;
