import React, { useState } from 'react';
import { faqsData } from './Data';
import NewFAQ from './NewFAQ';

const FAQ = () => {
  const [faqs, setFaqs] = useState(faqsData);

  return (
    <main>
      <section>
        <h1>FAQs</h1>
        {faqs.map((faq) => (
          <NewFAQ key={faq.id} {...faq} />
        ))}
      </section>
    </main>
  );
};

export default FAQ;
