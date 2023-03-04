
"use client";

import styled from 'styled-components';

import FormContainer from '@/containers/FormContainer/Form';

const HomeWrapper = styled.main`

    width: 100%;
    height: 100vh;

    background-image: linear-gradient(120deg, #95ffdc 0%, #5c9fcc 100%);

`

const Home = () => {

    return (
      <HomeWrapper>
        <FormContainer />
      </HomeWrapper>
    )
}

export default Home;
