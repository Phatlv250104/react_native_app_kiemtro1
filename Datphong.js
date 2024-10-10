import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image, ScrollView, TextInput, Button} from 'react-native';

export default function App() {
  return (
      <View style={styles.container}>
        <Text style={styles.text}>Đặt lịch xem phòng</Text>
        <View style={styles.Datlich}>
            <Text style={styles.text1}>Họ và Tên</Text>
            <TextInput style={styles.Khung}
            placeholder="Nhập họ và tên"/>
          <Text style={styles.text1}>Số điện thoại</Text>
            <TextInput style={styles.Khung}
            placeholder="Nhập Số điện thoại"/>
            <Text style={styles.text1}>Thời gian xem phòng</Text>
            <TextInput style={styles.Khung}
            placeholder="Chọn thời gian xem phòng"/>
            <Text style={styles.text1}>Ghi chú</Text>
            <TextInput style={styles.Khung12}
            placeholder="Ghi chú"/>
          <View style={styles.buttom}>
          <View style={styles.buttom2}>
            <Button title="Hủy" color="red"/>
            </View>
            <View style={styles.buttom2}>
            <Button title="Đặt lịch" color="red"/>
            </View>
          </View>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container : {
    flex:1,
    backgroundColor:'#fff',
  },
  Datlich : {
    flex:9,
    backgroundColor:'#FFEDD1',
    margin:10,
  },
  text : {
    fontSize:30,
    marginTop:30,
    textAlign:'center',
  },
  text1 : {
    fontSize:18,
    paddingLeft:33,
    paddingTop:10,

  },
  Khung : {
    height:40,
    width:335,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius:15,
    padding:10,
    marginTop:10,
    marginLeft:27,
    backgroundColor:'#fff'
  },
  Khung1 : {
    height:200,
    width:335,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius:15,
    padding:10,
    marginTop:10,
    marginLeft:27,
    backgroundColor:'#fff'
  },
  Khung12 : {
    height:200,
    width:335,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius:15,
    paddingBottom:150,
    paddingLeft:20,
    fontStyle:'italic',
    marginTop:10,
    marginLeft:27,
    backgroundColor:'#fff'
  },
  buttom : {
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin:30,
  },
  buttom2 : {
    width:100,
    height:50,
  },
});
