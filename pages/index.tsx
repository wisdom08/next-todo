import {NextPage} from 'next';
import styled from "styled-components";

const Container = styled.div `
    padding: 20px;
`

const Index: NextPage = () => {
    return (
        <Container>
            <div>
                Hello world!
            </div>
        </Container>
    )
};

export default Index;