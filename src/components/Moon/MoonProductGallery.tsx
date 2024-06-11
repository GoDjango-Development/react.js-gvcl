import React, { useState } from "react";
import { Grid, Box } from "@mui/material";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { Swiper as SwiperType } from "swiper/types";

interface CustomVerticalNavigationButtonsProps {
  showUpButton: boolean;
  showDownButton: boolean;
}

function CustomVerticalNavigationButtons({
  showUpButton,
  showDownButton,
}: CustomVerticalNavigationButtonsProps) {
  const swiper = useSwiper();
  return (
    <Box>
      {showUpButton && (
        <Box
        onClick={() => swiper.slidePrev()}
        sx={{
          position: "absolute",
          top: "0",
          display: "flex",
          justifyContent: "center",
          width: "100%",
          height: "30px",
          backgroundImage: "linear-gradient(white, white, transparent)",
          zIndex: 5,
        }}
      >
          <ArrowUpwardIcon 
            sx={{ height: 30, width: 30, color: "#e69d21", cursor: "pointer" }}
            />
        </Box>
      )}

      {showDownButton && (
        <Box
          onClick={() => swiper.slideNext()}
          sx={{
            position: "absolute",
            bottom: "0",
            display: "flex",
            justifyContent: "center",
            width: "100%",
            height: "30px",
            backgroundImage: "linear-gradient(transparent, white, white)",
            zIndex: 5,
          }}
        >
          <ArrowDownwardIcon
            sx={{ height: 30, width: 30, color: "#e69d21", cursor: "pointer" }}
          />
        </Box>
      )}
    </Box>
  );
}

interface MoonProductGalleryProps {
  images: string[];
}

const MoonProductGallery: React.FC<MoonProductGalleryProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [showUpButton, setShowUpButton] = useState(false);
  const [showDownButton, setShowDownButton] = useState(true);

  const handleSlideChange = (swiper: SwiperType) => {
    const slidesToShow = window.innerWidth < 500 ? 4 : 3;
    if (swiper.activeIndex === 0) {
      setShowUpButton(false);
      setShowDownButton(true);
    } else if (swiper.activeIndex === images.length - slidesToShow) {
      setShowUpButton(true);
      setShowDownButton(false);
    } else {
      setShowUpButton(true);
      setShowDownButton(true);
    }
    setSelectedImage(images[swiper.activeIndex]);
  };

  return (
    <Grid
      container
      spacing={2}
      sx={{ width: "650px", maxWidth:"100%", height: { xs: "280px", md: "350px" } }}
    >
      <Grid item xs={3}>
        <Box
          sx={{
            position: "relative",
            height: { xs: "280px", md: "350px" },
          }}
        >
          <Swiper
            direction="vertical"
            breakpoints={{
                0: { slidesPerView: 4 },
                500: { slidesPerView: 3 }
              }}            
            onSlideChange={handleSlideChange}
            style={{ height: "100%" }}
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <Box
                  component="img"
                  src={image}
                  alt={`Image ${index + 1}`}
                  sx={{
                    width: "100%",
                    height: "100",
                    cursor: "pointer",
                    borderRadius: 3,
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                  onClick={() => setSelectedImage(image)}
                />
              </SwiperSlide>
            ))}
            <CustomVerticalNavigationButtons
              showUpButton={showUpButton}
              showDownButton={showDownButton}
            />
          </Swiper>
        </Box>
      </Grid>
      <Grid item xs={9} sx={{width:"100%", height:"100%"}}>
        <Box
          component="img"
          src={selectedImage}
          alt="Selected"
          sx={{
            width: "100%",
            height: "100%",
            borderRadius: 3,
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </Grid>
    </Grid>
  );
};

export default MoonProductGallery;
