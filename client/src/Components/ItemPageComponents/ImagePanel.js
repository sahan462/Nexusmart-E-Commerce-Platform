export default function ImagePanel(params) {
  return (
    <div>
      {/* Selected Image Here */}
      <div className="bg-white p-2 flex items-center justify-center border border-none rounded-lg shadow-2xl">
        <img
          alt="item"
          className="h-96 w-full object-cover border border-none rounded-lg"
          src={params.selectedImageURL}
        />
      </div>
      {/* Other Images here */}
      <div className="mt-5 px-2 h-24 grid grid-cols-12 gap-4">
        {params.imgData.length >= 1 && (
          <button
            className="col-span-3"
            onClick={() => {
              params.imageHandler(params.imgData[0].url);
            }}
          >
            <img
              alt="item image"
              className={
                params.selectedImageURL === params.imgData[0].url
                  ? "border-primary shadow-lg h-full w-full object-cover border-2 rounded-lg"
                  : "shadow-lg h-full w-full object-cover border-2 rounded-lg"
              }
              src={params.imgData[0].url}
            />
          </button>
        )}
        {params.imgData.length >= 2 && (
          <button
            className="col-span-3"
            onClick={() => {
              params.imageHandler(params.imgData[1].url);
            }}
          >
            <img
              alt="item image"
              className={
                params.selectedImageURL === params.imgData[1].url
                  ? "border-primary shadow-lg h-full w-full object-cover border-2 rounded-lg"
                  : "shadow-lg h-full w-full object-cover border-2 rounded-lg"
              }
              src={params.imgData[1].url}
            />
          </button>
        )}
        {params.imgData.length >= 3 && (
          <button
            className="col-span-3"
            onClick={() => {
              params.imageHandler(params.imgData[2].url);
            }}
          >
            <img
              alt="item image"
              className={
                params.selectedImageURL === params.imgData[2].url
                  ? "border-primary shadow-lg h-full w-full object-cover border-2 rounded-lg"
                  : "shadow-lg h-full w-full object-cover border-2 rounded-lg"
              }
              src={params.imgData[2].url}
            />
          </button>
        )}
        {params.imgData.length >= 4 && (
          <button
            className="col-span-3"
            onClick={() => {
              params.imageHandler(params.imgData[3].url);
            }}
          >
            <img
              alt="item image"
              className={
                params.selectedImageURL === params.imgData[3].url
                  ? "border-primary shadow-lg h-full w-full object-cover border-2 rounded-lg"
                  : "shadow-lg h-full w-full object-cover border-2 rounded-lg"
              }
              src={params.imgData[3].url}
            />
          </button>
        )}
      </div>
    </div>
  );
}
