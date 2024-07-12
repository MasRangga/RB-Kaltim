import React from "react";

const BeritaKomponen = ({ Image, date, CardTitle, CardDescription, link }) => {
  return (
    <div className="w-full px-4 md:w-1/2 lg:w-1/3">
      <div className="mb-10">
        <div className="mb-8 overflow-hidden rounded">
          <img src={Image} alt="" className="w-full" />{" "}
          {/* Perbaikan: Image harus diawali dengan huruf besar */}
        </div>
        <div>
          {date && (
            <span className="mb-5 inline-block rounded bg-primary px-4 py-1 text-center text-xs font-semibold leading-loose text-white">
              {date}
            </span>
          )}
          <h3>
            <a
              href={link}
              className="mb-4 inline-block text-xl font-semibold text-dark hover:text-blue-800 dark:text-primary sm:text-2xl lg:text-xl xl:text-2xl"
            >
              {CardTitle}
            </a>
          </h3>
          <p className="text-base text-body-color dark:text-dark-6">
            {CardDescription}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BeritaKomponen;
