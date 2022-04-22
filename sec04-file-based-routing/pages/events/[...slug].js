import { EventList } from "../../components/events/EventList";
import { getFilteredEvents } from "../../data/dummy-data";
import { useRouter } from "next/router";
import { ResultsTitle } from "../../components/events/ResultsTitle";
import { ErrorAlert } from "../../components/ui/ErrorAlert";

const FilteredEventsPage = () => {
  const router = useRouter();
  const filterData = router.query.slug;

  if (!filterData) {
    return <p className="center">Loading...</p>;
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
    return (
      <ErrorAlert>
        <p>年月の指定が正しくありません。</p>
      </ErrorAlert>
    );
  }

  const events = getFilteredEvents({ year: numYear, month: numMonth });

  if (!events || events.length === 0) {
    return (
      <ErrorAlert>
        <p>イベントが存在しません</p>
      </ErrorAlert>
    );
  }

  const date = new Date(numYear, numMonth - 1);
  return (
    <>
      <ResultsTitle date={date} />
      <EventList items={events} />
    </>
  );
};

export default FilteredEventsPage;
