
const Hero = ({ heroTitle, heroDescription, heroImg, heroImgText }) => {
 
  return (
    <section className=" bg-violet flex gap-10 items-center justify-center py-20">
      <div className="px-5 md:px-7 lg:px-20 flex flex-col md:grid md:grid-flow-col gap-20  text-justify">
        <article className="flex flex-col justify-center gap-10">
          <h3 className="text-white font-bold">
            {heroTitle}
          </h3>
          <p className="text-xl text-white whitespace-pre-wrap font-medium leading-snug">
          {heroDescription}
          </p>
        </article>
        <div className="flex flex-col justify-center items-center gap-7">
          <img src={heroImg.data.attributes.url} alt={heroImg.data.attributes.name} width={500} height={300}/>
          <a href="#" className="text-white underline">{heroImgText}</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
