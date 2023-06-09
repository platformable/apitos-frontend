import useDownloadCombinedImages from "@/hooks/useDownloadCombinedImages";
import { Element } from "react-scroll";
import { usePlausible } from "next-plausible";
const License = ({ content, pictogramsSelected, licenseSectionThankyouText, fileUrl }) => {
  const downloadImages = useDownloadCombinedImages()
  const plausible = usePlausible()
  
  const sendPdfMetric = () => {
    plausible('pdfDownload')
  }
  return (
   <>
    <div className={`${fileUrl ? 'block': 'hidden'}`}>
    <Element name="license-section">
  <section className="bg-extralight-violet pt-14 pb-28 px-5 md:px-7 lg:px-24">
      <div className="">
        <h1 className="text-center mb-14 font-bold">
          {licenseSectionThankyouText}
        </h1>
        <div className="grid xl:grid-cols-2 gap-20">
          <div className="flex flex-col justify-between gap-7 ">
            <h3 className="font-bold">Selected License</h3>

            <div
              className="flex flex-col bg-white md:grid md:grid-cols-2 lg:flex lg:flex-row items-center justify-center gap-3  border-2 border-light-violet rounded-md py-14 px-5"
              id="image-container"
            >
              <img src={content.usePolicyImg.data.attributes.url} alt={content.usePolicyImg.data.attributes.name} width={60} crossOrigin="anonymus"/>
              <img src={content.changePolicyImg.data.attributes.url} alt={content.changePolicyImg.data.attributes.name} width={60} crossOrigin="anonymus"/>
              {Object.values(pictogramsSelected)?.map((picto, index) => (
                <img
                  key={index}
                  src={picto.data.attributes.url}
                  alt={picto.data.attributes.name}
                  width={60}
                  crossOrigin="anonymous"
                />
              ))}
            </div>

            <button
              className="text-white font-medium rounded-md py-3 bg-violet"
              onClick={() => downloadImages("image-container")}
            >
              Download Pictograms
            </button>
          </div>
            <div className="flex flex-col justify-between gap-7 ">
            <h3 className="font-bold">Your license in pdf</h3>
            <div className=" bg-[#C5BCFF] rounded-md py-7 flex justify-center items-center">
              <img src="/pdf_icon.svg" alt="download pdf icon" />
            </div>
            <a href={fileUrl} download="FACT-Licence.pdf">
              <button
                disabled={!fileUrl}
                onClick={sendPdfMetric}
                className="text-white font-medium rounded-md py-3 bg-violet w-full"
              >
                Download the pdf
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
</Element>
    </div>
     
   </>
  );
};

export default License;
