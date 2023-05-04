import Footer from "@/components/Footer";
import Form from "@/components/Form";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import License from "@/components/License";
import WizardSteps from "@/components/WizardSteps";
import { useState } from "react";

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
  const createDocument = async (runValidation) => {
    const isDowloadable = runValidation();
    console.log("isDowloadable", isDowloadable);
    if (isDowloadable) {
      fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/pdf`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
      })
        .then((response) => {
          console.log("response", response);
          return response.blob();
        })
        .then((blob) => {
          const url = window.URL.createObjectURL(blob);
          setFileUrl(url);
        })
        .catch((error) => {
          console.error(error);
        })
        .catch((error) => {
          console.error(error);
        });
    }
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
        createDocument={createDocument}
        handleImagesChange={handleImagesChange}
      />
      <License
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
  
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/apito/?populate[0]=heroImage&questions[populate]=*&populate[1]=questions.Options&populate[2]=questions.Options.image`
  );
  const data = await res.json();
  return {
    props: {
      questions: data.data.attributes.questions,
      content: data.data.attributes,
    },
  };
}
