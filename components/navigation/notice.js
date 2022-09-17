import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import NoticeItem from "../default/noticeitem";

export default class Notice extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerbox}>{/* <Text>헤더자리</Text> */}</View>
        <View style={styles.listbox}>
          <NoticeItem
            comp="결제가 완료되었습니다."
            dateinfo="2021.04.22 13:00:22"
            payinfo="땡땡은행 입금 30,000원 XXX"
          />
          <NoticeItem
            comp="결제가 완료되었습니다."
            dateinfo="2021.04.22"
            payinfo="땡땡은행 입금 30,000원 XXX 04/22 13:00:22"
          />
          <NoticeItem
            comp="결제가 완료되었습니다."
            dateinfo="2021.04.22"
            payinfo="땡땡은행 입금 30,000원 XXX 04/22 13:00:22"
          />
          <NoticeItem
            comp="결제가 완료되었습니다."
            dateinfo="2021.04.22"
            payinfo="땡땡은행 입금 30,000원 XXX 04/22 13:00:22"
          />
        </View>
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  headerbox: {
    flex: 1,
    justifyContent: "center",
  },
  listbox: {
    flex: 3,
    borderTopWidth: 0.5,
  },
});
