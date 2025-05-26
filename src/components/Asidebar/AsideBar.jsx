import React, { useState } from "react";
import { LayoutDashboard,History,CalendarDays ,ClipboardPlus,ChartColumnIncreasing,MessageCircleMore ,Headset,Settings ,Menu     } from 'lucide-react';
import "./AsideBar.css"; // Importing regular CSS

const AsideBar = () => {
  const [isOpen, setIsOpen] = useState(window.innerWidth > 600); 
  const toggleSidebar = () => setIsOpen(!isOpen);

  const GeneralItems = [
    { icon: <LayoutDashboard />, label: "Dashboard" },
    { icon: <History  />, label: "History" },
    { icon: <CalendarDays  />, label: "Calender" },
    { icon: <ClipboardPlus  />, label: "Appointments" },
    { icon: <ChartColumnIncreasing  />, label: "Statistics" },
  ]
  const ToolItems=[
     { icon: <MessageCircleMore  />, label: "Chat" },
     { icon: <Headset />, label: "Support" },
      { icon: <Settings  />, label: "Settings" },
  ]

  return (
    <aside className="side-nav-container">
      <div className={`side-nav ${isOpen ? "open" : "collapsed"}`}>
        <Menu  className="toggle-icon" onClick={toggleSidebar} />
        {isOpen && <h1 className="logo">Health<span className="care-text">care.</span></h1>}

        <ul className="general-menu">
            <p>General</p>
          {GeneralItems.map((item, index) => (
            <li key={index} className="general-menu-item">
              <span className="icon">{item.icon}</span>
              {isOpen && <span className="label">{item.label}</span>}
            </li>
          ))}
        </ul>
        <ul className="tools-menu">
            <p>Tools</p>
          {ToolItems.map((item, index) => (
            <li key={index} className="tools-menu-item">
              <span className="icon">{item.icon}</span>
              {isOpen && <span className="label">{item.label}</span>}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default AsideBar;
