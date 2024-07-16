export default function Testimonials({ testimonials }) {
    return (
      <section id="contact" className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow-md">
                <p className="italic">"{testimonial.quote}"</p>
                <p className="mt-4 text-right">- {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  