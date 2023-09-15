export default function ReviewNoAvailable() {
  return (
    <div className="my-4 bg-white shadow-2xl py-4 px-4 border border-none rounded-lg">
      <div className="flex justify-center items-center">
        <img
          src="https://i.ibb.co/ysmm08P/undraw-Feedback-re-urmj.png"
          alt="no-reviews"
          className="w-80 h-72"
        />
      </div>
      <div className=" text-center text-lg font-medium text-gray-500">
        No Reviews Available for This Item Yet, Be the First to Share Your
        Thoughts!
      </div>
    </div>
  );
}
