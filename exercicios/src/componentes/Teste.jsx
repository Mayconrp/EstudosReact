import React from 'react'

// passando o parâmetro com props
export default props => 
//usar div ou react.fragment
    <React.Fragment>
        <h1>Bom dia {props.nome}!</h1>
        <h2>Idade = {props.idade}</h2>
    </React.Fragment>