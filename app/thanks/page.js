export const metadata = {
  title: "Thanks — CalLord Unified Technologies",
  description: "Thanks for your request. We’ll be in touch shortly.",
};

export default function ThanksPage() {
  return (
    <main className="min-h-screen flex items-center justify-center p-6 bg-brand-beige">
      <div className="max-w-xl text-center bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Thanks — we got it!</h1>
        <p className="text-gray-600">
          We’ll email you within <strong>4 business hours</strong> with next steps.  
          If it’s urgent, call us at <a href="tel:+15052261457" className="text-brand-teal font-semibold"> (505) 226-1457</a>.
        </p>
      </div>
    </main>
  );
}
