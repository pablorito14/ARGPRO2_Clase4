import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Card } from './Components/Card/Card'
import { Section } from './Components/Section/Section'
import { ChakraProvider} from '@chakra-ui/react'

function App() {

  const productos = [
    {
    "id": "aasdasd1",
    "title":"Motorola G6 Plus 64 Gb Indigo Oscuro 4 Gb ",
    "price":28599,
    "condition":"new",
    "free_shipping":true,
    "thumbnail":""
  },{
    "id": "aasdasd2",
    "title":"Motorola G6 Plus 64 Gb Indigo Oscuro 4 Gb ",
    "price":28599,
    "condition":"new",
    "free_shipping":true,
    "thumbnail":""
  },{
    "id": "aasdasd3",
    "title":"Motorola G6 Plus 64 Gb Indigo Oscuro 4 Gb ",
    "price":28599,
    "condition":"new",
    "free_shipping":true,
    "thumbnail":""
  }
]

  return (
    <>
      <div>
        {/* <ChakraProvider> */}
          <Section />
        {/* </ChakraProvider> */}
        {/* <Card producto={producto} /> */}
        {/* {productos.map(producto => <Card key={producto.id} producto={producto} />)} */}
        {/* {productos.map(producto => <Card key={producto.id} img={producto.thumbnail} title={producto.title} price={producto.price} condition={producto.condition} shipping={producto.free_shipping}/>)} */}
        {/* pasar todas las props por separado */}
      </div>
    </>
  )
}

export default App
