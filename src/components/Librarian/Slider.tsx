import { useEffect, useState } from 'react';
import {
  AiOutlineCaretLeft,
  AiOutlineCaretRight,
} from 'react-icons/ai';

const ImgMotion = [
  'https://thuthuatnhanh.com/wp-content/uploads/2019/07/hinh-nen-cristiano-ronaldo.jpg',
  'https://img1.kienthucvui.vn/uploads/2019/10/27/hinh-nen-3d-cristiano-ronaldo-4k_110906915.jpg',
  'https://img1.kienthucvui.vn/uploads/2019/10/27/hinh-nen-full-hd-cristiano-ronaldo_110909071.jpg',
];

// export default class SimpleSlider extends Component {

//   render() {
//     const settings = {
//       dots: true,
//       infinite: true,
//       speed: 500,
//       slidesToShow: 1,
//       slidesToScroll: 1,
//     };
//     return (
//       <div className="w-[60%]  ">
//         <Slider {...settings}>
//           {ImgMotion.map((image) => (
//             <img
//               className="rounded-3xl"
//               key={image.id}
//               src={image.URlmition}
//             />
//           ))}
//         </Slider>
//       </div>
//     );
//   }
// }

export default function SimpleSlider() {
  const [index, setIndex] = useState(0);
  const slidelenght = ImgMotion.length;

  const headlonClickright = () => {
    setIndex(index === slidelenght - 1 ? 0 : index + 1);
  };
  const headlonClickleft = () => {
    setIndex(index === 0 ? slidelenght - 1 : index - 1);
  };
  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((i) => (i + 1) % ImgMotion.length);
    }, 7000);
    return () => {
      clearInterval(intervalId);
    };
  }, [ImgMotion]);
  return (
    <div className=" flex w-[1000px] items-center">
      <AiOutlineCaretLeft
        onClick={headlonClickleft}
        className=" left-7 cursor-pointer text-7xl text-black "
      />
      <div className="flex items-center justify-center">
        <img
          className="w-[900px] rounded-3xl"
          src={ImgMotion[index]}
          alt="ImgMotion"
        />
      </div>
      <AiOutlineCaretRight
        onClick={headlonClickright}
        className="  right-8 cursor-pointer text-7xl text-black "
      />
    </div>
  );
}
