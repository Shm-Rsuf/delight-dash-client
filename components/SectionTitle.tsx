interface SectionTitleProps {
  subTitle: string;
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ subTitle, title }) => {
  return (
    <div className="animate wrapper text-center pb-10 relative">
      <span className="uppercase font-semibold tracking-widest text-teal-300">
        {subTitle}
      </span>
      <h3 className="text-3xl capitalize">{title}</h3>
      <span className="underline"></span>
    </div>
  );
};

export default SectionTitle;
