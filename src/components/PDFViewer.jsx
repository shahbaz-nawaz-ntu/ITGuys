import companyProfile from "../assets/Company Profile.pdf";

function PDFViewer() {
  return (
    <div className="pl-20 pt-10 pb-10 w-full">
      <div className="text-white text-[30px]">Company Profile</div>
      <div>
        {/* Download PDF */}
        <a href={companyProfile} download className="text-muted">
          {/* <button className="px-4 py-2 text-white bg-transparent hover:text-blue-400 rounded-md transition"> */}
            Download
          {/* </button> */}
        </a>

        &nbsp;&nbsp;
         &nbsp;&nbsp;

        {/* View in New Tab */}
        <a href={companyProfile} target="_blank" rel="noopener noreferrer" className="text-muted ">
          {/* <button className="px-4 py-2 text-white bg-transparent hover:text-blue-300 rounded-md transition"> */}
            View
          {/* </button> */}
        </a>
      </div>
    </div>
  );
}

export default PDFViewer;
