import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";

export default function BasicCard({text}) {
  return (
    <Card sx={{ margin: '1.5rem 0', minWidth: 275 }}>
      <CardContent sx={{ display: "grid" }}>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {text}
        </Typography>
      </CardContent>
    </Card>
  );
}
