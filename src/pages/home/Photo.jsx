import React, { forwardRef } from "react";

const Photo = forwardRef((props, ref) => {
  return (
    <section ref={ref} id="photo">
      <h2>Photo</h2>
    </section>
  );
});

export default Photo;