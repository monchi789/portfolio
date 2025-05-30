import { Board } from "./components/Board";
import Resume from "./components/Resume";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <>
      <MainLayout>
        <Board />
        <Resume />
      </MainLayout>
    </>
  );
}

export default App;
