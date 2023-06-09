import Image from "next/image";
import Overlay from "./Overlay";

interface CategorySliderItemProps {
  image: string;
  alt: string;
  name: string;
}

const CategorySliderItem: React.FC<CategorySliderItemProps> = ({
  image,
  alt,
  name,
}) => {
  return (
    <div className="w-full h-full relative">
      <Image
        src={image}
        alt={alt}
        width={400}
        height={500}
        priority
        className="w-full h-full object-cover"
      />
      <Overlay />
      <div className="absolute z-[2] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-center">
        <h3 className="text-3xl font-semibold tracking-widest">{name}</h3>
      </div>
    </div>
  );
};

export default CategorySliderItem;
