import { createBoard } from "@wixc3/react-board";
import MoonCarousel from "../../../components/Moon/MoonCarousel";

const imageArray = [
  "https://via.placeholder.com/500x300.png?text=Image+1",
  "https://via.placeholder.com/500x300.png?text=Image+2",
  "https://via.placeholder.com/500x300.png?text=Image+3",
  "https://via.placeholder.com/500x300.png?text=Image+4",
  "https://via.placeholder.com/500x300.png?text=Image+5",
];

export default createBoard({
  name: "MoonCarousel",
  Board: () => <MoonCarousel images={imageArray} />,
  isSnippet: true,
  environmentProps: {
    windowWidth: 811,
  },
});
