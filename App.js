import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
	const [peso, setPeso] = useState(0);
	const [altura, setAltura] = useState(0);
	const [resultado, setResultado] = useState(0);
	
	function Calcular (){
		let r = parseFloat(peso) / (parseFloat(altura)*parseFloat(altura));
		setResultado(r);
	}
	function Limpar (){
		setPeso("");
		setAltura("");
		setResultado("");
	}
  return (
    <View style={styles.container}>
		  <View style={styles.titulo}>
		  	<Text style={styles.textoTitulo}>CALCULADORA IMC</Text>
		  </View>
		  
		  <View style={styles.blocoImagem}>
		  	<Image style={styles.imagem}
        		source={
					require('./assets/unnamed.png')
				}
      		/>
		  </View>
		  
		  <View style={styles.bloco}>
		  	<Text style={styles.label}>Peso: </Text>
			  <TextInput 
				  style={styles.input}
				  value={peso}
				  onChangeText={(peso)=>setPeso(peso)}
			  />
			  <Text style={styles.label}>Altura: </Text>
			  <TextInput 
				  style={styles.input}
				  value={altura}
				  onChangeText={(altura)=>setAltura(altura)}
			  />
		  </View>
		  
		  <View style={styles.botResul}>
			  <TouchableOpacity style={styles.botao} onPress={Calcular}>
				  <Text style={styles.txtBotao}>Calcular</Text>
			  </TouchableOpacity>
			  <TouchableOpacity style={styles.botao} onPress={Limpar}>
				  <Text style={styles.txtBotao}>Limpar</Text>
			  </TouchableOpacity>
			  <Text style={styles.label}> Resultado: {resultado}</Text>
		  </View>
	  </View>
		  
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
	backgroundColor:'#fff',
	},
	titulo: {
		backgroundColor:'#00adc2',
		height:'10%',
		justifyContent:'center'
	},
	textoTitulo:{
		fontSize:20,
		textAlign:'center',
		color:'#fff'
	},
	imagem:{
		width:180,
		height:180,
},
	blocoImagem:{
	alignItems: 'center',
	marginTop:30
	},
	input:{
	borderWidth:2,
	fontSize:20,
	width:100,
	borderRadius:10,
},
	bloco:{
		alignItems:'center',
		marginTop:30,	
	},
	botao:{
	backgroundColor:'#00adc2',
	alignItems:'center',
	width:150,
	borderRadius:10,
	marginTop:10,
  },
  txtBotao:{
	color:"#FFF",
	fontSize:30
  },
	botResul:{
		alignItems:'center',
		margin:'auto',
	}
});
