"use client";
import { useState } from "react";
import PlusIcon from "../assets/icons/plus.svg";
import MinusIcon from "../assets/icons/minus.svg";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";
const items = [
  {
    question: "What is crmtooling.com?",
    answer:
      "crmtooling.com is a comprehensive CRM application designed to help businesses efficiently manage customer relationships. With features like detailed customer profiles, filtering, bulk actions, and secure data storage, crmtooling.com streamlines customer interactions and record-keeping.",
  },
  {
    question: "How secure is my data on crmtooling.com?",
    answer:
      "Your data’s security is our top priority. crmtooling.com uses advanced security measures to ensure that all information is stored and managed safely, keeping your customer data private and protected.",
  },
  {
    question: "Can I customize the fields in customer profiles?",
    answer:
      "Yes! crmtooling.com allows you to add custom fields to tailor customer profiles to your business needs. This feature ensures flexibility for various types of customer data beyond the default fields.",
  },
  {
    question: "Does crmtooling.com support bulk actions?",
    answer:
      "Absolutely. You can select multiple customers at once to perform actions such as updating statuses, applying tags, or managing notifications. This helps you work more efficiently, especially with larger customer databases.",
  },
];

const AccordinationItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className=" py-7 border-b border-white/30"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex items-center ">
        <span className="flex-1 text-lg font-bold">{question}</span>
        {isOpen ? <MinusIcon /> : <PlusIcon />}
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: "auto", marginTop: "16px" }}
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const FAQs = () => {
  return (
    <div className="bg-black text-white py-[72px] sm:py-24 bg-gradient-to-b from-[#5D2CA8] to-black ">
      <div className="container">
        <h2 className="text-5xl sm:text-6xl sm:w-[648px] mx-auto text-center text-white tracking-tighter">
          Frequently Asked Questions
        </h2>
        <div className="mt-12 max-w-[648px] mx-auto">
          {items.map(({ question, answer }) => (
            <AccordinationItem
              question={question}
              answer={answer}
              key={question}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
