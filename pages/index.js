import Footer from "@/components/Footer";
import Form from "@/components/Form";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import License from "@/components/License";
import WizardSteps from "@/components/WizardSteps";
import { useState } from "react";

export default function Home({ content, questions }) {
  console.log(content, questions);
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
      />
      <WizardSteps
        content={content}
        step1={{
          title: content.wizardSteps1Title,
          description: content.wizardSteps1Description,
        }}
        step2={{
          title: content.wizardSteps2Title,
          description: content.wizardSteps2Description,
        }}
        step3={{
          title: content.wizardSteps3Title,
          description: content.wizardSteps3Description,
        }}
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
  const questions = [
    {
      questionName: "q2",
      title: "What are the conditions to access your API?",
      options: [
        {
          value: "1",
          title: "API Neutrality",
          specification: "by default",
          description: "",
        },
        {
          value: "2",
          title: "Restrictive rights",
          specification: "option",
          description: "",
        },
        {
          value: "3",
          title: "Share alike",
          specification: "option",
          description: "",
        },
      ],
    },
    {
      questionName: "q3",
      title:
        "What are the conditions to access and reuse the API specfications?",
      options: [
        {
          value: "1",
          title: "CC Zero License on specification",
          specification: "by default",
          description: "",
        },
        {
          value: "2",
          title: "Share Alike License on speicification",
          specification: "",
          description: "",
        },
      ],
    },
    {
      questionName: "q4",
      title: "What are the conditions to reuse the data exposed via the API?",
      options: [
        {
          value: "1",
          title: "Large data reuse",
          specification: "by default",
          description: "",
        },
        {
          value: "2",
          title: "Open Data contract",
          specification: "option",
          description: "",
        },
        {
          value: "3",
          title: "Comercial data contract",
          specification: "option",
          description: "",
        },
      ],
    },
    {
      questionName: "q5",
      title: "What are the conditions to use/reuse the outputs from API usage?",
      options: [
        {
          value: "1",
          title: "All comercial reuse allowed",
          specification: "by defuault",
          description: "",
        },
        {
          value: "2",
          title: "Non direct competition",
          specification: "option",
          description: "",
        },
        {
          value: "3",
          title: "Non commercial use",
          specification: "option",
          description: "",
        },
      ],
    },
    {
      questionName: "q6",
      title:
        "What are the conditions to cite the data and services enabled via the API?",
      options: [
        {
          value: "1",
          title: "Attribution requirement",
          specification: "by default",
          description: "",
        },
        {
          value: "2",
          title: "No attribution",
          specification: "option",
          description: "",
        },
        {
          value: "3",
          title: "Trademark enforcement",
          specification: "option",
          description: "",
        },
      ],
    },
  ];
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
