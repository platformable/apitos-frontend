import Footer from "@/components/Footer";
import Form from "@/components/Form";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import License from "@/components/License";
import WizardSteps from "@/components/WizardSteps";
import { useEffect, useState } from "react";
import { Element, scroller } from "react-scroll";

export default function Home({ content, questions }) {
  // console.log(content, questions);


  const [fileUrl, setFileUrl] = useState(null);
  const [pictogramsSelected, setPictogramsSelected] = useState(
    questions?.reduce(
      (acc, curr, currIndex) => ({
        ...acc,
        [currIndex + 1]: curr.Options.filter((option) =>
          option.isDefault
            ? {
                publicId:
                  option.image.data.attributes.provider_metadata.public_id,
                url: option.image.data.attributes.url,
              }
            : false
        )[0].image,
      }),
      {}
    )
  );


  
  // console.log("pictos", pictogramsSelected);

  const handleImagesChange = (image, questionName) => {
    setPictogramsSelected((prev) => ({
      ...prev,
      [questionName]: image,
    }));
  };
  

  return (
    <main className="">
      
      <Header />
      <Hero
        heroTitle={content.herotitle}
        heroDescription={content.heroDescription}
        heroImg={content.heroImage}
        heroImgText={content.heroImgText}
        content={content}
      />
        
      <Form
        content={content}
        questions={questions}
        setFileUrl={setFileUrl}
        handleImagesChange={handleImagesChange}
      />
      <License
        content={content}
        licenseSectionThankyouText={content.licenseSectionThankyouText}
        fileUrl={fileUrl}
        pictogramsSelected={pictogramsSelected}
      />
      <Footer footerText={content.footerText} />
      <canvas id="canvas" hidden></canvas>
    </main>
  );
}

export async function getServerSideProps(ctx) {
  
  const [content, questions] = await Promise.all([
    fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/apito/?populate=*`)
    .then(r => r.json()),
    fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/apito/?populate[1]=questions.Options&populate[2]=questions.Options.image`)
    .then(r => r.json())

])
  // const data = await res.json();
  return {
    props: {
      questions: questions.data.attributes.questions,
      content: content.data.attributes,
    },
  };
}
