import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';

export default function App() {
  const [selectedOption, setSelectedOption] = useState(null);
  const options = ['Người thuê', 'Chủ trọ'];

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Đăng ký</Text>
      <View style={styles.Dangnhap}>
        <View style={styles.viewnut}>
          
          {/* Tên đăng nhập */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Tên đăng nhập</Text>
            <TextInput style={styles.input} placeholder="Nhập tên đăng nhập" />
          </View>
          
          {/* Tài khoản */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Tài khoản</Text>
            <TextInput style={styles.input} placeholder="Nhập tài khoản" />
          </View>

          {/* Mật khẩu */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Mật khẩu</Text>
            <TextInput style={styles.input} placeholder="Nhập mật khẩu" secureTextEntry={true} />
          </View>

          {/* Nhập lại mật khẩu */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Nhập lại mật khẩu</Text>
            <TextInput style={styles.input} placeholder="Nhập lại mật khẩu" secureTextEntry={true} />
          </View>

          {/* Lựa chọn radio button */}
          <View style={styles.radioButtonGroup}>
            {options.map((option, index) => (
              <TouchableOpacity
                key={index}
                style={styles.radioButtonContainer}
                onPress={() => setSelectedOption(option)}
              >
                <View style={styles.radioButton}>
                  {selectedOption === option ? <View style={styles.radioButtonSelected} /> : null}
                </View>
                <Text style={styles.radioText}>{option}</Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Nút Đăng ký */}
          <TouchableOpacity>
            <View style={styles.button}>
              <Button title="Đăng ký" />
            </View>
          </TouchableOpacity>

        </View>

        {/* Phần Đăng nhập */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>Bạn đã có tài khoản</Text>
          <Text style={styles.linkText}>Đăng nhập</Text>
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
    backgroundColor: '#D9D9D9',
  },
  Dangnhap: {
    height: 450,
    width: 410,
    backgroundColor: '#fff',
    margin: 30,
    padding: 20,
    borderRadius: 10,
  },
  text: {
    fontSize: 30,
  },
  viewnut: {
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  label: {
    flex: 1,
    fontSize: 17,
    paddingRight: 10,
  },
  input: {
    flex: 3,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 15,
    paddingLeft: 10,
  },
  radioButtonGroup: {
    flexDirection: 'row', // Sắp xếp các radio button theo hàng ngang
    justifyContent: 'center',
    marginVertical: 20,
  },
  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20, // Khoảng cách giữa các radio button
  },
  radioButton: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#0000FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioButtonSelected: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: '#0000FF',
  },
  radioText: {
    marginLeft: 10,
    fontSize: 16,
  },
  button: {
    width: 300,
  },
  footer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  footerText: {
    fontSize: 16,
  },
  linkText: {
    fontSize: 16,
    marginLeft: 5,
    color: 'blue',
    fontStyle: 'italic',
  },
});
