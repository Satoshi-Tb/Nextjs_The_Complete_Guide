import { EventContent } from "../../components/eventDetail/EventContent";
import { EventLogistics } from "../../components/eventDetail/EventLogistics";
import { EventSummary } from "../../components/eventDetail/EventSummary";
import { getAllEvents, getEventById } from "../../helpers/ApiUtils";

const EventDetailPage = (props) => {
  const { selectedEvent } = props;

  if (!selectedEvent) {
    return <p>No event found!</p>;
  }

  return (
    <>
      <EventSummary title={selectedEvent.title} />
      <EventLogistics
        imageAlt={selectedEvent.title}
        image={selectedEvent.image}
        date={selectedEvent.date}
        address={selectedEvent.location}
      />
      <EventContent>
        <p>{selectedEvent.description}</p>
      </EventContent>
    </>
  );
};

export const getStaticProps = async (context) => {
  const eventId = context.params.eventId;

  const event = await getEventById(eventId);

  return {
    props: {
      selectedEvent: event,
    },
  };
};

// 動的ページの場合、パスのパターンが無限に発生するため、
// 発生しうるパスのパターンを、getStaticPaths関数にて
// あらかじめ定義する必要がある
export const getStaticPaths = async () => {
  const allEvents = await getAllEvents();

  const paths = allEvents.map((event) => ({
    params: {
      eventId: event.id,
    },
  }));

  return {
    paths: paths,
    fallback: false,
  };
};

export default EventDetailPage;
