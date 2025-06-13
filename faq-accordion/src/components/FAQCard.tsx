import starIcon from "../assets/images/icon-star.svg";
import Accordion from "./Accordion";

const FAQCard = () => {
    return (
        <div className="max-w-[37.5625rem] w-full max-h-[32.875rem] md:max-h-[35.375rem] overflow-y-scroll bg-white rounded-2xl p-6 md:p-10 absolute top-[-5.625rem] md:top-[-9.5625rem]">
            <div className="flex gap-6 md:gap-[1.875rem] items-center mb-[2.625rem]">
                <img src={starIcon} alt="Star Icon" />
                <h1 className="text-custom-purple-950 text-5xl font-bold">
                    FAQs
                </h1>
            </div>
            <Accordion
                question="What is Frontend Mentor, and how will it help me?"
                answer="Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building."
            />
            <hr className="my-[1.625rem] border-gray-200" />
            <Accordion
                question="Is Frontend Mentor free?"
                answer="Yes! Most of Frontend Mentor's challenges are free, but some require a Pro subscription."
            />
            <hr className="my-[1.625rem] border-gray-200" />
            <Accordion
                question="Can I use Frontend Mentor projects in my portfolio?"
                answer="Yes, you can absolutely use Frontend Mentor projects in your portfolio."
            />
            <hr className="my-[1.625rem] border-gray-200" />
            <Accordion
                question="How can I get help if I'm stuck on a challenge?"
                answer="If you're stuck on a challenge on Frontend Mentor, there are several helpful ways to get support including use the Frontend Mentor community forum, join the Frontend Mentor discord, check existing solutions, use online tools & docs, and ask on Twitter or LinkedIn."
            />
        </div>
    );
};

export default FAQCard;
