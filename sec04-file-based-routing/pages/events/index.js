import { EventList } from "../../components/events/EventList";
import { EventsSearch } from "../../components/events/EventsSearch";
import { useRouter } from "next/router";
import { getAllEvents } from "../../helpers/ApiUtils";
import Head from "next/head";

const AllEventsPage = (props) => {
  const { allEvents } = props;
  const router = useRouter();

  const handleEventsSearch = (year, month) => {
    const url = `/events/${year}/${month}`;
    router.push(url);
  };

  return (
    <>
      <EventsSearch onSearch={handleEventsSearch} />
      <EventList items={allEvents} />
    </>
  );
};

export default AllEventsPage;

export const getStaticProps = async () => {
  const allEvents = await getAllEvents();

  return {
    props: {
      allEvents: allEvents,
    },
    revalidate: 60,
  };
};
