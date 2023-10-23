import { useState } from 'react';
import './App.css';
import Adminbody from './components/adminbody/Adminbody';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  const [showSidebar,setShowSidebar] = useState(true);

  const handleSidebar = () => {
    setShowSidebar(true);
  }

  const hideSidebar = () => {
    setShowSidebar(false);
  }

  return (
    <div className="main">
      {showSidebar && <Sidebar hideSidebar={hideSidebar}/>}
      <Adminbody handleSidebar={handleSidebar}/>
    </div>
  );
}

export default App;
