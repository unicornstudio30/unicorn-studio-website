import { faq } from "./content";

export default function FAQ() {
  return (
    <section>
      <div className="max-w-[900px] mx-auto px-6 py-16 sm:py-20 lg:py-24 flex flex-col gap-7">
        <h2 className="m-0 text-[30px] sm:text-[36px] lg:text-[40px] leading-[1.1] tracking-[-0.02em] font-extrabold">
          {faq.heading}
        </h2>
        <div className="flex flex-col">
          {faq.items.map((item, i) => (
            <div
              key={item.question}
              className={`py-6 border-t border-[rgba(21,22,22,0.12)] ${
                i === faq.items.length - 1 ? "border-b" : ""
              }`}
            >
              <h3 className="m-0 mb-2 text-[19px] font-bold">{item.question}</h3>
              <p className="m-0 text-base text-[rgba(21,22,22,0.75)]">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
