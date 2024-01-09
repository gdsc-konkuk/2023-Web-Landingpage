import React from "react";
import Carousel from "./Carousel";

import FirstSessionImage from "../../assets/images/slides/1st_session.jpeg";
import SecondSessionImage from "../../assets/images/slides/2nd_session.jpeg";
import ThirdSessionImage from "../../assets/images/slides/3rd_session.png";

const CAROSEL_IMAGES = [
  { image: FirstSessionImage, text: "Gen AI" },
  { image: SecondSessionImage, text: "Let's Git it" },
  { image: ThirdSessionImage, text: "파트별 노션 꾸미기" },
];

export default function Slider() {
  return (
    <div>
      <div class="text-center">
        <h3 class="text-[54px] font-semibold">Grow With GDSC</h3>
        <h4 class="text-[20px] font-semibold">"열정을 갖고 성장을 목표로"</h4>
        <span class="mb-8">
          GDSC Konkuk에서는 정기적으로 세션을 통해
          <br /> 함께 성장해 나가는 기회를 만들고자 해요.
        </span>
        <Carousel carouselList={CAROSEL_IMAGES} />
      </div>
    </div>
  );
}
