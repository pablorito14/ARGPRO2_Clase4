import React,{useState} from 'react';
import './Section.css';
import { Box,Text } from '@chakra-ui/react';

//useState

const Section = () => {

  const [contador,setContador] = useState(0);
  // useState puede recibir cualquier cosa, incluso null
  console.log(contador)

  // setContador(20)
  function incrementar(){

    if(contador < 10){
      setContador(contador+1)
    }

  }

  const decrementar = () => {
    setContador(contador-1);
  }

  return(
    <div>
      <Box w="100%" bg={{base:'pink',md:'blue',lg:'green'}}>Soy una caja
        <h1>{contador}</h1>
        <button onClick={incrementar} disabled={contador === 10 ? "disabled" : ""} >Suma</button>
        <button onClick={decrementar}>Restar</button>
      </Box>
      <Box as="header" bg='tomato' h="500px">Soy una caja
        <Box bg="white" h="200px" display='flex' justifyContent='center' alignItems='center' >
          <Box bg="black" w="30px" h="30px">uno</Box>
          <Box bg="yellow" w="30px" h="30px">uno</Box>
          <Box bg="green" w="30px" h="30px">uno</Box>
        </Box>
      </Box>
      <Text fontSize='25px' textAlign='center' >Soy una caja</Text>
    </div>
  )
}

export { Section }