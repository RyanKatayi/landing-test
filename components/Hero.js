export default function Hero({ title, subtitle, imageUrl }) {
  return (
    <section className="flex flex-col items-center justify-center text-center h-screen bg-cover bg-center" style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="bg-black bg-opacity-50 p-10 rounded">
        <h1 className="text-4xl font-bold text-white mb-4">{title}</h1>
        <p className="text-xl text-white mb-6">{subtitle}</p>
      </div>
    </section>
  );
}
