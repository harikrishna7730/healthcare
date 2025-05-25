import React from 'react'
import "./UpcomingSchedule.css"
const UpcomingSchedule = () => {
  return (
   <>
    <div className='schedule-main'>
        <h2>The Upcoming Schedule</h2>
        <div>
         <p className='day'>On Thursday</p>
         <div className='schedule-card'>
            <div className='schedule-section-card'>
                   <div> <span className='card-title'>Health checkup complete<span  className='schedule-emoji'> 💉 </span></span> </div>
                <div><span>11:00 AM</span></div>
            </div>
             <div className='schedule-section-card'>
                  <div> <span className='card-title'>Ophthalmologist<span  className='schedule-emoji'> 👁️ </span></span> </div>
                <div><span>14:00 PM</span></div>
            </div>
         </div>
         </div>
         <div>
         <p className='day'>On Thursday</p>
         <div className='schedule-card'>
            <div className='schedule-section-card'>
                <div> <span className='card-title'>Cardiologist<span  className='schedule-emoji'> 🙎‍♂️ </span></span> </div>
                <div><span>12:00 AM</span></div>
            </div>
             <div className='schedule-section-card'>
                <div> <span className='card-title'>Neurologist<span  className='schedule-emoji'> 🙎‍♂️ </span></span> </div>
                <div><span>16:00 PM</span></div>
            </div>
         </div>
         </div>
    </div>
   </>
  )
}

export default UpcomingSchedule
