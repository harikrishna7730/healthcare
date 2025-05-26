import "./App.css";
import AsideBar from "./components/Asidebar/AsideBar";
import BodyView from "./components/bodyView/BodyView";
import CalenderView from "./components/CalenderView/CalenderView";
import Navbar from "./components/Navbar/Navbar";
import UpcomingSchedule from "./components/UpcomingSchedule/UpcomingSchedule";

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
