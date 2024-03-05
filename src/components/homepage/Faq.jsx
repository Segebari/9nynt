import React, { useState } from 'react';
import img from '../../assets/faq.svg';

const Faq = () => {
  const [expandedAnswers, setExpandedAnswers] = useState([]);

  const toggleAnswer = (index) => {
    setExpandedAnswers((prevAnswers) => {
      const newAnswers = [...prevAnswers];
      newAnswers[index] = !newAnswers[index];
      return newAnswers;
    });
  };

  const questions = [
    {
      question: 'What is 9nynt Shop?',
      answer: 'This is a placeholder answer for question 1.',
    },
    {
      question: 'How does 9nynt shop work?',
      answer: '9nynt Shop simplifies your business journey. Just list your products, reach a wider audience, and enjoy streamlined transactions. Its a seamless platform designed for business growth and efficiency.',
    },
    {
      question: 'What is 9nyntpay?',
      answer: 'This is a placeholder answer for question 3.',
    },
    {
      question: 'Are 9nynt shops profitable?',
      answer: 'This is a placeholder answer for question 4.',
    },
    {
      question: 'How does 9nynt shop help your business grow?',
      answer: 'This is a placeholder answer for question 5.',
    },
  ];

  return (
    <>
      <div className="flex xs:flex-col xs:gap-16 md:gap-0 md:flex-row md:h-96 my-10">
        <div className="md:w-1/2">

            <h2 className='font-bold text-3xl pb-8'>
                Have Question About <br />
                9nynt Shop?
            </h2>

          <ul className="faq-list">
            {questions.map((question, index) => (
              <li key={index} className="faq-item">
              <div className="flex items-center justify-between py-3 font-semibold text-md">
                <p className="faq-question">{question.question}</p>
                <button
                  className={`faq-toggle ${expandedAnswers[index] ? 'expanded' : ''} text-lg`}
                  onClick={() => toggleAnswer(index)}
                >
                  {expandedAnswers[index] ? '-' : '+'}
                </button>
              </div>
              <div className="faq-answer text-gray-400 text-md">{expandedAnswers[index] && question.answer}</div>
            </li>
            
            ))}
          </ul>
        </div>
        <div className="md:w-1/2">
          <img src={img} alt="clothes and food" className="h-96 m-auto" style={{ objectFit: 'cover' }} />
        </div>
      </div>
    </>
  );
};

export default Faq;
