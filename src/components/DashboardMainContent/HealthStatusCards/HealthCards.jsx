
import React from 'react';
import "./HealthCards.css"
import healthData from '../../../data/HealthData';

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
                style={{ width: `${item.progress}%` }}
              ></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HealthCards;
