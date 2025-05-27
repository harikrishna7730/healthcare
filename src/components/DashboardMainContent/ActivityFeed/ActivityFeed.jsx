import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import './ActivityFeed.css';

const data = [
  { name: 'Mon', appt1: 4, appt2: 2 },
  { name: 'Tues', appt1: 3, appt2: 5 },
  { name: 'Wed', appt1: 5, appt2: 3 },
  { name: 'Thurs', appt1: 4, appt2: 4 },
  { name: 'Fri', appt1: 6, appt2: 2 },
  { name: 'Sat', appt1: 5, appt2: 4 },
  { name: 'Sun', appt1: 3, appt2: 5 },
];

const ActivityFeed = () => {
  return (
    <div className="Activity_Feed_main">
      <div className="Activity_feed_header">
        <div className="title">Activity</div>
        <div className="sub-title">3 appointments on this week</div>
      </div>

      <div className="Activity_feed_dates">
        <ResponsiveContainer width="100%" height={100}>
          <BarChart data={data} barGap={5}>
            <XAxis dataKey="name" axisLine={false} tickLine={false} />
            <YAxis hide />
            <Tooltip />
            <Bar dataKey="appt1" fill="#00D4FF" radius={[4, 4, 0, 0]} barSize={6} />
            <Bar dataKey="appt2" fill="#6A5AE0" radius={[4, 4, 0, 0]} barSize={6} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ActivityFeed;
