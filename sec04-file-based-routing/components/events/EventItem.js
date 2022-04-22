import Image from "next/image";
import classes from "./EventItem.module.css";
import { Button } from "../ui/Button";
import { AddressIcon } from "../icons/AddressIcon";
import { DateIcon } from "../icons/DateIcon";
import { ArrowRightIcon } from "../icons/ArrowRightIcon";
import { toDisplayDateString } from "../util/Common";

export const EventItem = (props) => {
  const { id, title, date, image, location } = props;
  const displayDate = toDisplayDateString(date);
  return (
    <li className={classes.item}>
      <Image src={"/" + image} alt={title} width={640} height={427} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2> {title}</h2>
          <div className={classes.date}>
            <DateIcon />
            <time>{displayDate}</time>
          </div>
          <div className={classes.address}>
            <AddressIcon />
            <address>{location}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={`/events/${id}`}>
            <span>詳細</span>
            <span className={classes.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
};
