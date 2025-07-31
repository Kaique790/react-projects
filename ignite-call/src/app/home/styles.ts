import { Heading, styled, Text } from "@ignite-ui/react";

export const Container = styled("div", {
  maxWidth: "calc(100vw - (100vw - 1160px) / 2)",
  marginLeft: "auto",
  overflowX: "hidden",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  gap: "$40",
});

export const Hero = styled("div", {
  maxWidth: 400,
  padding: "0 $10",

  [`> ${Heading}`]: {
    "@media(max-width: 600px)": {
      fontSize: "$6xl",
    },
  },

  [`> ${Text}`]: {
    marginTop: "$2",
    color: "$gray200",
  },
});

export const Preview = styled("div", {
  paddingRight: "$8",
  overflow: "hidden",

  "@media(max-width: 600px)": {
    display: "none",
  },
});
