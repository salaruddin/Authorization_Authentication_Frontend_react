import { Toaster } from "react-hot-toast";
import GlobalRouter from "./routes";

function App() {
  return (
    <div>
      <GlobalRouter />
      <Toaster />
    </div>
  );
}

export default App;
