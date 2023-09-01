import loadingImg from "./../assets/loading.gif";
export default function Loading() {
  return (
    <div className="flex justify-center items-center h-80">
      <div>
        <img src={loadingImg} className="h-20 w-20" />
        <span className="flex justify-center items-center text-gray-500">
          Loading
        </span>
      </div>
    </div>
  );
}
