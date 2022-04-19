import Image from "next/image";
import { LogisticsItem } from "./LogisticsItem";
import classes from "./EventLogistics.module.css";
import { DateIcon } from "../icons/DateIcon";
import { AddressIcon } from "../icons/AddressIcon";

export const EventLogistics = (props) => {
  const { date, address, image, imageAlt } = props;

  const displayDate = new Date(date).toLocaleDateString("ja-JP", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const addressText = address.replace(", ", "\n");

  return (
    <section className={classes.logistics}>
      <div className={classes.image}>
        <Image
          src={"/" + image}
          alt={imageAlt}
          width={320}
          height={320}
          layout="responsive"
        />
      </div>
      <ul className={classes.list}>
        <LogisticsItem icon={DateIcon}>
          <time>{displayDate}</time>
        </LogisticsItem>
        <LogisticsItem icon={AddressIcon}>
          <address>{addressText}</address>
        </LogisticsItem>
      </ul>
    </section>
  );
};
