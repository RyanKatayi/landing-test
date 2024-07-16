export default function CTA({ text, link }) {
    return (
      <div className="text-center my-10">
        <a href={link} className="bg-blue-500 text-white px-6 py-3 rounded-full">
          {text}
        </a>
      </div>
    );
  }
  