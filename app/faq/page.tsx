export default function FAQPage() {
  const faqs = [
    {
      question: "How does the exchange work?",
      answer: "Our platform connects with FixedFloat to provide you with the best exchange rates."
    },
    {
      question: "What is the commission?",
      answer: "We charge a 2% commission on all exchanges."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-[#0B0E1A] py-8">
      <div className="max-w-4xl mx-auto p-4">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 md:p-8">
          <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">FAQ</h1>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-4">
                <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                <p className="text-gray-600 dark:text-gray-400">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}