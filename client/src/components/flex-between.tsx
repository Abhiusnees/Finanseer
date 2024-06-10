import { Box } from "@mui/material";
import { styled } from "@mui/system";

//This is a pre styled Box component

const FlexBetween = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export default FlexBetween;
