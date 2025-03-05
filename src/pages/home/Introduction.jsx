import { forwardRef } from "react";

const Introduction = forwardRef((props, ref) => {
    return (
        <section ref={ref} id="introduction">
            <h2>Introduction</h2>
        </section>
    );
});

export default Introduction;