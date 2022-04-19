import classes from "./EventContent.module.css";
export const EventContent = (props) => {
  const { text, children } = props;
  return <section className={classes.content}>{children}</section>;
};
