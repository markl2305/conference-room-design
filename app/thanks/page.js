// app/thanks/page.js
export const metadata = {
  title: "Thanks — We’ll be in touch shortly",
};

export default function ThanksPage() {
  return (
    <main className="section-padding bg-brand-beige min-h-[60vh]">
      <div className="container-custom text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Thanks — request received.</h1>
        <p className="mt-4 text-gray-700">
          We’ll email your fixed-price quote within <strong>4 hours</strong>. If you need something urgent,
          call <a className="text-brand-teal font-semibold" href="tel:+15052261457">(505) 226-1457</a>.
        </p>
      </div>
    </main>
  );
}
