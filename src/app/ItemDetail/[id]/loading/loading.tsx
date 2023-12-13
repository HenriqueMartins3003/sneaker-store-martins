import React from "react";

interface IProps {
  loading: boolean;
}
const Loading: React.FC<IProps> = ({ loading }) => {
  return (
    <>
      {loading && (
        <div className="w-full h-full bg-gray-950 opacity-50 fixed top-0 left-0 flex justify-center items-center">
          <div className="rounded-full w-16 h-16 border-t-4 border-l-4 border-blue-500 animate-spin"></div>
        </div>
      )}
    </>
  );
};

export default Loading;
