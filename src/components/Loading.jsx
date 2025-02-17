import React from "react";
import {BeatLoader} from "react-spinners";

// const override = {
//   display: "flex",
//   margin: "0 auto",
//   borderColor: "#E50915",
//   textAlign: "center",
// };

const Loading = () => {
  return <div>
    <BeatLoader
      color="#b8ceff"
      cssOverride={{}}
      loading
      margin={5}
      size={15}
      speedMultiplier={1}
    />
  </div>;
};

export default Loading;
