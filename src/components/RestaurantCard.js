import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
} from "@mui/material";
import BasicRating from "./Ratings";

export default function RestaurantCard({ name, photoUrl, restaurant }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={photoUrl}
          alt="Restaurant photo"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <BasicRating />
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
