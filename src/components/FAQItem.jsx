import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

const FAQItem = ({ question, answer, id }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="group rounded-xl border border-gray-200 bg-gray-50 p-6">
      <div
        className="cursor-pointer flex justify-between items-center"
        onClick={toggleOpen}
        aria-controls={`faq-${id}`}
        aria-expanded={isOpen}
      >
        <p className="font-semibold text-lg">{question}</p>
        <FontAwesomeIcon
          icon={faChevronUp}
          className={`ml-2 h-4 w-4 transition-transform ${
            isOpen ? "" : "transform rotate-180"
          }`}
        />
      </div>
      {isOpen && (
        <div id={`faq-${id}`} className="text-lg font-light mt-6">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

export default FAQItem;
