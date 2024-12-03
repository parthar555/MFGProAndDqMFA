import React from 'react';
import { Button, Layout, Menu, theme } from 'antd';
import './App.scss'; // Import custom CSS
import mySvg from './assets/logo.svg';
import BootStrapMenu from "./Components/bootMenu";
import BootStrapMenuPMO from "./Components/bootMenuPMO";
import BootStrapMenuPO from "./Components/bootMenuPO";
import DJButtonWithPopover from './Components/logoutBtn';
import { icons } from 'antd/es/image/PreviewGroup';
import { Routes, Route, Navigate, Link, Router, useParams, useLocation } from "react-router-dom";
import SiteAdmin from './Sections/SiteAdmin';
import Reports from './Sections/Reports';
import Preview from './Sections/Preview';
import PO from './Sections/PO';
import PMO from './Sections/PMO';
import PSFigmaScreen from './Sections/PSFigmaScreen'; 
import MSFigmaScreen from './Sections/MSFigmaScreen';
import PMOSAFigmaScreen from './Sections/PMOSAFigmaScreen';
// import AppRemote from 'remote/App';
const DqApplication = React.lazy(() => import('remote/App'))
const JobIndicatoreApplication = React.lazy(() => import('remoteJobIndicator/App'))


const { Header, Content, Footer, Sider } = Layout;

const App = () => {
  const param = useLocation();
  
  const pickLeftNavigationToDisplay = () => {
    switch (param.pathname) {
      case '/site-admin/sa':
        return <BootStrapMenu />;
      case '/po':
        return <BootStrapMenuPO />;
      case '/pmo':
        return <BootStrapMenuPMO />;
      case '/PMOSAFigmaScreen':
          return <BootStrapMenuPMO />;
      case '/MSFigmaScreen':
            return <BootStrapMenuPMO />;
      case '/dq':
        <BootStrapMenu />;
      default:
        return <BootStrapMenu />;
    }
  }

  return (
    <Layout style={{ height: "100vh", width: "100%" }}>
      <Sider width="10%" className='slider' style={{ backgroundColor: '#ffffff' }}>
        <div style={{ textAlign: "center", margin: "5% 0% 15% 0%" }}>
          <img src={mySvg} alt="My SVG Icon" width="32px" height="32px" />
        </div>
        <div style={{ textAlign: "center", margin: "5% 0% 15% 0%" }}>
          <img src=" https://sso.mypepsico.com/login/images/pepsico.png" alt="My SVG Icon" width="80px" height="20px" />
        </div>
        {pickLeftNavigationToDisplay()}
      </Sider>

      <Layout style={{ height: "100vh", width: "100%" }}>
        <Header className=' header custom-header'
          style={{ width: "100%", borderBottom: "1.5px solid #d0cdf5", backgroundColor: "#f5f5f5" }}
        >
          <div className='header-container'>
  
            <div className="testrole" disabled>{param.pathname.replace("/", "").toLocaleUpperCase()}</div>
          
              <div className="header-dd">
              <select className="form-select header-dd" aria-label="Default select example" value="LE-USA025" disabled>
                <option selected>Frito-LayInc.</option>
              </select>

            </div>
            <div className="header-dd">
              <select className="form-select header-dd" aria-label="Default select example" disabled>
                <option selected>LE-USA025</option>

              </select>

            </div>
            <div className="header-dd">
              <select className="form-select header-dd" aria-label="Default select example" disabled>
                <option selected>LE-USA025</option>
              </select>
            </div>
            <div>
              <DJButtonWithPopover />
            </div>
          </div>
        </Header>
        <Content
          style={{ width: "100%", borderBottom: "1.5px solid #d0cdf5" }}
        >
          <div>
            <Routes>
              <Route
                path='/site-admin'
                element={<SiteAdmin />}
                exact
              ></Route>
              <Route
                path='/reports'
                element={<Reports />}
                exact
              ></Route>
              <Route
                path='/preview'
                element={<Preview />}
                exact
              ></Route>
              <Route
                path='/po'
                element={<PO />}
                exact
              ></Route>
              <Route
                path='/pmo'
                element={<PMO />}
                exact
              ></Route>
               <Route
                path='/psfigmascreen'
                element={<PSFigmaScreen />}
                exact
              ></Route>
              <Route
                path='/msfigmascreen'
                element={<MSFigmaScreen />}
                exact
              ></Route>
               <Route
                path='/pmosafigmascreen'
                element={<PMOSAFigmaScreen />}
                exact
              ></Route>
              <Route
                path='/dq'
                element={<DqApplication />}
                exact
              ></Route>
              <Route
                path='/job-indicator'
                element={<JobIndicatoreApplication />}
                exact
              ></Route>
            </Routes>
          </div>
        </Content>
        <Footer
          style={{ width: "100%", borderBottom: "1.5px solid #d0cdf5" }}
          className='footer'
        >
        <div style={{ textAlign: "center", margin:"0 auto" ,fontSize: "0.9em", color: "#6c757d" }}>
          © 2024 PepsiCo. All rights reserved. | Privacy Policy | Terms of Service
        </div></Footer>
      </Layout>
    </Layout>
  );
};
export default App;