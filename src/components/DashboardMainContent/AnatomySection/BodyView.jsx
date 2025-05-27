import "./BodyView.css";
import humanBody from "../../../assets/body-img.webp";
import { ZoomIn } from "lucide-react";
import leg from "../../../assets/leg.png"
import Heart from "../../../assets/heart.png"
import HealthCards from "../HealthStatusCards/HealthCards";
import ActivityFeed from "../ActivityFeed/ActivityFeed";
const BodyView = () => {
  return (
    <>
    <div className="dashboard_left_side_container">

      <div className="dashboard_left_side_top">
        <h1>Dashbaord</h1>
        <div>
           <select>
            <option>This Week</option>
            <option>Previous Week</option>
            <option>Next Week</option>
          </select>
        </div>
      </div>
    
      <div className="dashboard_left_content_container">
        <div className="dashboard_left_content_body_container">
          <div className="dashboard_left_body_search">
            <ZoomIn className="dashboard_left_body_icon" />
          </div>
          <div className="dashboard_left_body_div">
            <img src={humanBody} alt="humanBody" />
          </div>
          <div className="dashboard_left_body_content1_div">
            <div><img src={Heart} alt="love" width={25}/></div>
            <div><span>Healthy Heart</span></div>
          </div>
          <div className="dashboard_left_body_content2_div">
            <div><img src={leg} alt="bone" width={30} /></div>
            <div><span>Healthy Leg</span></div>
          </div>
        </div>
      </div>
      <div className="Health_card">
        <HealthCards/>
      </div>
      <div className="Acitivty_Feed">
        <ActivityFeed/>
      </div>
    </div>
      </>
  );
};

export default BodyView;
