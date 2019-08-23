import React from 'react'
import reactDom from 'react-dom'
import Teste from './componentes/Teste';

// componentes sempre tem que ser com letra maiuscula
//import Primeiro from './componentes/Primeiro';


// semelhante a $('<h1>').html('React 2')
reactDom.render(<Teste nome="Gabriel" idade = {10} />, document.getElementById('root'))

