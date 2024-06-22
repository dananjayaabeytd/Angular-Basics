import { RatingRepresentation } from "./rating-representation";

export interface ProductRepresentation {
  id?: number;
  title?: String;
  description?: String;
  category?: String;
  image?: String;
  price?: number;
  rating?:RatingRepresentation
}
