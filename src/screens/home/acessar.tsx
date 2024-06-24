import { Button, Dimensions, Image, ImageBackground, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View } from "react-native";
import DefaultImage from '../../assets/fundo.png';

const DEFAULT_IMAGE = Image.resolveAssetSource(DefaultImage).uri;

function Register(){
    return <View style={style.container}>
        <ImageBackground source= {{ uri: DEFAULT_IMAGE}} resizeMode="cover" style={style.image}>
                <View style={style.frameUp}>
                    <Text style={style.titulo}>Navalha{'\n'}Afiada</Text>
                    <Text style={style.subTitulo}>Cortes de Alta{'\n'}Precisão</Text>
                </View>
                <View style={style.frameDown}>
                    <Text style={style.textBtn2}>
                        E-mail
                    </Text>
                    <View style={style.barra}>
                        <View style={style.section}>
                            <TextInput style={style.caixaDeTexto}/>
                        </View>
                    </View>
                </View>
                <View style={style.frameDown}>
                    <Text style={style.textBtn2}>
                        Senha
                    </Text>
                    <View style={style.barra}>
                        <View style={style.section}>
                            <TextInput style={style.caixaDeTexto}/>
                        </View>
                    </View>
                </View>
                <View style={style.frameDown2}>
                    <TouchableHighlight onPress={()=>console.log("Entrar")} style={style.highLight2} activeOpacity={0.9}>
                    <View style={style.btn2}>
                        <Text style={style.textBtn3}>
                            Entrar
                        </Text>
                        
                    </View>
                    </TouchableHighlight>
                    <TouchableOpacity>
                        <Text style={style.textBtn4}>
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
        height: Dimensions .get('screen').height,
        paddingBottom: 10 
    }, 
    image: {
        flex: 1,
        justifyContent: 'center'
    },
    titulo: {
        fontFamily: "Bevan-Regular", 
        color:"#FFF", 
        fontSize: 42,
        alignSelf: 'center',
        textAlign: 'center',
        paddingTop: 10
    },
    subTitulo: {
        fontFamily: "Bevan-Regular", 
        color:"#e38900", 
        fontSize: 15,
        alignSelf: 'center',
        textAlign: 'center'
    },
    frameUp: {
        flex: 2,
        paddingTop:30
    },
    frameDown: {
        flex: 1,
        paddingVertical: 50
    },
    btn: {
        width: '100%',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        
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
        color:"#e38900",
        paddingLeft: 50,
        paddingBottom: 5,
        fontSize: 16
    },
    caixaDeTexto: {
        paddingLeft: 25,
        backgroundColor: "#FFF",
        borderRadius: 20,
        flex: 1
    },
    barra: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        fontSize: 35,
    },
    section: {
        height: 50,
        width: "100%"

    },
    frameDown2: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingVertical: 50
    },
    btn2: {
        width: '100%',
        alignItems: 'center',
        backgroundColor: '#e38900',
        
        height: 51,
        borderRadius: 20,
        justifyContent: 'center'
    },
    textBtn3: {
        fontFamily: "Bevan-Regular", 
        color:"#FFF"
    },
    highLight2: {
        width: "90%",
        alignSelf: 'center',
        borderRadius: 20
    },
    textBtn4: {
        fontFamily: "Bevan-Regular", 
        color:"#FFF",
        textAlign: 'center'
    }

})
export default Register