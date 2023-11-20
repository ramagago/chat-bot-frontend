import PropTypes from "prop-types";
import { API_URL } from "../config";

const AddPdfModal = ({ handleCloseModal }) => {
  const handleuploadPdf = async (e) => {
    e.preventDefault();

    const titleValue = e.target.title.value;
    const infoValue = e.target.info.value;
    const fileValue = e.target.file.files[0] || null;
    if (!fileValue) return;

    const formData = new FormData();
    formData.append("title", titleValue);
    formData.append("info", infoValue);
    formData.append("file", fileValue);
    console.log(formData);

    try {
      const response = await fetch(`${API_URL}/uploadpdf`, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      console.log("se subio el pdf");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center w-screen h-screen fixed">
        <div className="flex justify-end w-1/2">
          <button
            onClick={handleCloseModal}
            className="text-white hover:text-slate-400 text-2xl m-2"
          >
            X
          </button>
        </div>
        <form
          onSubmit={handleuploadPdf}
          className="flex flex-col justify-center items-center bg-slate-100 w-1/2 h-1/2 rounded-md"
        >
          <input
            type="text"
            name="title"
            placeholder="Title"
            className="w-64 h-7 rounded-md text-sm pl-1 mb-3"
          />
          <textarea
            name="info"
            placeholder="Information"
            className="w-64 h-24 rounded-md text-sm pl-1 mb-7"
          />
          <input
            type="file"
            name="file"
            className="text-xs mb-12 hover:cursor-pointer"
          />
          <input
            type="submit"
            value="Add PDF"
            className="px-5 py-2 rounded-md bg-slate-600 text-white hover:bg-slate-400 hover:cursor-pointer"
          />
        </form>
      </div>
    </>
  );
};

export default AddPdfModal;

AddPdfModal.propTypes = {
  handleCloseModal: PropTypes.func.isRequired,
};
