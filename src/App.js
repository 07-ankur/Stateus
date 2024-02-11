import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import FAQ from "./scenes/faq";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Home from "./scenes/Home/Home";
import { useLocation } from "react-router-dom";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const location = useLocation();

  const isHomeRoute = location.pathname === "/home";

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          {!isHomeRoute && <Sidebar isSidebar={isSidebar} />}
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/Maharashtra" element={<Dashboard />} />
              <Route path="/Bihar" element={<Dashboard />} />
              <Route path="/West-Bengal" element={<Dashboard />} />
              <Route path="/Tamil-Nadu" element={<Dashboard />} />
              <Route path="/Jharkhand" element={<Dashboard />} />
              <Route path="/Uttar-Pradesh" element={<Dashboard />} />
              <Route path="/Rajasthan" element={<Dashboard />} />
              <Route path="/Madhya-Pradesh" element={<Dashboard />} />
              <Route path="/Gujarat" element={<Dashboard />} />
              <Route path="/Kerela" element={<Dashboard />} />
              <Route path="/Punjab" element={<Dashboard />} />
              <Route path="/faq" element={<FAQ />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
