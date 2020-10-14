import React from 'react';

import Title from '../components/Title';
import { calendarId } from '../data/info.json'

// const useWindowSize = () => {
//   const [size, setSize] = useState([0, 0]);
//   useLayoutEffect(() => {
//     function updateSize() {
//       setSize([window.innerWidth, window.innerHeight]);
//     }
//     window.addEventListener('resize', updateSize);
//     updateSize();
//     return () => window.removeEventListener('resize', updateSize);
//   }, []);
//   return size;
// }

const CalendarEmbed = () => {
  const height = 600;

  return (<iframe
    title="Calendar"
    src={`https://calendar.google.com/calendar/embed?height=${height}&wkst=1&bgcolor=%237986CB&ctz=America%2FChicago&src=${calendarId}&color=%230B8043&showTz=0&showTitle=0&showNav=0&showDate=0&showTabs=0&mode=AGENDA&showCalendars=0&showPrint=0&title=Embed%20Example`}
    frameBorder="0"
    scrolling="no"
    className="calendarEmbed"
  ></iframe>);
}

export default () => (
  <>
    <Title>Coming Up:</Title>
    <CalendarEmbed />
  </>
)