import React, { useEffect } from 'react';
import { Container } from './style';

function Album (props) {
  useEffect(() => {
    console.log('enter')
  }, [])

  return (
    <Container>
    </Container>
  )
}

export default Album;