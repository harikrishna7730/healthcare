import React from "react";
import "./BodyView.css";
import humanBody from "../../assets/humanBody.avif";
import { ZoomIn } from "lucide-react";


const BodyView = () => {
  return (
    <div className="dashboard_left_side_container">
      <div className="dashboard_left_side_top">
        <h1>Dashbaord</h1>
        <select>
          <option>This Week</option>
          <option>Previous Week</option>
          <option>Next Week</option>
        </select>
      </div>
      <div className="dashboard_left_content_container">
        <div className="dashboard_left_content_body_container">
          <div className="dashboard_left_body_search">
            <ZoomIn />
          </div>
          <div className="dashboard_left_body_div">
            <img src={humanBody} alt="humanBody" />
          </div>
          <div className="dashboard_left_body_content1_div">
            <img src="love" alt="" />
            <p>Healthy Heart</p>
          </div>
          <div className="dashboard_left_body_content2_div">
            <img src="bone" alt="bone" />
            <p>Healthy Leg</p>
          </div>
        </div>
        <div className="dashboard_left_content_box_container">
          <div className="dashboard_left_content_box">
            <div className="dashboard_left_content_box_top">
              <img src="" alt="" />
              <h3>Lungs</h3>
            </div>
            <div className="dashboard_left_content_box_btm">
              <p>Date: 26 oct 2021</p>
            </div>
          </div>
          <div className="dashboard_left_content_box">
            <div className="dashboard_left_content_box_top">
              <img src="" alt="" />
              <h3>Lungs</h3>
            </div>
            <div className="dashboard_left_content_box_btm">
              <p>Date: 26 oct 2021</p>
            </div>
          </div>
          <div className="dashboard_left_content_box">
            <div className="dashboard_left_content_box_top">
              <img src="" alt="" />
              <h3>Lungs</h3>
            </div>
            <div className="dashboard_left_content_box_btm">
              <p>Date: 26 oct 2021</p>
            </div>
          </div>

          <div>
            <p>Details </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyView;
