import React from "react";

const SectionWrapper = ({ children, className = "" }) => {
  return (
    <section>
      <div className={`${className} mx-auto max-w-screen-xl p-2`}>
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
