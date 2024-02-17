import { Theme } from "@mui/material";
import { css } from "@emotion/css";

export const getClasses = (theme: Theme) => ({
  productCard: css({
    minHeight: "25vh",
  }),
});
