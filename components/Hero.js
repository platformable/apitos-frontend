
const Hero = ({ heroTitle, heroDescription, heroImg, heroImgText }) => {
 
  return (
    <section className="bg-violet flex gap-10 items-center justify-center py-20">
      <div className="container mx-auto flex flex-col md:flex-row gap-20  text-justify">
        <article className="flex flex-col justify-between gap-10">
          <h3 className="text-white font-bold">
            {heroTitle}
          </h3>
          <h4  className="text-white whitespace-pre-wrap font-medium leading-snug">
          {heroDescription}
          </h4>
        </article>
        <div className="grid gap-7">
          <img src="" alt="hero image" />
          <a href="#" className="text-white underline">{heroImgText}</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
