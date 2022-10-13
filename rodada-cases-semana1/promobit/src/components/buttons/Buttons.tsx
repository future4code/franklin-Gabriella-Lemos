import * as React from "react";

import Button from "@mui/material/Button";

type Props = {
  texto: string;
  onClick: void;
};

const Buttons = ({ texto }: Props) => {
  return (
    <Button variant="outlined" color="info" sx={{ backgroundColor: "white" }}>
      {texto}
    </Button>
  );
};

export default Buttons;
