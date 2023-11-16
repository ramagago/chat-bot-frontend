const AddPdfModal = (handleCloseModal) => {
  const handleuploadPdf = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const description = e.target.description.value;
    const file = e.target.file.files[0];
    if (!file) return;
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("file", file);
    console.log(formData);
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
          <input
            type="text"
            name="info"
            placeholder="Information"
            className="w-64 h-24 rounded-md text-sm pl-1 mb-7"
          />
          <input type="file" className="text-xs mb-12 hover:cursor-pointer" />
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
