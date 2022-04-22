import { Button } from "../ui/Button";
import { toDisplayDateString } from "../util/Common";
import classes from "./ResultsTitle.module.css";

export const ResultsTitle = (props) => {
  const { date } = props;

  const humanReadableDate = toDisplayDateString(date);

  return (
    <section className={classes.title}>
      <h1>{humanReadableDate}のイベント</h1>
      <Button link="/events">全てのイベントを表示</Button>
    </section>
  );
};
