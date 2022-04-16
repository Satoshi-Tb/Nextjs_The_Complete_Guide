import Link from "next/link";
import Image from "next/image";
import classes from "./EventItem.module.css";

export const EventItem = (props) => {
  const { id, title, date, image, location } = props;
  const displayDate = new Date(date).toLocaleDateString("ja-JP", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <li className={classes.item}>
      <Image src={"/" + image} alt={title} width={640} height={427} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2> {title}</h2>
          <div className={classes.date}>
            <time>{displayDate}</time>
          </div>
          <div className={classes.address}>
            <address>{location}</address>
          </div>
        </div>
        <div className={classes.actions}>
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
