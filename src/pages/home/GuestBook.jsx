import { forwardRef } from "react";

const GuestBook = forwardRef((props, ref) => {
    return (
        <section ref={ref} id="guestbook">
            <h2>GuestBook</h2>
        </section>
    );
});

export default GuestBook;