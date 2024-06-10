import { Box } from "@mui/material";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Autoplay } from "swiper/modules";
import ButtonIcon from "../Shared/ButtonIcon";

function CustomNavigationButtons() {
  const swiper = useSwiper();
  return (
    <Box
      sx={{
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        zIndex: 5,
      }}
    >
      <ButtonIcon
        icon={<ChevronLeftIcon sx={{height:40, width:40}} />}
        onClick={() => swiper.slidePrev()}
        bgcolor="transparent"
        color="#e69d21"
      />
      <ButtonIcon
        icon={<ChevronRightIcon sx={{height:40, width:40}} />}
        onClick={() => swiper.slideNext()}
        bgcolor="transparent"
        color="#e69d21"
      />
    </Box>
  );
}

interface MoonCarouselProps {
  images: string[];
}

const MoonCarousel: React.FC<MoonCarouselProps> = ({ images }) => {
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 10000,
        disableOnInteraction: false,
      }}
      style={{
        position: "relative",
        width: "100vw",
      }}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <Box sx={{height:{xs:"300px", md:"100vh"}}}>
            <img
              src={image}
              alt={`Slide ${index}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          </Box>
        </SwiperSlide>
      ))}
      <CustomNavigationButtons />
    </Swiper>
  );
};

export default MoonCarousel;
