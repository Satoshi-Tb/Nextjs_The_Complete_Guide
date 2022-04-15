import Link from "next/link";
import Image from "next/image";
export const EventItem = (props) => {
  const { id, title, date, image, location } = props;
  const displayDate = new Date(date).toLocaleDateString("ja-JP", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <li>
      <Image src={"/" + image} alt={title} width={640} height={427} />
      <div>
        <div>
          <h2> {title}</h2>
          <div>
            <time>{displayDate}</time>
          </div>
          <div>
            <address>{location}</address>
          </div>
        </div>
        <div>
          <Link
            href={{
              pathname: "/events/[eventId]",
              query: { eventId: id },
            }}
          >
            詳細&gt;&gt;
          </Link>
        </div>
      </div>
    </li>
  );
};
