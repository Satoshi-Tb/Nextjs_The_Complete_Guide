import Link from "next/link";
import classes from "./Button.module.css";

export const Button = (props) => {
  const { link, children } = props;
  return (
    <Link href={link}>
      <a className={classes.btn}>{children}</a>
    </Link>
  );
};
