import image from "../asset/image/room4.jpeg";
import image1 from "../asset/image/background3.jpeg";
import image2 from "../asset/image/background4.jpeg";
import image3 from "../asset/image/background6.jpeg";
import room2 from "../asset/image/room2.webp";
export let HomestayData = [
  {
    homestayId: 1,
    city: "Luxury house in Pleiku",
    rating: 4.5,
    homestayName: "XOM Organic Farm Stay",
    image: image,
    rule: "5 guests · 2 bedroom · 3 beds · 2 bath",
    totalReviews: 50,
  },
  {
    homestayId: 2,
    city: "Peace and love homestay in Ho Chi Minh City",
    rating: 3.5,
    homestayName: "Deluxe Family Suite",
    image: image1,
    rule: "2 guests · 1 bedroom · 1 beds · 1 bath",
    totalReviews: "100+",
  },
  {
    homestayId: 3,
    city: "Unique stays in Can Tho City",
    rating: 5,
    homestayName: "Chillout Village Homestay",
    image: image2,
    rule: "10 guests · 4 bedroom · 5 beds · 3 bath",
    totalReviews: 30,
  },
  {
    homestayId: 4,
    city: "Entire apartment in Da Lat City",
    rating: 5,
    homestayName: "Trang An Lamia Bungalow",
    image: image3,
    rule: "12 guests · 5 bedroom · 6 beds · 4 bath",
    totalReviews: 40,
  },
  {
    homestayId: 5,
    city: "Entire apartment in Da Lat City",
    rating: 3,
    homestayName: "Fodawy white house - One step to center",
    image: room2,
    rule: "5 guests · 1 bedroom · 3 beds · 1 bath",
    totalReviews: 13,
  },
];
export const getSavedHomestayData = () => {
  return HomestayData.filter((homestay) => homestay.isSaved);
};
export const getHomestayData = (id) => {
  return HomestayData.find((homestay) => homestay.homestayId === parseInt(id));
};