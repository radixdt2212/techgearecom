import React from "react";
import Title from "../Title";
export default function Contact() {
  return (
    <section className="py-5">
      <div className="row">
        <div className="col-10 mx-auto col-md-6 my-3">
          <Title title="Contact us"></Title>
          <form
            className="mt-5"
            action="https://formspree.io/f/mwkabrad"
            method="post"
          >
            <div className="form-group m-2">
              <input
                type="text"
                className="form-control mb-2"
                name="firstName"
                placeholder="Name"
              />
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="email@email.com"
              />
            </div>
            <div className="form-group m-2">
              <input
                type="text"
                className="form-control"
                name="subject"
                placeholder="subject"
              />
            </div>
            <div className="form-group m-2">
              <textarea
                name="message"
                placeholder="message body"
                rows="10"
                className="form-control"
              ></textarea>
            </div>
            {/* Submit */}
            <div className="form-group mt-3">
              <input
                className="form-control bg-primary text-white"
                type="submit"
                value="Send"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
