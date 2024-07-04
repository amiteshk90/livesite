import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import testimonial1 from "../assets/testimonial1.jpg";
import testimonial2 from "../assets/testimonial2.jpg";
import testimonial3 from "../assets/testimonial3.jpg";
import testimonial4 from "../assets/testimonial4.jpg";

export const Carousal = () => {    
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // Mobile screen width, you can adjust this as needed
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className='m-auto px-0 md:px-14 pb-12'>
      <div className="mt-20">
      <Slider {...settings}>
        {data.map((d) => (
          <div key={d.name} className="bg-white h-[450px] text-black rounded-xl">
            <div className='h-auto p-2 bg-indigo-500 flex justify-center items-center rounded-t-xl'>
              <img src={d.img} alt="" className="h-44 w-44 rounded-full"/>
            </div>

            <div className="flex flex-col items-center justify-center gap-4 p-4">
              <p className="text-xl font-semibold">{d.name}</p>
              <p className="text-center">{d.review}</p>
            </div>
          </div>
        ))}
      </Slider>
      </div>
      
    </div>
  );
}

const data = [
  {
    name: `Shvet Sanghvi`,
    img: testimonial1, // Using imported image
    review: `I was looking for working capital for my business expansion. I was bit frustrated with the banks as they asked for lots of documents.`
  },
  {
    name: `Shital Thakkar`,
    img: testimonial2, // Using imported image
    review: `Lendingkart has been very helpful! They are very professional and the best thing is the timely services. A true saviour of startups I must say.`
  },
  {
    name: `Maduri Dharma Prakash`,
    img: testimonial3, // Using imported image
    review: `I am very glad that I was able to find Lendingkart at the right time. The instant support that Lendingkart gives to procure a loan in the most hassle-free way .`
  },
  {
    name: `Girish Ahir`,
    img: testimonial4, // Using imported image
    review: `The flexibility that Lendingkart provides in procuring a loan as well as the repayment, is unlike any other company in the market today. I am forever grateful!`
  },
];

