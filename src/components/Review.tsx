import { addToCart } from '@/feature/cartSlide';
import { decreaseCart, increaseCart } from '@/feature/reviewSlide';
import { useAppDispatch, useAppSelector } from '@/store';
import Footer from './Footer';
import Header from './Header';

type Props = {};

function Review({}: Props) {
  const dataReview = useAppSelector((state) => state.review.items);
  console.log(dataReview, 'data');
  const dispatch = useAppDispatch();
  const handleQTVP = (data: any) => {
    dispatch(increaseCart({ data }));
  };

  const handleQTVT = (data: any) => {
    dispatch(decreaseCart({ data }));
  };
  const handleQTVTH = (data: any) => {
    dispatch(addToCart({ data }));
  };
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="mt-16 mb-16 bg-slate-100">
        {dataReview.map((data) => (
          <div
            key={data.data.id}
            className="  right-0 left-0 mx-auto flex w-[70%]  justify-between border-solid"
          >
            <div className=" h-[500px] w-[600px]  flex-col gap-1 ">
              <div className="rounded-shadow-sm left-0 right-0 mx-auto  flex h-[330px] w-[45%] justify-center  bg-slate-500">
                <img src={data.data.Url} />
              </div>
              <div className="h-[150px] w-[575px] border-solid ">
                <div></div>
              </div>
            </div>
            <div className="  flex h-full w-[45%] ">
              <div className="top-0 ml-5">
                <p className=" mt-7 mb-1 text-2xl font-semibold text-slate-800 ">
                  {data.data.title}.
                </p>
                <div className=" mt-4 flex w-[200px] justify-between gap-1 ">
                  <p>Đánh giá:</p>
                  <p>5 sao.</p>
                </div>
                <p className="text-lg text-red-700">
                  {data.data.price} $.
                </p>
                <p>{data.data.description}.</p>
                <p>
                  Đã bán:{' '}
                  <span className="ml-3">
                    {data.data.Qty} sản phẩm.
                  </span>
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span>Số lượng: </span>
                    <button
                      disabled={data.data.qty <= 1}
                      onClick={() => {
                        handleQTVT(data.data);
                      }}
                      className="text-md m-0  h-7 w-7 cursor-pointer border border-gray-900 p-0 text-center font-semibold"
                    >
                      -
                    </button>
                    <span>{data.data.qty}</span>
                    <button
                      disabled={
                        data.data.qty >= data.data.Numberofwarehouses
                      }
                      onClick={() => {
                        handleQTVP(data.data);
                      }}
                      className="text-md m-0  h-7 w-7 cursor-pointer border border-gray-900 p-0 text-center font-semibold"
                    >
                      +
                    </button>
                    <span className="w-80">
                      {data.data.Numberofwarehouses} sản phẩm có sẵn.
                    </span>
                  </div>
                </div>
                <div className="mt-7">
                  <button
                    onClick={() => {
                      handleQTVTH(data.data);
                    }}
                    className="h-9 w-72 cursor-pointer rounded-md bg-green-900 text-xl font-semibold text-white shadow-lg transition-all duration-100 ease-in-out"
                  >
                    Thêm vào giỏ hàng.
                  </button>
                  <button className="ml-7 h-9 w-48 cursor-pointer rounded-md bg-green-900 text-xl font-semibold text-white shadow-lg transition-all duration-100 ease-in-out">
                    Mua Ngay.
                  </button>
                </div>
                <div className=" mt-7 flex w-[90%] items-center justify-center border-r-0 border-l-0   border-t border-b-0 border-solid border-gray-200 ">
                  <p className="mt-3">
                    Shop đảm bảo chất lượng. 3 ngày trả hàng / hoàn
                    tiền.
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div></div>
        <div></div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Review;
