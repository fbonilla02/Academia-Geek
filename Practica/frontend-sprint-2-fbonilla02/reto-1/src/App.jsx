import styled from "styled-components"
import CompaniesList from "./views/CompaniesList"
import ComponentOne from "./views/ComponentOne"
import ComponentTwo from "./views/ComponentTwo"
import Navbar from "./views/Navbar"

const BackgroundColor = styled.div`
background-color: #f0efe9;
`

function App() {
  return (
    < >
      <BackgroundColor>
        <Navbar/>
        <ComponentOne/>
      </BackgroundColor>
      <>
        <CompaniesList/>
        <ComponentTwo/>
      </>
    </>
  )
}

export default App
