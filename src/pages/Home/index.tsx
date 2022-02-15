import React from "react";
import Header from "../../components/Header";
import Button from "../../components/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper";
import PizzaOne from "../../assets/images/pizza-1.png";
import PizzaTwo from "../../assets/images/pizza-2.png";
import PizzaThree from "../../assets/images/pizza-3.png";
import PizzaFour from "../../assets/images/pizza-4.png";
import { useNavigate } from "react-router-dom";
import PageLayout from "../../layouts/PageLayout";

const Home = () => {
  const navigate = useNavigate();

  return (
    <PageLayout>
      <section>
        <div className="mt-8 flex flex__spaced flex__item-center">
          <div className="u-relative">
            <p className="fs-80 home__body-text fw-700 ">
              The Fastest <br /> Delivery <br /> in{" "}
              <span className="text__orange fs-80">Your City</span>
            </p>
            <Button
              onClick={() => navigate("/pizzas")}
              className="home__action-button cursor-pointer"
            >
              <span className="text__white fw-600">Make your order</span>
            </Button>
            <div className="w-20 u-absolute home__arrow-path">
              <img
                src={require("../../assets/icons/arrow-path.svg").default}
                alt="arrow-path"
              />
            </div>
          </div>

          <div className="home__slider-view">
            <Swiper
              modules={[Autoplay, EffectCoverflow]}
              effect="coverflow"
              slidesPerView={1}
              autoplay
            >
              <SwiperSlide>
                <div className="home__slider-image">
                  <img src={PizzaOne} alt="pizza-1" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="home__slider-image">
                  <img src={PizzaTwo} alt="pizza-2" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="home__slider-image">
                  <img src={PizzaThree} alt="pizza-3" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="home__slider-image">
                  <img src={PizzaFour} alt="pizza-4" />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Home;
