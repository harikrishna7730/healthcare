import { ChevronsLeft,ChevronsRight ,Plus  } from 'lucide-react'
import "./CalenderView.css"
import person_avatar from "../../../assets/boy.png"
import Teeth from "../../../assets/molar-.png"
const CalenderView = () => {
  return (
     <>
     <div className='calender-main'>
      <div>
         <div className='right-header'>
            <div><img src={person_avatar} className="Avator-icon avator-img" alt=""   width={24}/></div>
            <div><Plus  className='Avator-icon'/></div>
            </div>
      </div>
        <div className='calender-header'>
          <div><span className='month'>October 2021</span></div>
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
               <span>----</span>
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
                <span id='app-title' >Dentist <span className='app-icon'><img src={Teeth} alt="teeth" width={15} /></span></span>
                <span>09:00-11:00</span>
                <span>Dr.Cameron williamson</span>
             </div>
             <div className='physio'>
                <span id='app-title'>Physiotherapy Appointment <span className='app-icon'> 💪 </span></span>
                <span>11:00-01:00</span>
                <span>Dr.williamson</span>
             </div>
        </div>
     </div>
     </>
  )
}

export default CalenderView;