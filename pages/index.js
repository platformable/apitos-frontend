import { useRef } from "react";
import useFixedContainer from "@/hooks/useFixedContainer";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";

export default function Project({ data }) {
  const ref = useRef(null);
  const sticky = useFixedContainer(ref);
  return (
    <main>
      <Header />
      <section className="bg-extralight-violet flex gap-10 items-center justify-center pt-10 md:pb-20 md:pt-32">
        <div className="px-5 md:px-7 lg:px-24 flex flex-col md:grid md:grid-flow-col gap-20 pb-10 text-justify">
          <article className="flex flex-col items-start text-left justify-start gap-5">
            <h2 className="font-bold md:mb-10">APIToS</h2>
            <h4 className="font-medium ">
              The APIToS project was made possible by the Critical Digital
              Infrastructure Grant, the Ford Foundation, the Sloan Foundation,
              and support from the Mozilla, Omidyar and Open Society
              Foundations.
            </h4>
            <h4 className="font-medium ">
              Many thanks to the funders and the digital infrastructure grantees
              for their support and the digital exchange all along the different
              phases of the project.
            </h4>
          </article>
          <div className="flex flex-col justify-center items-center gap-7">
            <img src="/cover_report.png" width={300} height={200} />
            <a
              href="/downloads/API Terms of Service FACT - Digital Infrastructure Grants - 2023 report.pdf"
              download={
                "API Terms of Service FACT - Digital Infrastructure Grants - 2023.pdf"
              }
              className="font-medium underline max-lg:text-2xl"
            >
              Download our report
            </a>
          </div>
        </div>
      </section>
      <Link href="/wizard/#form-section">
        <button
          ref={ref}
          className="mx-5 md:mx-7 lg:mx-24 max-sm:-mt-[550px] max-sm:-mb-[-500px]  -mt-48 mb-20 border-2 rounded-md shadow-xl flex divide-x-2 divide-white border-white  z-10 text-white  inline-block"
        >
          <div className="rounded-l-md bg-black flex items-center gap-2 p-2">
            <span className="text-[#C7B4FF] font-bold">Start</span>
            <img src="/API_symbol-white.svg" alt="cog icon" width={20} />
            <span className="text-white  font-bold">FACT WIZARD</span>
          </div>
          <div className="rounded-r-md font-bold text-black bg-light-violet px-3 py-2">
            <span>NOW!</span>
          </div>
        </button>
      </Link>
      <section className="bg-violet px-5 md:px-7 lg:px-24 py-10">
        <h2 className="font-bold text-white mb-10">
          About the API Terms of Service (APIToS) project
        </h2>
        <article className="grid gap-5">
          <div className="flex flex-col max-sm:items-center md:flex-row gap-10 md:gap-20 rounded-xl border-white border-2 shadow py-7 px-10">
            <img src="/icon_1_about.svg" alt="" className="w-32" />
            <h5 className="font-mediumt text-white ">
              We intend to build a framework making API Terms of Service easily
              understandable and shareable, for a saner and safer digital
              infrastructure.
            </h5>
          </div>
          <div className="flex flex-col max-sm:items-center md:flex-row gap-10 md:gap-20 rounded-xl border-white border-2 shadow py-7 px-10">
            <h5 className="font-mediumt text-white">
              By conducting interviews, surveys and focus group with API users,
              providers and other stakeholders, by using a legal design approach
              and prototype testing, we have developed a model collaboratively
              to define a way forward for more standardized, accessible
              approaches to documenting and enforcing API Terms of Service.
            </h5>
            <img src="/icon_2_about.svg" alt="" />
          </div>
          <div className="rounded-xl border-white border-2 shadow py-7 px-10">
            <h5 className="font-mediumt text-white ">
              Our research has clarified the frictions in the user experience of
              API, the power imbalance and inequalities between API producers
              and consumers explored the diversity of situations and people
              involved in the API ecosystem.
            </h5>
            <br />
            <h5 className="font-mediumt text-white ">
              Moreover, this research designed a framework for healthier API
              ecosystems called FACT (FAIR API Commitment to Trust) related to a
              FACT license describing the mutual commitments between API
              Providers and Users.
            </h5>
            <br />

            <h5 className="font-mediumt text-white ">
              Particular attention has been dedicated to the creation of
              resources that are easily readable and understandable for a wide
              audience, thus contributing to the establishment of a trustworthy
              and sustainable framework that can be easily implemented for the
              essential digital infrastructures that APIs represent.
            </h5>
          </div>
        </article>
      </section>
      <section className="px-5 md:px-7 lg:px-24 py-16">
        <h2 className="mb-10">The APIToS Project Team</h2>
        <article className="grid gap-5">
          <div className="flex flex-col items-center md:items-start  gap-7 md:gap-0 md:flex-row border-2 border-yellow-400 rounded py-3 md:divide-x-2  md:divide-violet-500">
            <img className="px-5" src="Medhi_pic.png" />
            <div className="px-3 px-3 flex flex-col h-full items-center md:items-start md:items-start gap-5 text-justify">
              <h4>Mehdi Medjaoui</h4>
              <small>
                is the founder of the worldwide apidays conferences series,
                which started in 2012 in Paris. Mehdi is highly involved in the
                API community and API Industry, as an author, lecturer,
                consultant and investor in the API tooling space. His industry
                research includes publishing and maintaining the API Industry
                Landscape and the yearly State of Banking APIs. In 2018, he
                published as co-author “Continuous API management” (O’Reilly)
                and begasn as lecturer and invited professor at HEC MBA and
                EMLyon Executive MBA. In 2019, Mehdi became a H2020 European
                Commission expert to lead the APIS4Dgov study on public sector
                and government APIs. As an entrepreneur, in 2014, Mehdi
                co-founded OAuth.io, an API middleware for OAuth intégration
                used by 40,000+ developers that was acquired in 2017. Mehdi’s
                new venture GDPR.dev develops a personal data API framework and
                protocol to democratize data regulations usage for mass users
                and compliance for applications developers, making GDPR
                programmable.
              </small>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-start gap-7 md:gap-0 md:flex-row border-2 border-yellow-400 rounded py-3 md:divide-x-2  md:divide-violet-500">
            <img className="px-5" src="/Celya_pic.png" />
            <div className="px-3 px-3 flex flex-col h-full items-center md:items-start gap-5 text-justify">
              <h4>Célya Gruson-Daniel</h4>
              <small>
                is a research-practitioner and consultant at inno3, a consulting
                firm specializing in open models (open data, open source,
                commons, open science). Her research projects concern the modes
                of appropriation of sustainable open models within institutes
                and organizations through the study and implementation of
                different possible levers (organizational, legal, economic,
                technical). As a doctor of social sciences, she frequently
                intervenes as a teacher in various research and higher education
                institutes to train in digital methodologies (data collection,
                analysis, management) through a pragmatic and participative
                approach. She co-founded the HackYourResearch collective in
                order to create a space for sharing and exchanging on the
                evolution of research and open science practices.
              </small>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-start gap-7 md:gap-0 md:flex-row border-2 border-yellow-400 rounded py-3 md:divide-x-2  md:divide-violet-500">
            <img className="px-5" src="Benjamin_pic.png" />
            <div className="px-3 px-3 flex flex-col h-full items-center md:items-start gap-5 text-justify">
              <h4>Benjamin Jean</h4>
              <small>
                is currently the inno3 company’s CEO, an open innovation
                consulting firm focused on digital transformation through IP,
                management and ecosystem strategies. He is also the cofounder
                and former president of Open Law* Le droit ouvert, a french
                non-profit organization promoting activities to enhance the
                transformation of the legal sector through digital co- creation
                programs based on Open data, Open Source and Open Innovation
                principles. He also works as lecturer at Sciences Po Paris,
                teaches IP in several Masters courses and is a consultant within
                the Gilles Vercken Law firm. He co-found and co-organizes the
                annual European Opensource and free software Law Event.
              </small>
            </div>
          </div>
          <div className="flex flex-col gap-7 items-center md:items-start md:gap-0 md:flex-row border-2 border-yellow-400 rounded py-3 md:divide-x-2  md:divide-violet-500">
            <img className="px-5 " src="/Mark_pic.png" />
            <div className="px-3 flex flex-col items-center h-full md:items-start justify-start gap-5 text-justify">
              <h4>Mark Boyd</h4>
              <small>
                is an API industry analyst and writer. Mark is the founder of
                Platformable, which specializes in using data and building tools
                to support the development of open ecosystems. He is the lead
                author of the European Commission’s API Framework for Digital
                Government, and has worked globally with World Bank, World
                Health Organization, UN agencies, private companies and
                non-profits on API and data governance, platform thinking, and
                open ecosystem strategy and best practices.
              </small>
            </div>
          </div>
        </article>
        <h5 className="my-10 italic text-opacity-80">
          We would like to thank all those who participated in this project
          through our interviews, questionnaire responses, and/or participation
          in our workshop on “New models for API Terms of Service”.
        </h5>
      </section>
      <Footer footerText={data.footerText} />
    </main>
  );
}

export async function getServerSideProps(ctx) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/apito?fields[0]=footerText`
  );
  const data = await res.json();
  console.log(data);
  return {
    props: {
      data: data.data.attributes,
    },
  };
}
