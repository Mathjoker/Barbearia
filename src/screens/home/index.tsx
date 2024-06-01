import { Button, Dimensions, Image, ImageBackground, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from "react-native";
import DefaultImage from '../../assets/fundo.png';

const DEFAULT_IMAGE = Image.resolveAssetSource(DefaultImage).uri;

function Home(){
    return <View style={style.container}>
        <ImageBackground source= {{ uri: DEFAULT_IMAGE}} resizeMode="cover" style={style.image}>
                <View style={style.frameUp}>
                    <Text style={style.titulo}>Navalha{'\n'}Afiada</Text>
                    <Text style={style.subTitulo}>Cortes de Alta{'\n'}Precisão</Text>
                </View>
                <View style={style.frameDown}>
                    <TouchableHighlight onPress={()=>console.log("Entrar")} style={style.highLight} activeOpacity={0.9}>
                    <View style={style.btn}>
                        <Text style={style.textBtn}>
                            Entrar
                        </Text>
                        
                    </View>
                    </TouchableHighlight>
                    <TouchableOpacity>
                        <Text style={style.textBtn2}>
                                Criar Conta
                        </Text>
                    </TouchableOpacity>
                </View>
        </ImageBackground>
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
    },
    titulo: {
        fontFamily: "Bevan-Regular", 
        color:"#FFF", 
        fontSize: 72,
        alignSelf: 'center',
        textAlign: 'center'
    },
    subTitulo: {
        fontFamily: "Bevan-Regular", 
        color:"#e38900", 
        fontSize: 20,
        alignSelf: 'center',
        textAlign: 'center'
    },
    frameUp: {
        flex: 2,
        justifyContent: 'flex-end'

    },
    frameDown: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingVertical: 50
    },
    btn: {
        width: '100%',
        alignItems: 'center',
        backgroundColor: '#e38900',
        
        height: 51,
        borderRadius: 20,
        justifyContent: 'center'
    },
    textBtn: {
        fontFamily: "Bevan-Regular", 
        color:"#FFF"
    },
    highLight: {
        width: "90%",
        alignSelf: 'center',
        borderRadius: 20
    },
    textBtn2: {
        fontFamily: "Bevan-Regular", 
        color:"#FFF",
        textAlign: 'center'
    }

})
export default Home