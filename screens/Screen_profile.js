import { Image, TouchableOpacity, View,Text } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from "@react-navigation/native";
const Screen_profile = () => {
    const navigation = useNavigation();
    return (
    <View style={{backgroundColor:'white',flex:1,padding:20}}>
        <AntDesign name="arrowleft" size={24} color="black" />
        <View> 
            <Text style={{fontSize:30,fontWeight:'bold',textAlign:'center'}}>
                My Profile
            </Text>
        </View>
        <View style={{flexDirection:'row',justifyContent:'center',paddingTop:25}}>
            <Image style={{width:180,height:180}} source={require("../assets/Data/avt.png")} />
        </View>
        <View style={{flexDirection:'row',justifyContent:'center',paddingTop:15}}>
            <Text style={{fontSize:30,fontWeight:'bold'}}>
                Nguyễn Hữu Tuấn
            </Text>
        </View >
        <View style={{flexDirection:'row',justifyContent:'center',paddingTop:15}}>
            <TouchableOpacity onPress={()=> navigation.navigate("Screen_updateprofile")}>
            <Text style={{fontSize:20,fontWeight:'500'}}>
                Edit Profile
            </Text>
            </TouchableOpacity>
        </View>
        <View style={{paddingTop:20}}>
            <Text style={{fontSize:20,fontWeight:'bold'}}>
                About me
            </Text>
            <Text style={{textAlign:"justify", fontSize:15,paddingTop:15}}>
                My name is Nguyễn Hữu Tuấn.I come from VietNam.I am 21 year old . I'm an enthusiastic individual with a strong background in video scriptwriting, technology, and gaming. I enjoy problem-solving, exploring creative solutions, and continuously expanding my knowledge across various fields.
            </Text>
        </View>
    </View>
    );
};

export default Screen_profile;