import { EventList } from "../../components/events/EventList";
import { getAllEvents } from "../../data/dummy-data";
import { EventsSearch } from "../../components/events/EventsSearch";
import { useRouter } from "next/router";

const AllEventsPage = () => {
  const events = getAllEvents();
  const router = useRouter();

  const handleEventsSearch = (year, month) => {
    const url = `/events/${year}/${month}`;
    router.push(url);
  };

  return (
    <>
      <EventsSearch onSearch={handleEventsSearch} />
      <EventList items={events} />
    </>
  );
};

export default AllEventsPage;
