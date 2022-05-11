import { EventContent } from "../../components/eventDetail/EventContent";
import { EventLogistics } from "../../components/eventDetail/EventLogistics";
import { EventSummary } from "../../components/eventDetail/EventSummary";
import { getEventById, getFeaturedEvents } from "../../helpers/ApiUtils";

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
    revalidate: 30, // 一覧ページよりも、再作成間隔を短くする。リアルタイム性が要求される場合、client-side-fetchも検討する。
  };
};

// 動的ページの場合、パスのパターンが無限に発生するため、
// 発生しうるパスのパターンを、getStaticPaths関数にて
// あらかじめ定義する必要がある
export const getStaticPaths = async () => {
  // 一部データのみ（＝参照頻度が高いデータのみ）を対象とする。そうすることで、過度にページがSSGされることを避ける。
  const allEvents = await getFeaturedEvents();

  const paths = allEvents.map((event) => ({
    params: {
      eventId: event.id,
    },
  }));

  // fallbackフラグを有効にすることで、存在しないパスを指定された場合、SSGされるようにする
  // fallbackフラグをblockingにした場合も、存在しないパスを指定された場合、SSGされる。
  // trueの場合との違いは、SSGが完了してからクライアントにレスポンスを返すこと。
  // どちらを選ぶかはUX要件次第になる。
  return {
    paths: paths,
    fallback: true,
  };
};

export default EventDetailPage;
