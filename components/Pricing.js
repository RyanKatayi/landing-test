export default function Pricing() {
    return (
      <section id="pricing" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Basic Plan</h3>
              <p className="text-4xl font-bold mb-4">$10</p>
              <p className="mb-4">Basic features for personal use.</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Pro Plan</h3>
              <p className="text-4xl font-bold mb-4">$20</p>
              <p className="mb-4">Advanced features for professionals.</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Enterprise Plan</h3>
              <p className="text-4xl font-bold mb-4">$50</p>
              <p className="mb-4">Complete solutions for businesses.</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  