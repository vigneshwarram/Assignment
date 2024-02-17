import React, {useState} from 'react';
import { View,Switch,Image,Text } from "react-native";

const Header = ({ title }) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return(
    <View style={{ height: 80, backgroundColor: '#fff', elevation:4,justifyContent:'space-between',alignItems:'center',paddingHorizontal:20,flexDirection:'row',marginTop:20 }}>
         <View style={{flexDirection:'row'}}>
         <Text style={{ fontSize: 24, color: "#000", fontWeight: "bold" }}>
              {'R E D T A G'}
            </Text>
         </View>
        <View style={{flexDirection:'row'}}>
        <View style={{justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
        <Text style={{ fontSize: 12, color: "#000", fontWeight: "bold" }}>
              {'ENG'}
            </Text>
        <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
        <Text style={{ fontSize: 12, color: "#000", fontWeight: "bold",marginLeft:-2 }}>
              {'AR'}
            </Text>
        </View>
       
      <View style={{justifyContent:'center',alignItems:'center',marginLeft:20,position:'relative'}}>
      <Image
              style={{ width: 30, height: 30 }}
              resizeMode="contain"
              source={require("../assets/bag.png")}
            ></Image>
            <View style={{justifyContent:'center',alignItems:'center', position:'absolute',width:20,height:20,borderRadius:20/2,backgroundColor:'#e93347',bottom:2,right:-5}}>
            <Text style={{ fontSize: 12, color: "#fff", fontWeight: "bold",marginLeft:-2 }}>
              {'1'}
            </Text>
            </View>
      </View>
       
        </View>
     
    </View>
  );
}

  export default Header