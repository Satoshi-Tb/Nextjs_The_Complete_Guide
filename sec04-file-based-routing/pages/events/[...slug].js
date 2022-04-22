import { EventList } from "../../components/events/EventList";
import { getFilteredEvents } from "../../data/dummy-data";
import { useRouter } from "next/router";

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
    return <p>年月の指定が正しくありません。</p>;
  }

  const events = getFilteredEvents({ year: numYear, month: numMonth });

  if (!events || events.length === 0) {
    return <p>イベントが存在しません</p>;
  }

  return (
    <div>
      <EventList items={events} />
    </div>
  );
};

export default FilteredEventsPage;
