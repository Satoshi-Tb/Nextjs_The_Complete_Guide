import { EventList } from "../components/events/EventList";
import { getFeaturedEvents } from "../helpers/ApiUtils";

// client-side fetchする場合、
// useEffect & fetch か useSWRを利用する
// トップレベルコンポーネントをasyncにするとうまく動作しない

// static site generation利用の場合、getStaticPropsを利用
const HomePage = (props) => {
  const { featuredEvents } = props;

  // console.log(featuredEvents);

  return (
    <div>
      <EventList items={featuredEvents} />
    </div>
  );
};

export default HomePage;

export const getStaticProps = async () => {
  const featuredEvents = await getFeaturedEvents();
  return {
    props: {
      featuredEvents: featuredEvents,
    },
    revalidate: 1800, // 再作成間隔を秒単位で設定する。設定時間は要件次第。
  };
};
