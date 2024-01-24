import { Container } from "@mui/material";
import Home from "./pages/Home";
import "./App.css"

function App() {
  return (
    <>
      <Container>
        <Home />
      </Container>
    </>
  );
}

export default App;

//! installation

// ! pnpm create vite
// ! pnpm create vite my-vue-app --template vue

// ! MUI den react icin mui style kurduk https://mui.com/material-ui/getting-started/installation/
// ! pnpm add @mui/material @emotion/react @emotion/styled
// ! pnpm add @mui/icons-material

// ! FOR MOCK API
// ! pnpm add axios

// ! to start project
// ! pnpm dev

// ! sweetalerts
// ! pnpm install --save sweetalert
