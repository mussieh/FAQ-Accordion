import plusIcon from "../assets/images/icon-plus.svg";
import minusIcon from "../assets/images/icon-minus.svg";
import { useState } from "react";

type AccordionProps = {
    question: string;
    answer: string;
};

const Accordion = ({ question, answer }: AccordionProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <div className="flex justify-between items-center">
                <p
                    onClick={() => setIsOpen((prev) => !prev)}
                    className="text-custom-purple-950 font-bold w-[80%] cursor-pointer hover:text-[#AD28EB]"
                >
                    {question}
                </p>
                <button
                    type="button"
                    onClick={() => setIsOpen((prev) => !prev)}
                    className="relative w-6 h-6 cursor-pointer"
                >
                    <img
                        src={plusIcon}
                        alt="Plus Icon"
                        className={`absolute top-0 left-0 w-6 h-6 transition-opacity duration-300 ${
                            isOpen ? "opacity-0" : "opacity-100"
                        }`}
                    />
                    <img
                        src={minusIcon}
                        alt="Minus Icon"
                        className={`absolute top-0 left-0 w-6 h-6 transition-opacity duration-300 ${
                            isOpen ? "opacity-100" : "opacity-0"
                        }`}
                    />
                </button>
            </div>
            <div
                className={`
          overflow-hidden
          transition-all duration-500 ease-in-out
          ${isOpen ? "max-h-70 opacity-100" : "max-h-0 opacity-0"}
        `}
            >
                <p className="mt-4 text-custom-purple-600">{answer}</p>
            </div>
        </div>
    );
};

export default Accordion;
