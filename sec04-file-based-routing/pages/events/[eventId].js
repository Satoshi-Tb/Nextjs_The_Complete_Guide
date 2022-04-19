import { useRouter } from "next/router";
import { EventContent } from "../../components/eventDetail/EventContent";
import { EventLogistics } from "../../components/eventDetail/EventLogistics";
import { EventSummary } from "../../components/eventDetail/EventSummary";
import { getEventById } from "../../data/dummy-data";

const EventDetailPage = () => {
  const router = useRouter();
  const eventId = router.query.eventId;
  const event = getEventById(eventId);
  if (!event) {
    return <p>No event found!</p>;
  }

  return (
    <>
      <EventSummary title={event.title} />
      <EventLogistics
        imageAlt={event.title}
        image={event.image}
        date={event.date}
        address={event.location}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
};

export default EventDetailPage;
