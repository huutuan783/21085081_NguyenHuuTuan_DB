import { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Modal,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import AntDesign from "@expo/vector-icons/AntDesign";

const Screen_updateprofile = () => {
    const navigation = useNavigation();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleUpdateProfile = async () => {
    if (!name || !password || !rePassword) {
      setModalMessage("Please enter username and password");
      return setModalVisible(true);
    }
    if (password !== rePassword) {
      setModalMessage("Passwords do not match");
      return setModalVisible(true);
    }
    try {
      const response = await fetch("http://localhost:8081/update", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, password }),
      });
      const data = await response.json();
      if (response.status === 200) {
        setModalMessage(data.message);
        setModalVisible(true);
        setTimeout(() => {
          setModalVisible(false);
          navigation.navigate("Screen_04");
        }, 2000);
      } else {
        setModalMessage(data.message);
        setModalVisible(true);
      }
    } catch (error) {
      setModalMessage("Network error. Please try again.");
      setModalVisible(true);
    }
  };

  return (
    <View style={styles.groupContainer}>
      <AntDesign
        style={{ padding: 20, paddingBottom: 0 }}
        name="arrowleft"
        size={24}
        color="black"
        onPress={() => navigation.goBack()}
      />
      <View style={styles.container}>
        <Text style={styles.title}>Update Profile</Text>
        <Image
          source={require("../assets/Data/avt.png")}
          style={styles.image}
        />
        <Text style={styles.textName}>Nguyễn Hữu Tuấn</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.textField}>Name</Text>
          <TextInput
            placeholder="Name"
            value={name}
            onChangeText={setName}
            style={styles.input}
          />
          <Text style={styles.textField}>Password</Text>
          <TextInput
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            style={styles.input}
          />
          <Text style={styles.textField}>Rewrite password</Text>
          <TextInput
            placeholder="Rewrite Password"
            secureTextEntry
            value={rePassword}
            onChangeText={setRePassword}
            style={styles.input}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={handleUpdateProfile}>
          <Text style={styles.buttonText}>Update</Text>
        </TouchableOpacity>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(false);
          }}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalWrapper}>
              <Text style={styles.modalText}>{modalMessage}</Text>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.modalButtonText}>OK</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
}

export default Screen_updateprofile;

const styles = StyleSheet.create({
    groupContainer: {
      flex: 1,
      backgroundColor: "#fff",
    },
    container: {
      justifyContent: "center",
      alignItems: "center",
      padding: 20,
      paddingTop: 0,
    },
    title: {
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 20,
    },
    image: {
      width: 100,
      height: 100,
    },
    textName: {
      fontSize: 22,
      fontWeight: "700",
      marginTop: 8,
    },
    inputContainer: {
      width: "100%",
      marginBottom: 20,
      paddingTop:20,
    },
    input: {
      width: "100%",
      padding: 15,
      borderWidth: 1,
      borderColor: "#ccc",
      borderRadius: 10,
      marginBottom: 15,
    },
    textField: {
      fontSize: 16,
      marginBottom: 8,
      fontWeight:'bold'
    },
    button: {
      backgroundColor: "#99ffcc",
      padding: 15,
      borderRadius: 10,
      alignItems: "center",
      width: "100%",
    },
    buttonText: {
      color: "black",
      fontSize: 18,
      fontWeight: "bold",
    },
    modalContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modalWrapper: {
      width: "80%",
      padding: 20,
      backgroundColor: "#fff",
      borderRadius: 10,
      alignItems: "center",
    },
    modalText: {
      fontSize: 18,
      marginBottom: 20,
    },
    modalButton: {
      backgroundColor: "#99ffcc",
      padding: 10,
      borderRadius: 10,
      alignItems: "center",
      width: "50%",
    },
    modalButtonText: {
      color: "#fff",
      fontSize: 16,
    },
  });

