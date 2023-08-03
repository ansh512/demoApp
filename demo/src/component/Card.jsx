export default function Card({ head, imageLeft, imageRight }) {
    return (
      <div className="flex w-full p-2 h-auto max-w-screen-lg mx-auto">
        {imageLeft && (
          <div className="w-1/2">
            <img src={imageLeft} className="w-full" />
          </div>
        )}
        <div className="w-1/2">
          <h3 className="font-semibold text-lg text-gray-500 p-2">{head}</h3>
          <p className="p-2 leading-loose text-justify text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
        {imageRight && (
          <div className="w-1/2">
            <img src={imageRight} className="w-full" />
          </div>
        )}
      </div>
    );
  }
  