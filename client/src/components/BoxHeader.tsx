import { Box, Typography, useTheme } from "@mui/material";
import FlexBetween from "./flex-between";

type Props = {
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  sideText: string;
  margin?: string;
};

const BoxHeader = ({ icon, title, subtitle, sideText, margin }: Props) => {
  const { palette } = useTheme();
  return (
    <FlexBetween
      color={palette.grey[400]}
      margin={margin ? margin : "1.5rem 1rem 0rem 1rem"}
    >
      <FlexBetween>
        {icon}
        <Box width="100%">
          <Typography variant="h4">{title}</Typography>
          <Typography variant="h6">{subtitle}</Typography>
        </Box>
      </FlexBetween>
      <Typography variant="h5" fontWeight="700" color={palette.secondary[500]}>
        {sideText}
      </Typography>
    </FlexBetween>
  );
};

export default BoxHeader;
