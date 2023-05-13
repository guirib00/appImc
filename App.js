import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
	const [peso, setPeso] = useState(0);
	const [altura, setAltura] = useState(0);
	const [resultado, setResultado] = useState(0);
	const [imc, setImc] = useState("");
	
	function Calcular (){
		let r = parseFloat(peso) / (parseFloat(altura)*parseFloat(altura));
		if (r<=16.9){
			setImc("- Muito abaixo do peso");
		}else if(r >= 17 && r <= 24.9){
			setImc("- Peso normal");
		}else if(r >= 25 && r <=29.9){
			setImc("- Acima do peso");
		}else if(r >= 30 && r <=34.9){
			setImc("- Obesidade grau I");
		}else if(r >= 35 && r <= 40){
			setImc("- Obesidade grau II");
		}else{
			setImc("- Obesidade grau III");
		}
		setResultado(r);
	}
	function Limpar (){
		setPeso(0);
		setAltura(0);
		setResultado(0);
		setImc("");
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
		  
		  <View style={styles.boxResul}>
			  <Text style={styles.resul}> Resultado: {resultado} {imc}</Text>
		  </View>
		  
		  <View style={styles.botResul}>
			  <TouchableOpacity style={styles.botao} onPress={Calcular}>
				  <Text style={styles.txtBotao}>Calcular</Text>
			  </TouchableOpacity>
			  <TouchableOpacity style={styles.botao} onPress={Limpar}>
				  <Text style={styles.txtBotao}>Limpar</Text>
			  </TouchableOpacity>
			  
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
		marginTop:20,	
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
	},
	boxResul:{
		textAlign:'center',
		marginTop:100,
	},
	resul:{
		fontSize:30,
	}
});
