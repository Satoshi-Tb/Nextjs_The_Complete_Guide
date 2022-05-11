export const getAllEvents = async () => {
  try {
    const res = await fetch(
      "https://udemy-nextjs-cource-default-rtdb.asia-southeast1.firebasedatabase.app/events.json"
    );
    const data = await res.json();

    const events = [];

    for (const key in data) {
      events.push({
        id: key,
        ...data[key],
      });
    }
    return events;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getFeaturedEvents = async () => {
  const allEvents = await getAllEvents();
  return allEvents.filter((evt) => evt.isFeatured);
};

export const getFilteredEvents = async (dateFilter) => {
  const { year, month } = dateFilter;

  const allEvents = await getAllEvents();

  return allEvents.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });
};

export const getEventById = async (id) => {
  const allEvents = await getAllEvents();
  return allEvents.find((evt) => evt.id === id);
};
