import React from 'react'
import Button from 'shared/styled/Button'
import Container from 'shared/styled/Container'
import FlexContainer from 'shared/styled/FlexContainer'
import Text from 'shared/styled/Text'
import Smooth from 'shared/styled/Smooth'

function MyDescription() {
    return (
        <FlexContainer flexDir="column" align="stretch">
            <Container>
                <Container margin="1em 0">
                    <Text weight size="big">My description</Text>
                </Container>
                <Container margin="1em 0">
                <Smooth size="small">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam labore, numquam recusandae qui commodi distinctio consequatur deleniti architecto veniam sit praesentium cumque.</Smooth>
                </Container>
            </Container>
            <Button>editar</Button>
        </FlexContainer>
    )
}

export default MyDescription

