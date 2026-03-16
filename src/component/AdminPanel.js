import './AdminPanel.css'
import { useState } from 'react';

export default function AdminPanel() {
     const [sidebar, setSidebar] = useState(false);
  return (
    <div>
      {/* Sidebar */}

      <div className='sidebars'>
         <div
            className={`hamburger ${sidebar ? "active" : ""}`}
            onClick={() => setSidebar(!sidebar)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
      </div>
    </div>
  )
}
