import React from 'react';

const Education = () => {
  return (
    <div className="bg-[#2176ff] min-h-screen w-full py-16 px-4 flex flex-col items-center text-white">
      <h2 className="text-5xl md:text-6xl font-extrabold mb-12 text-center tracking-wide cookie-regular about-heading">
        Education
      </h2>

      <div className="flex flex-col md:flex-row justify-center items-center md:items-stretch gap-8 w-full max-w-6xl">
        {/* --- Card 1 --- */}
        <div className="flex-1 w-full max-w-sm">
          <div className="educationBox p-4">
            {/* Top Block */}
            <div className="flex flex-col justify-center items-center">
              <div className="text-center degree font-bold text-xl md:text-2xl text-blue-600 mb-1">
                Bachelor's in Computer Engineering
              </div>
              <div className="collegeName font-semibold text-lg text-gray-800">
                Galgotias University
              </div>
            </div>

            {/* Bottom Block */}
            <div className="flex flex-col justify-center items-center mt-2">
              <p className="year text-sm bg-blue-50 text-blue-700 font-medium py-1 px-3 rounded-full inline-block mb-2">
                2022 - 2026
              </p>
              <p className="year font-medium text-base text-gray-700 mb-1">
                CGPA: 9.7
              </p>
              <p className="interest text-gray-600 text-center text-sm md:text-base">
                Key Interests: Web Development, Software Development, and DSA.
              </p>
            </div>
          </div>
        </div>

        {/* --- Card 2 --- */}
        <div className="flex-1 w-full max-w-sm">
          <div className="educationBox p-4">
            <div className="flex flex-col justify-center items-center">
              <div className="text-center degree font-bold text-xl md:text-2xl text-blue-600 mb-1">
                Intermediate (12th Grade)
              </div>
              <div className="collegeName font-semibold text-lg text-gray-800">
                Kalvin Central Academy
              </div>
            </div>

            <div className="flex flex-col justify-center items-center mt-2">
              <p className="year text-sm bg-blue-50 text-blue-700 font-medium py-1 px-3 rounded-full inline-block mb-2">
                2021 - 2022
              </p>
              <p className="year font-medium text-base text-gray-700 mb-1">
                Percentage: 88%
              </p>
              <p className="interest text-gray-600 text-center text-sm md:text-base">
                Core Subjects: Physics, Chemistry, Mathematics, and English.
              </p>
            </div>
          </div>
        </div>

        {/* --- Card 3 --- */}
        <div className="flex-1 w-full max-w-sm">
          <div className="educationBox p-4">
            <div className="flex flex-col justify-center items-center">
              <div className="text-center degree font-bold text-xl md:text-2xl text-blue-600 mb-1">
                Matriculation (10th Grade)
              </div>
              <div className="collegeName font-semibold text-lg text-gray-800">
                Kalvin Central Academy
              </div>
            </div>

            <div className="flex flex-col justify-center items-center mt-2">
              <p className="year text-sm bg-blue-50 text-blue-700 font-medium py-1 px-3 rounded-full inline-block mb-2">
                2019 - 2020
              </p>
              <p className="year font-medium text-base text-gray-700 mb-1">
                Percentage: 85%
              </p>
              <p className="interest text-gray-600 text-center text-sm md:text-base">
                Core Subjects: Science, Mathematics, and Social Studies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
