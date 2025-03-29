"use client"
import { useState } from 'react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full py-4 flex items-center justify-between text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-base font-medium text-gray-900">{question}</span>
        <span className="ml-6">
          {isOpen ? (
            <span className="text-2xl text-black">-</span>
          ) : (
            <span className="text-2xl text-black">+</span>
          )}
        </span>
      </button>
      {isOpen && (
        <div className="pb-4">
          <p className="text-gray-600">{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: "Lorem ipsum dolor sit amet consectetur sed venetis velit ?",
      answer: "We blend innovative technologies with cutting-edge design to create digital products that excel in both form and function."
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur sed venetis velit ?",
      answer: "Our team combines technical expertise with creative vision to deliver exceptional digital solutions."
    },
    {
      question: "Lorem ipsum dolor sit venetis velit ?",
      answer: "We focus on creating intuitive and user-friendly experiences that meet your specific needs."
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur sed venetis velit ?",
      answer: "Our approach ensures that every project is delivered with the highest quality standards."
    },
    {
      question: "Lorem ipsum venetis velit ?",
      answer: "We're committed to providing innovative solutions that drive real business results."
    }
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <h2 className="font-['Raleway'] text-[36px] font-black leading-[122px] tracking-[-1.75px] text-gray-900 align-middle">FAQ's Questions</h2>
            <p className="mt-4 text-gray-600">
              We blend innovative technologies with cutting-edge design to create digital products that excel in both.
            </p>
          </div>
          <div className="md:col-span-2">
            <div className="space-y-2">
              {faqs.map((faq, index) => (
                <FAQItem key={index} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>
        </div>
        
        {/* Newsletter Section */}
        <div className="mt-16 bg-black text-white p-8 rounded-lg">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-2xl font-bold">Sign up for smart water-saving insights today!</h3>
            </div>
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-64 px-4 py-2 rounded-l bg-gray-100 text-black focus:outline-none"
              />
              <button className="bg-gray-100 text-black px-6 py-2 rounded-r hover:bg-gray-200 transition-colors">
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ; 