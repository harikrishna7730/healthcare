import "./App.css";
import AsideBar from "./components/Asidebar/AsideBar";
import CalenderView from "./components/DashboardMainContent/CalenderView/CalenderView";
import Navbar from "./components/DashboardMainContent/Navbar/Navbar";
import UpcomingSchedule from "./components/DashboardMainContent/UpcomingSchedule/UpcomingSchedule";
import BodyView from "./components/DashboardMainContent/AnatomySection/BodyView"

function App() {
  return (
    <>
      <div className="App">
        <div className="section-1">
          <AsideBar />
        </div>
        <div className="section-2">
          <Navbar />
          <BodyView />
        </div>

        <div className="section-3">
          <div>
            <CalenderView />
          </div>
          <div>
            <UpcomingSchedule />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
