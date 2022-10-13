import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { movies } from "../../types/TopMovies";
import { IMAGE_URL } from "../../constants/url";

export default function CardMovie({
  title,
  poster_path,
  release_date,
  onClickLearn,
  onClickShare,
  learn,
  share,
}: movies) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="500"
        image={`${IMAGE_URL}${poster_path}`}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {release_date}
        </Typography>
      </CardContent>
      <Button onClick={onClickLearn}>{learn}</Button>
      <Button onClick={onClickShare}>{share}</Button>
    </Card>
  );
}
