import "./App.css";
import tw from "tailwind-styled-components";
import Timeline from "./components/Timeline";
import TopBar from "./components/TopBar";
import NavBar from "./components/NavBar";

const Container = tw.div`px-9 py-2 mb-8`;
const AppContainer = tw.div`flex flex-col`;

function App() {
  return (
    <AppContainer>
      <TopBar />
      <Container>
        <Timeline />
      </Container>
      <NavBar />
    </AppContainer>
  );
}

export default App;
