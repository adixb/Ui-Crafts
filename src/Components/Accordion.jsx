import React, { useState } from "react";

const RenderAccordion = ({ title, answer }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="py-2 px-2 w-full rounded-full">
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex justify-between items-center w-full p-4 bg-white shadow-md rounded-lg"
      >
        <span className="text-lg text-black font-semibold">{title}</span>
        <svg
          className={`fill-indigo-500 transform transition-transform duration-300 ${
            accordionOpen ? "rotate-45" : ""
          }`}
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className="origin-center transition duration-200 ease-out"
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className="origin-center rotate-90 transition duration-200 ease-out"
          />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
          accordionOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="p-4">
          {Array.isArray(answer) ? (
            answer.map((item, index) => (
              <div key={index} className="mb-2">
                {Object.entries(item).map(([key, value]) => (
                  <div
                    key={key}
                    className="flex items-center justify-between border-t border-gray-200 py-2"
                  >
                    <span className="text-gray-700">{key}:</span>
                    <span className="text-gray-900">{value}</span>
                  </div>
                ))}
              </div>
            ))
          ) : (
            <div>{answer}</div>
          )}
        </div>
      </div>
    </div>
  );
};

const Accordion = ({style}) => {
  const nameAnswer = [
    {
      "First Name": "John",
      "Last Name": "Doe",
    },
  ];
  const placeAnswer = "Location: New York, USA";

  return (
    <div className="flex flex-col items-center bg-gray-100 h-screen py-16 max-w-[1280px] mx-auto" style={style}>
      <RenderAccordion title="Name" answer={nameAnswer} />
      <RenderAccordion title="Place" answer={placeAnswer} />
    </div>
  );
};

export default Accordion;
