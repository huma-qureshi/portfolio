import { lazy, Suspense } from "react";
import "./App.css";

import { LoadingProvider } from "./context/LoadingProvider";
import Character from "./components/Character";

const MainContainer = lazy(() => import("./components/MainContainer"));

const App = () => {
  return (
    <>
      <LoadingProvider>
        <Suspense>
          <MainContainer>
            <Character />
          </MainContainer>
        </Suspense>
      </LoadingProvider>
    </>
  );
};

export default App;
