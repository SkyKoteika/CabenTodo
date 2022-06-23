import { PropsWithChildren } from "react";
import clsx from 'clsx';
import useStyles from "./style";
import { PaperProps } from "./PaperProps";

const Paper = (props: PropsWithChildren<PaperProps>) => {
  const classes = useStyles();
  
  return <div className={clsx(classes.root, props.className)}>{props.children}</div>;
};

export default Paper;
