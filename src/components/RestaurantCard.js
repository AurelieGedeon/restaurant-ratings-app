import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
} from "@mui/material";
import BasicRating from "./Ratings";

export default function RestaurantCard({ restaurant, rating, setRestaurants }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={restaurant.photoUrl}
          alt="Restaurant photo"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {restaurant.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <BasicRating
              rating={restaurant.rating}
              id={restaurant.id}
              setRestaurants={setRestaurants}
              photoUrl={restaurant.photoUrl}
              name={restaurant.name}
            />
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
