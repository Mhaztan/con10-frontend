import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Footer from './components/Footer';
import CaptionsPage from './pages/CaptionsPage';
import VideoScriptPage from './pages/VideoScriptPage';
import RepurposePage from './pages/RepurposePage';
import ParaphraserPage from './pages/ParaphraserPage';
import SummarizerPage from './pages/SummarizerPage';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from './utils/theme';
import About from './pages/About';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/Privacy';
import TermsOfService from './pages/Terms';
import ErrorPage from './pages/ErrorPage';
import axios from 'axios';
import NotFound from './pages/NotFound';
import Home from './pages/Home';

const MainContent = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

const ContentWrapper = styled.div`
    flex: 1;
    display: flex;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

const PageContent = styled.div`
    flex: 1;
    padding: 20px;
`;

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 99;
    display: ${props => (props.isOpen ? 'block' : 'none')};
`;

function App() {
  const [theme, setTheme] = useState('light');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') || 'light';
    setTheme(storedTheme);

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const checkAdBlock = async () => {
      let adBlockEnabled = false;
      try {
        // Create a dummy ad element
        const ad = document.createElement('div');
        ad.innerHTML = ' ';
        ad.className = 'adsbox';
        document.body.appendChild(ad);

        // Simulate a check (you might need a more robust method)
        setTimeout(() => {
          if (ad.offsetHeight === 0) {
            adBlockEnabled = true;
          }
          ad.remove();
          sendAdBlockStatus(adBlockEnabled);
        }, 100);

      } catch (e) {
        adBlockEnabled = true;
        sendAdBlockStatus(adBlockEnabled);
        return (e)
      }
    };

    const sendAdBlockStatus = (enabled) => {
      axios.defaults.headers.common['adblocker'] = enabled.toString();
    };

    checkAdBlock();
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const handleClickOutside = (event) => {
    if (isMobile && isSidebarOpen && sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      closeSidebar();
    }
  };

  useEffect(() => {
    if (isMobile) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobile, isSidebarOpen]);

  return (
    <>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyles />
        <Router>
          <MainContent>
            <Header title="Con10 AI" theme={theme} toggleTheme={toggleTheme} toggleSidebar={toggleSidebar} />
            <ContentWrapper>
              <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} ref={sidebarRef} />
              <PageContent>
                <Routes>
                  <Route path="/captions" element={<CaptionsPage />} />
                  <Route path="/video-script" element={<VideoScriptPage />} />
                  <Route path="/repurpose" element={<RepurposePage />} />
                  <Route path="/paraphrase" element={<ParaphraserPage />} />
                  <Route path="/summarize" element={<SummarizerPage />} />
                  <Route path="/error" element={<ErrorPage />} />
                  <Route path="/" element={<Home />} /> 
                  <Route path="*" element={<NotFound />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/privacy" element={<PrivacyPolicy />} />
                  <Route path="/terms" element={<TermsOfService />} />
                </Routes>
              </PageContent>
            </ContentWrapper>
            <Footer />
          </MainContent>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;