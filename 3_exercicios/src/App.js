import React from 'react'
import { StyleSheet, SafeAreaView } from 'react-native'

import Mega from './components/mega/Mega'

// import FlexboxV4 from './components/layout/FlexboxV1'
// import FlexboxV2 from './components/layout/FlexboxV1'
// import FlexboxV3 from './components/layout/FlexboxV1'
// import FlexboxV1 from './components/layout/FlexboxV1'
// import DigiteSeuNome from './components/DigiteSeuNome'
// import ListaProdutosV2 from './components/produtos/ListaProdutosV2'
//import UsuarioLogado from './components/UsuarioLogado'
// import Familia from '/components/relacao/Familia'
// import ContadorV2 from './components/contador/ContadorV2'
// import Pai from '.components/indireta/Pai'
// import Contador from './components/Contador'
// import Titulo from '/components/Titulo'
// import Aleatorio from './components/Aleatorio'
// import MinMax from './components/MinMax'
// import CompPadrao, {Comp1,Comp2} from './components/Multi'
// import Primeiro from './components/Primeiro'


export default () => (
<SafeAreaView style = {style.App}>
   <Mega qutdeNumeros={7}/>
   {/* <Botao/>
   </FlexboxV4>
   </FlexboxV3>
   </FlexboxV2>
  </FlexboxV1>
   <DigiteSeuNome />
   <ListaProdutosV2/>
   <UsuarioLogado usuario={{nome: 'Sabs', email: 'sabs@sabs.com'}}/>
   <UsuarioLogado usuario={{nome: 'Kabs'}}/>
   <UsuarioLogado usuario={{email: 'kabs@kabs.com'}}/>
   <Familia/>
   <ContadorV2/> 
   <Pai/>
   <Pai/>
   <Contador inicial={100} passo={10}/>
   <Contador/>
   <Titulo principal = "Cadastro Produto" secundario = "Tela de Cadastro do Produto"/>
   <Aleatorio min={1} max={60}/>
   <MinMax min={3} max={20}/>
   <MinMax min={8} max={32}/>
   <Comp1/>
   <Comp2/>
   <Primeiro/>
   <CompPadrao/> */}
</SafeAreaView>
)
const style = StyleSheet.create({
   App: {
      backgroundColor: '#DDA0DD',
      flexGrow: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: 20,
   }
})