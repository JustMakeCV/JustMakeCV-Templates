import React from "react";

const Template2 = () => {
  return (
    <div className="w-full max-w-[8.5in] mx-auto bg-white flex font-open-sans font-light text-gray-800">
      {/* Left Sidebar - Dark (0–8 of 19 units, ~42%) */}
      <div className="w-[42%] bg-[#3B3838] text-white pt-20 px-8 pb-0 flex flex-col min-h-screen">
        {/* Name Section */}
        <div className="mb-8">
          <h1 className="font-impact text-5xl font-normal whitespace-nowrap">
            Patrick <span className="text-[#BF8F00]">Morgan</span>
          </h1>
        </div>

        {/* Profile Photo */}
        <div className="mb-8">
          <div className="w-48 h-48 rounded-full bg-gray-400 mx-auto overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-500 flex items-center justify-center">
              <span className="text-6xl text-gray-600">👤</span>
            </div>
          </div>
        </div>

        {/* Highlights Section */}
        <div className="mb-8">
          <h2 className="font-impact text-3xl font-normal text-[#BF8F00] mb-4">
            Skills
          </h2>
          <ul className="space-y-0 text-base font-open-sans leading-[1.2] text-white list-none pl-0 ml-0">
            <li className="flex items-center gap-2">
              <span className="relative -top-2 text-white text-2xl shrink-0 w-[1em] text-center">
                •
              </span>
              <span className="flex-1 min-w-0">
                Strategic and financial planning expert
              </span>
            </li>

            <li className="flex items-center gap-2">
              <span className="text-white text-2xl shrink-0 w-[1em] text-center">
                •
              </span>
              <span className="flex-1 min-w-0">Accurate forecasting</span>
            </li>

            <li className="flex items-center gap-2">
              <span className="text-white text-2xl shrink-0 w-[1em] text-center">
                •
              </span>
              <span className="flex-1 min-w-0">Process implementation</span>
            </li>

            <li className="flex items-center gap-2">
              <span className="text-white text-2xl shrink-0 w-[1em] text-center">
                •
              </span>
              <span className="flex-1 min-w-0">
                Staff leadership and development
              </span>
            </li>

            <li className="flex items-center gap-2">
              <span className="relative -top-2 text-white text-2xl shrink-0 w-[1em] text-center">
                •
              </span>
              <span className="flex-1 min-w-0">
                Business performance improvement
              </span>
            </li>

            <li className="flex items-center gap-2">
              <span className="text-white text-2xl shrink-0 w-[1em] text-center">
                •
              </span>
              <span className="flex-1 min-w-0">
                Proficient in SAP, Excel VBA
              </span>
            </li>
          </ul>
        </div>

        {/* Education Section */}
        <div className="mb-8">
          <h2 className="font-impact text-3xl font-normal text-[#BF8F00] mb-4">
            Education
          </h2>
          <div className="font-open-sans space-y-4 text-base">
            <div>
              <p className="font-thin whitespace-nowrap ">
                BACHELOR OF SCIENCE: <span className="font-normal">FINANCE</span> - 2014
              </p>
              <p className="font-normal mt-0">
                COLUMBIA UNIVERSITY,{" "}
                <span className="font-thin">NEW YORK</span>
              </p>
            </div>
            <div>
              <p className="font-thin whitespace-nowrap">
                BACHELOR OF SCIENCE: <span className="font-normal">FINANCE</span> - 2011
              </p>
              <p className="font-normal mt-0">
                COLUMBIA UNIVERSITY,{" "}
                <span className="font-thin">CHICAGO</span>
              </p>
            </div>
          </div>
        </div>

        {/* Certifications Section */}
        <div className="mb-8">
          <h2 className="font-impact text-3xl font-normal text-[#BF8F00] mb-4">
            Certifications
          </h2>
          <p className="text-base font-open-sans">Certified Management Accountant</p>
        </div>

        {/* Decorative Element - flush with bottom of page */}
        <div className="mt-auto pt-8">
          <div className="w-20 h-6 bg-[#BF9000]"></div>
        </div>
      </div>

      {/* Right Content Area - White */}
      <div className="w-[58%] pt-20 pr-8 pb-8 pl-10">
        {/* Contact Info - golden bar attached to right border */}
        <div className="mb-6 flex justify-between items-start -mr-8">
          <div className="text-base font-open-sans space-y-0.5 mt-0 text-thin">
            <p className="leading-tight">+1 (970) 333-3833</p>
            <p className="leading-tight">patric.morgan@mail.com</p>
            <p className="leading-tight">linkedIn.com/patric.morgan</p>
          </div>
          <div className="w-48 h-16 bg-[#BF9000] shrink-0"></div>
        </div>

        {/* Summary Section */}
        <div className="mb-6">
          <h2 className="font-impact text-3xl font-normal mb-3">Summary</h2>
          <p className="text-base text-thin leading-relaxed text-justify">
            Skilled Financial Manager adept at increasing work process
            efficiency and profitability through functional and technical
            analysis. Successful at advising large corporations, small
            businesses, and individual clients. Areas of expertise include asset
            allocation, investment strategy, and risk management.
          </p>
        </div>

        {/* Experience Section */}
        <div>
          <h2 className="font-impact text-3xl font-normal mb-3">Experience</h2>

          {/* Job 1 */}
          <div className="mb-6">
            <div className="mb-2">
              <h3 className="font-open-sans font-semibold text-base">
                FINANCE MANAGER{" "}
                <span className="font-open-sans font-thin">
                  - 09/2015 to 05/2019
                </span>
              </h3>
              <h4 className="font-open-sans font-semibold text-base">
                M&K FINANCIAL GROUP,{" "}
                <span className="font-open-sans font-thin">NEW YORK</span>
              </h4>
            </div>
            <ul className="text-base font-open-sans text-thin leading-[1] space-y-0 list-none ml-0 pl-0">
              <li className="flex items-start gap-2 py-0.5">
                <span className="text-3xl text-black leading-[1] shrink-0 relative -top-1.5">
                  •
                </span>
                <span>
                  Manage the modelling, planning, and execution of all financial
                  processes.
                </span>
              </li>
              <li className="flex items-start gap-2 py-0.5">
                <span className="text-3xl text-black leading-[1] shrink-0 relative -top-1.5">
                  •
                </span>
                <span>
                  Carry short and long-term custom comprehensive financial
                  strategies to reach company goals.
                </span>
              </li>
              <li className="flex items-start gap-2 py-0.5">
                <span className="text-3xl text-black leading-[1] shrink-0 relative -top-1.5">
                  •
                </span>
                <span>
                  Recommended innovative alternatives to generate revenue and
                  reduce unnecessary costs.
                </span>
              </li>
              <li className="flex items-start gap-2 py-0.5">
                <span className="text-3xl text-black leading-[1] shrink-0 relative -top-1.5">
                  •
                </span>
                <span>
                  Employed advanced deal analysis, including hands-on
                  negotiations with potential investors.
                </span>
              </li>
              <li className="flex items-start gap-2 py-0.5">
                <span className="text-3xl text-black leading-[1] shrink-0 relative -top-1.5">
                  •
                </span>
                <span>
                  Research market trends and surveys and use information to
                  stimulate business.
                </span>
              </li>
            </ul>
          </div>

          {/* Job 2 */}
          <div className="mb-6">
            <div className="mb-2">
              <h3 className="font-open-sans font-semibold text-base">
                FINANCE MANAGER{" "}
                <span className="font-open-sans font-thin">
                  - 09/2013 to 05/2015
                </span>
              </h3>
              <h4 className="font-open-sans font-semibold text-base">
                AGO FINANCIAL GROUP,{" "}
                <span className="font-open-sans font-thin">NEW YORK</span>
              </h4>
            </div>
            <ul className="text-base font-open-sans text-thin leading-[1] space-y-0 list-none ml-0 pl-0">
              <li className="flex items-start gap-2 py-0.5">
                <span className="text-3xl text-black leading-[1] shrink-0 relative -top-1.5">
                  •
                </span>
                <span>
                  Drafted executive analysis reports highlighting business
                  issues, potential risks, and profit opportunities.
                </span>
              </li>
              <li className="flex items-start gap-2 py-0.5">
                <span className="text-3xl text-black leading-[1] shrink-0 relative -top-1.5">
                  •
                </span>
                <span>
                  Recommended innovative alternatives to generate revenue and
                  reduce unnecessary costs.
                </span>
              </li>
              <li className="flex items-start gap-2 py-0.5">
                <span className="text-3xl text-black leading-[1] shrink-0 relative -top-1.5">
                  •
                </span>
                <span>
                  Employed advanced deal analysis, including hands-on
                  negotiations with potential investors.
                </span>
              </li>
              <li className="flex items-start gap-2 py-0.5">
                <span className="text-3xl text-black leading-[1] shrink-0 relative -top-1.5">
                  •
                </span>
                <span>
                  Analysed market trends and surveys and used information to
                  revenue growth.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template2;
