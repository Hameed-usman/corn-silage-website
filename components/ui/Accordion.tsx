"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionItemProps {
  question: string;
  answer: string | React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
}

function AccordionItem({ question, answer, isOpen, onClick }: AccordionItemProps) {
  return (
    <div className="border border-[rgba(26,77,46,0.1)] rounded-xl bg-white overflow-hidden mb-4 transition-shadow hover:shadow-md">
      <button
        className="flex w-full items-center justify-between px-6 py-5 text-left focus:outline-none"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-gray-900 pr-4">{question}</span>
        <ChevronDown
          className={cn(
            "text-[#C8973A] transition-transform duration-300 flex-shrink-0",
            isOpen ? "rotate-180" : "rotate-0"
          )}
          size={20}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 pb-5 pt-0 text-gray-600 leading-relaxed border-t border-[rgba(26,77,46,0.05)] mt-2">
              <div className="pt-3">{answer}</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

interface AccordionProps {
  items: { question: string; answer: string | React.ReactNode }[];
  className?: string;
}

export default function Accordion({ items, className }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className={cn("w-full max-w-3xl mx-auto", className)}>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === index}
          onClick={() => toggleItem(index)}
        />
      ))}
    </div>
  );
}
