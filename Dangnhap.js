import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Đăng nhập</Text>
      <View style={styles.loginContainer}>
        
        {/* Tài khoản */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Tài khoản</Text>
          <TextInput 
            style={styles.input} 
            placeholder="Nhập tên tài khoản" 
          />
        </View>

        {/* Mật khẩu */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Mật khẩu</Text>
          <TextInput 
            style={styles.input} 
            placeholder="Nhập mật khẩu" 
            secureTextEntry={true} // Đảm bảo bảo mật cho mật khẩu
          />
        </View>

        {/* Nút đăng nhập */}
        <View style={styles.buttonContainer}>
          <Button title="Đăng nhập" />
        </View>

        {/* Các tùy chọn quên mật khẩu và đăng ký */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>Quên mật khẩu?</Text>
          <Text style={styles.footerText}>Đăng ký</Text>
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
  title: {
    fontSize: 30,
    marginBottom: 20,
  },
  loginContainer: {
    height: 350,
    width: 400,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    elevation: 5, // Tạo bóng cho hộp
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 20,
    paddingBottom: 5,
  },
  input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 15,
    paddingLeft: 10,
  },
  buttonContainer: {
    marginTop: 20,
    width: '100%',
  },
  footer: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  footerText: {
    color: 'blue',
    fontStyle: 'italic',
  },
});
