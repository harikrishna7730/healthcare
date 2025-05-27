
import React from 'react';
import "./HealthCards.css"
import healthData from '../../../data/HealthData';
import { ArrowRight } from 'lucide-react';
const HealthCards = () => {
  return (
    <div className="dashboard_left_content_box_container">
      {healthData.map((item) => (
        <div className="dashboard_left_content_box" key={item.id}>
          <div className="dashboard_left_content_box_top">
            <div><img src={item.image} alt={item.title} width={32} /></div>
            <div><span>{item.title}</span></div>
          </div>
          <div className="dashboard_left_content_box_btm">
            <p>Date: {item.date}</p>
            <div className="progress-bar">
              <div
    className="progress-fill"
    style={{
      width: `${item.progress}%`,
      backgroundColor:
        item.title === "Lungs"
          ? "brown"
          : item.title === "Teeth"
          ? "green"
          : item.title === "Bone"
          ? "orange"
          : "#2196f3",
    }}
  ></div>
            </div>
          </div>
        </div>
      ))}
      <div><span className='details-arrow'>Details <ArrowRight size={16}/></span></div>
    </div>
  );
};

export default HealthCards;
