import { Dimensions, Image, ImageBackground, StyleSheet, View } from "react-native";
import DefaultImage from '../../assets/fundo.png';

const DEFAULT_IMAGE = Image.resolveAssetSource(DefaultImage).uri;

function Home(){
    return <View style={style.container}>
        <ImageBackground source= {{ uri: DEFAULT_IMAGE}} resizeMode="cover" style={style.image}/>
    </View>
}
const style = StyleSheet.create({
    container:{
        width: Dimensions .get('window').width, 
        height: Dimensions .get('screen').height 
    }, 
    image: {
        flex: 1,
        justifyContent: 'center'
    }
})
export default Home