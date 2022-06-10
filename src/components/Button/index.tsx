import clsx from "clsx";
import "./style.ts";
import { PropsWithChildren } from "react";
import useStyles from "./style";

type ButtonVariant = "primary" | "secondary" | "destructive";

type ButtonProps = {
  variant?: ButtonVariant;
  className?: string;
  onClick?: () => void;
};

const Button = (props: PropsWithChildren<ButtonProps>) => {
  const classes = useStyles();

  return (
    <button
      className={clsx(classes.button, props.variant ?? "primary", props.className)}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
