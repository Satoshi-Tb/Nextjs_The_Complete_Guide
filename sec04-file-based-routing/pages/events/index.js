import Link from "next/link";
import { EventList } from "../../components/events/EventList";
import { getAllEvents } from "../../data/dummy-data";

const AllEventsPage = (props) => {
  const { events } = props;
  return <EventList items={events} />;
};

export default AllEventsPage;
