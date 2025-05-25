import { ChevronsLeft,ChevronsRight ,Plus  } from 'lucide-react'
import "./CalenderView.css"
import person_avatar from "../../assets/boy.png"
const CalenderView = () => {
  return (
     <>
     <div className='calender-main'>
      <div>
         <div className='right-header'>
            <div><img src={person_avatar} className="Avator-icon" alt=""  width={20}/></div>
            <div><Plus  className='Avator-icon'/></div>
            </div>
      </div>
        <div className='calender-header'>
          <div><span>October 2021</span></div>
          <div><span><ChevronsLeft className='left-arrow' /></span><span><ChevronsRight  className='right-arrow'/></span></div>
        </div>
        <div className='calender-card-main'>
           <div className='calender-data-card'>
               <span>Mon</span>
               <span>25</span>
               <span>10:00</span>
               <span>11:00</span>
               <span>12:00</span>
           </div>
            <div className='calender-data-card'>
               <span>Tue</span>
               <span>26</span>
               <span>08:00</span>
               <span>09:00</span>
               <span>10:00</span>
           </div>
            <div className='calender-data-card'>
               <span>Wed</span>
               <span>27</span>
               <span>12:00</span>
               <span>----</span>
               <span>--</span>
           </div>
            <div className='calender-data-card'>
               <span>Tue</span>
               <span>28</span>
               <span>10:00</span>
               <span>11:00</span>
               <span>----</span>
           </div>
            <div className='calender-data-card'>
               <span>Fri</span>
               <span>29</span>
               <span>----</span>
               <span>14:00</span>
               <span>16:00</span>
           </div>
            <div className='calender-data-card'>
               <span>Sat</span>
               <span>30</span>
               <span>12:00</span>
               <span>14:00</span>
               <span>15:00</span>
           </div>
            <div className='calender-data-card'>
               <span>Sun</span>
               <span>31</span>
               <span>09:00</span>
               <span>10:00</span>
               <span>11:00</span>
           </div>
        </div>
        <div className='Appointments'>
             <div className='dentist'>
                <span className='app-title'>Dentist <span className='app-icon'> 😬 </span></span>
                <span>09:00-11:00</span>
                <span>Dr.Cameron williamson</span>
             </div>
             <div className='physio'>
                <span className='app-title'>Physiotherapy Appointment <span className='app-icon'> 💪 </span></span>
                <span>11:00-01:00</span>
                <span>Dr.williamson</span>
             </div>
        </div>
     </div>
     </>
  )
}

export default CalenderView

// import { ChevronsLeft, ChevronsRight } from 'lucide-react';
// import './CalenderView.css';

// const CalenderView = () => {
//   const weekData = [
//     { day: 'Mon', date: 25, times: ['09:00', '11:00'] },
//     { day: 'Tue', date: 26, times: ['13:00'] },
//     { day: 'Wed', date: 27, times: [] },
//     { day: 'Thu', date: 28, times: ['15:00'] },
//     { day: 'Fri', date: 29, times: ['09:00', '11:00', '13:00'] },
//     { day: 'Sat', date: 30, times: [] },
//     { day: 'Sun', date: 31, times: ['11:00'] },
//   ];

//   return (
//     <div className="calender-main">
//       <div className="calender-header">
//         <div><span>October 2021</span></div>
//         <div>
//           <ChevronsLeft className="left-arrow" />
//           <ChevronsRight className="right-arrow" />
//         </div>
//       </div>

//       <div className="calender-grid">
//         {weekData.map((item, idx) => (
//           <div key={idx} className="calender-data-card">
//             <span className="day-label">{item.day}</span>
//             <span className="date-number">{item.date}</span>
//             {item.times.map((time, i) => (
//               <span key={i} className="time-slot">{time}</span>
//             ))}
//           </div>
//         ))}
//       </div>

//       <div className="Appointments">
//         <div className="appointment-card dentist">
//           <span className="title">Dentist <span> 😬 </span></span>
//           <span className="time-range">09:00 - 11:00</span>
//           <span className="doctor">Dr. Cameron Williamson</span>
//         </div>
//         <div className="appointment-card physio">
//           <span className="title">Physiotherapy Appointment <span> 💪 </span></span>
//           <span className="time-range">11:00 - 13:00</span>
//           <span className="doctor">Dr. Williamson</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CalenderView;

