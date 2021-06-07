import type { FC } from 'react';

interface Props {
  schedule: any;
}

export const Schedules: FC<Props> = ({ schedule }: Props) => {
  const isoDate = new Date(schedule.datetime)
  const datetime = isoDate.toLocaleString('en-US', { 
    weekday: 'short', 
    month: 'short', 
    day: 'numeric', 
    hour: 'numeric', 
    minute: 'numeric', 
    hour12: true 
  }).toUpperCase()
	return (
      <div>
        <p>
          {schedule.venueName}
          <br/>
          {datetime}
        </p>
      </div>
	)
}

export default Schedules