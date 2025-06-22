const Carousel = (props) => {
  const link = props.data.link;
  const title = props.data.title;
  const description = props.data.description;
  const index = props.index;
  return (
    <div className="relative h-[600px] w-full md:w-[380px] scale-[1.05] shadow-2xl transition-all duration-500">
      <video
        src={link}
        autoPlay
        loop
        muted
        playsInline
        className="absolute z-0 inset-0 w-full h-full object-cover scale-[1.1] translate-y-14 rounded-4xl"
      />

      <p
        className={`absolute z-10 bottom-36 mx-7 text-xl font-noto font-semibold ${
          index > 0 ? "text-white" : ""
        }`}
      >
        {title}
      </p>
      <p
        className={`absolute z-10 mx-7 top-4/5 text-sm font-noto font-medium ${
          index > 0 ? "text-white" : ""
        }`}
      >
        {description}
      </p>
      <p
        className={`absolute z-10 mx-7 top-[610px] text-sm font-noto font-medium ${
          index > 0 ? "text-white" : ""
        }`}
      >
        Learn More →
      </p>
    </div>
  );
};

export default Carousel;
