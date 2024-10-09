import React from "react";

const Cards = ({ cardTitle, cardDate, cardDescription, cardImageUrl, cardLink }) => {
  return (
    <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
      <img alt="" src={cardImageUrl} className="h-56 w-full object-cover" />

      <div className="bg-white p-4 sm:p-6">
        <time datetime={cardDate} className="block text-xs text-gray-500">
          {" "}
          {cardDate}{" "}
        </time>

        <a href={cardLink}>
          <h3 className="mt-0.5 text-lg text-gray-900">{cardTitle}</h3>
        </a>

        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
          {cardDescription}
        </p>
        <a
          href={cardLink}
          className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
        >
          Check it out
          <span
            aria-hidden="true"
            className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
          >
            &rarr;
          </span>
        </a>
      </div>
    </article>
  );
};

export default Cards;
