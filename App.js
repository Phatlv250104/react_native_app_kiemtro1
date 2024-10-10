import React from 'react';
import { StyleSheet, Text, View, TextInput, Button,Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Thông tin cá nhân</Text>
      <View style={styles.loginContainer}>
        
        <View style={styles.inputContainer}>
        <Image
        source={require('./assets/ảnh login.jpg')} // Đường dẫn đến hình ảnh
        style={styles.logo} // Áp dụng style cho hình ảnh
      />
        </View>

        {/* Mật khẩu */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Họ và tên:Nguyễn Văn A</Text>
          <Text style={styles.label}>Số điện thoại: 09xxxx</Text>
          <Text style={styles.label}>Địa chỉ:Bình Dương</Text>
          <Text style={styles.label}>Email:VanA@gmail.com</Text>
          <Text style={styles.label}>Tài khoản:Người thuê</Text>
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DFDFDF',
  },
  logo: {
    height:200,
    width:200,
  },
  title: {
    fontSize: 30,
    marginBottom: 20,
  },
  loginContainer: {
    height: 500,
    width: 400,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
    alignItems:'center',
    justifyContent:'center'
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 20,
    paddingBottom: 5,
  },
});
