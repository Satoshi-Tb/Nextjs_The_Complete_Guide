import { EventList } from "../../components/events/EventList";
import { getFilteredEvents } from "../../data/dummy-data";
import { useRouter } from "next/router";
import { ResultsTitle } from "../../components/events/ResultsTitle";
import { ErrorAlert } from "../../components/ui/ErrorAlert";

// Fetch戦略について
// Static Site Generationは適さない。
// ・全ての条件の組み合わせを作成するとなると、ページ数が膨大になり冗長
// ・いくつかピックアップするとしても、特定の条件が利用されやすいということがないので妥当なピックアップが難しい
// Server Side Rendering 、または Client Side Fetchのどちらかが適している
// 本画面はServer Side Renderingで実装
// Client Side Fetchの場合、useEffect＋適当なFetch API、もしくはuseSWR＋適当なFetch API
const FilteredEventsPage = (props) => {
  const { filteredEvents, hasError, errorMessage, date } = props;

  if (hasError) {
    return (
      <ErrorAlert>
        <p>{errorMessage}</p>
      </ErrorAlert>
    );
  }

  return (
    <>
      <ResultsTitle date={new Date(date.year, date.month - 1)} />
      <EventList items={filteredEvents} />
    </>
  );
};

export const getServerSideProps = async (context) => {
  const { params } = context;

  // contextからURLパラメータ（...slug部分）を取得する
  const filterData = params.slug;

  const props = {
    filteredEvents: {},
    hasError: false,
    errorMessage: "",
    date: {},
  };

  if (!filterData) {
    props.hasError = true;
    props.errorMessage = "年月の指定が正しくありません。";
    return { props: props };
  }

  const year = filterData[0];
  const month = filterData[1];
  const numYear = +year;
  const numMonth = +month;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear < 2020 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    props.hasError = true;
    props.errorMessage = "年月の指定が正しくありません。";
    return { props: props };
  }

  props.date = { year: numYear, month: numMonth };

  const filteredEvents = await getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  if (filteredEvents.length === 0) {
    props.hasError = true;
    props.errorMessage = "イベントが存在しません";
    return { props: props };
  }

  props.filteredEvents = filteredEvents;
  return {
    props: props,
  };
};

export default FilteredEventsPage;
