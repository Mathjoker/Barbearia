import { Dimensions, View } from "react-native";

function Home(){
    return <View style={{backgroundColor:"#FC0", width: Dimensions.get("window").width, height:Dimensions.get("window").height}} />
}

export default Home