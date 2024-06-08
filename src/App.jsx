import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import About from "./components/about";
import Projects from "./components/projects";
import Experience from "./components/experience";
import Skills from "./components/skills";
import Contact from "./components/contact";
import Footer from "./components/footer";
import "./styles/App.css";
import "./styles/main.css";

const App = () => (
  <Router>
    <div className="portfolio-background">
      <Header />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <About />
                <Projects />
                <Experience />
                <Skills />
                <Contact />
              </div>
            }
          />
        </Routes>
      </main>
      <Footer />
    </div>
  </Router>
);

export default App;
