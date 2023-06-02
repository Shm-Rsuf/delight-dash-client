import Image from "next/image";
import Overlay from "./Overlay";

const CategorySliderItem = ({ item }: any) => {
  return (
    <div className="w-full h-full relative">
      <Image
        src={item.src}
        alt={item.alt}
        width={400}
        height={500}
        priority
        className="w-full h-full object-cover"
      />
      <Overlay />
      <div className="absolute z-[2] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-center">
        <h3 className="text-2xl font-semibold tracking-wider">{item.name}</h3>
      </div>
    </div>
  );
};

export default CategorySliderItem;
