import React from 'react'
import reactDom from 'react-dom'

const elemento = <h2>Hello World</h2>

// semelhante a $('<h1>').html('React 2')
reactDom.render(elemento, document.getElementById('root'))

