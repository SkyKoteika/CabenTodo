import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme) => ({
  button: {
    width: "100%",
    height: 50,
    fontSize: 20,
    boxSizing: "border-box",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    cursor: "pointer",
    transitionDuration: "0.4s",

    "&.primary": {
      backgroundColor: "black",
      color: "white",
      border: "2px solid transparent",
    },

    "&.secondary": {
      backgroundColor: "white",
      color: "black",
      border: "2px solid black",
    },

    "&:hover": {
      backgroundColor: "gray",
      color: "black",
      border: "2px solid #000000",
    },

    "&.destructive": {
      backgroundColor: "red",
      color: "white",
      border: "2px solid transparent",

      "&:hover": {
        backgroundColor: "white",
        color: "red",
        border: "2px solid red",
      },
    },
  },
}));

export default useStyles;
