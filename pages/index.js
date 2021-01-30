import styled from 'styled-components'

import db from '../db.json'

const BackgroundImage = styled.div`
  flex: 1;
  background-size: cover;
  background-position: center;
  background-image: url(${db.bg});
`

export default function Home() {
  return (
    <BackgroundImage>
      auhauhauhauhuahauhua
    </BackgroundImage>
  )
}
