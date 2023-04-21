import useDownloadCombinedImages from "@/hooks/useDownloadCombinedImages";

const License = ({ pictogramsSelected, licenseSectionThankyouText, fileUrl }) => {
  const downloadImages = useDownloadCombinedImages()
  return (
    <section className="bg-extralight-violet pt-14 pb-28">
      <div className="container mx-auto">
        <h1 className="text-center mb-14 font-bold">
          {licenseSectionThankyouText}
        </h1>
        <div className="grid md:grid-cols-2 gap-20">
          <div className="flex flex-col justify-between gap-7 ">
            <h2 className="font-bold">Selected License</h2>

            <div
              className="flex items-center justify-between gap-5 border-4 border-light-violet rounded-md py-10 px-5"
              id="image-container"
            >
              {Object.values(pictogramsSelected)?.map((picto, index) => (
                <img
                  key={index}
                  src={picto.data.attributes.url}
                  alt={picto.data.attributes.name}
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
            <h2 className="font-bold">Your license in pdf</h2>
            <div className=" bg-[#C5BCFF] rounded-md py-7 flex justify-center items-center">
              <img src="/pdf_icon.svg" alt="download pdf icon" />
            </div>
            <a href={fileUrl} download="test.pdf">
              <button
              disabled={fileUrl}
                className="text-white font-medium rounded-md py-3 bg-violet w-full"
              >
                Download the pdf
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default License;
