import LogoConTen from '../assets/LogoConTen.png';
import Cr7CTN from '../assets/hinhnen.jpg';

type Props = {};

const Container = (props: Props) => {
  return (
    <div className=" h-80 w-full  bg-slate-100">
      <div className=" flex h-20 items-center justify-center gap-5">
        <p className="font- text-4xl text-red-900">
          Cristiano Ronaldo IS GOAT!
        </p>
        <img className="h-36" src={LogoConTen} alt="LogoConTen" />
      </div>
      <div className="mb-5 flex items-center  justify-center">
        <img
          className="w-40 rounded-md shadow-md"
          src={Cr7CTN}
          alt="Cr7CTN"
        />
      </div>
      <div className="flex items-center justify-center">
        Hôm nay bạn muốn CÁ TÍNH hay KIÊU SA, hãy để
        <span className="text-3xl font-semibold text-red-600">
          &nbsp; Cr7 Store &nbsp;
        </span>
        Giải quyết trong nột nốt nhạc.
      </div>
      <div className="mt-3 flex items-center justify-center">
        Đôi khi không nói một lời. Bởi vì đang bận bán đồ đẹp cho chị
        em.
      </div>
      <div className="mt-3 flex items-center justify-center">
        Xả Hàng tồn kho không lo về giá.
      </div>
    </div>
  );
};

export default Container;
