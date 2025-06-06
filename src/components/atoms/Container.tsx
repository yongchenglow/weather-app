import FixedWidthGridItem from "@/components/atoms/FixedWidthGridItem";
import { Grid } from "@mui/material";

type ContainerProps = {
  children: React.ReactNode;
};

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <Grid container justifyContent="center" margin={{ xs: 2, md: 3 }}>
      <FixedWidthGridItem size={{ xs: 12, md: "auto" }}>{children}</FixedWidthGridItem>
    </Grid>
  );
};

export default Container;
