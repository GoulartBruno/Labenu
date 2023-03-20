import styled from 'styled-components'

export const Botao = styled.button`
  border: 0;
  background: orange;
  padding: 10px;
`

export const GaragemContainer = styled.main`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`

export const Estacionamento = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`
