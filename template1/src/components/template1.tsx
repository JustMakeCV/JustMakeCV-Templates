import React from 'react';

const template1 = () => {
  return (
    <div className="w-full max-w-[8.5in] mx-auto bg-white p-12 font-sans text-gray-800">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="font-mono text-3xl font-medium text-[#212121] mb-1">RICHARD WILLIAMS</h1>
        <h2 className="font-heading text-base font-semibold text-[#3985F7] mb-4">BOOKKEEPER</h2>

        <div className="font-mono text-sm font-medium space-y-1">
          <div className="flex gap-8">
            <div className="flex items-center gap-2">
              <span className="font-mono font-medium text-[#3985F7]">Phone</span>
              <span className="text-[#70757D]">(770) 625-9669</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-mono font-medium text-[#3985F7]">Email</span>
              <span className="text-[#70757D]">richardwilliams@gmail.com</span>
            </div>
          </div>
          <div className="flex gap-8">
            <div className="flex items-center gap-2">
              <span className="font-mono font-medium text-[#3985F7]">Address</span>
              <span className="text-[#70757D]">Houston, TX 47587</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-mono font-medium text-[#3985F7]">LinkedIn</span>
              <span className="text-[#70757D]">linkedin.com/in/richardwilliams</span>
            </div>
          </div>
        </div>
      </div>

      {/* Summary Section */}
      <div className="mb-6">
        <p className="font-sans text-sm leading-relaxed text-[#24272E]">
          A general bookkeeper with 8+ years of experience using both single-entry and double-entry systems for medium-sized businesses. Specialize in performing bookkeeping for multimillion-dollar companies. Possess expertise in numerous pieces of bookkeeping software. Identified and eliminated departmental inefficiencies to increase productivity by 15%.
        </p>
      </div>

      {/* Work Experience Section */}
      <div className="mb-6">
        <h3 className="font-mono text-lg font-thin text-[#212121] mb-3 uppercase">Work Experience</h3>

        {/* Job 1 */}
        <div className="mb-4">
          <h4 className="font-heading font-medium text-base text-[#3985F7]">General Bookkeeper, <span className="font-mono font-medium text-sm text-[#70757D]">Franklin & Rodgers Business Solutions</span></h4> 
          <p className=" font-mono text-sm text-[#3985F7] mb-2">Sep 20XX - Present — Scottsdale, AZ</p>
          <ul className="list-disc list-outside ml-5 font-sans text-sm text-[#52575E] space-y-1 marker:text-[#3985F7]">
            <li>Perform 150+ financial calculations daily such as amounts due, interest charges, balances, discounts, equity, and principal for a multimillion-dollar company</li>
            <li>Access computerized financial information to answer general questions as well as those related to specific accounts</li>
            <li>Formulate and issue bills, invoices, and account and financial statements with 10% increased efficiency to ensure timely deliverables</li>
            <li>Corrected spreadsheet error regarding May 20XX's monthly spending, which resulted in saving approx. $3,500</li>
            <li>Train 3 new administrative assistants and 4 junior bookkeepers</li>
          </ul>
        </div>

        {/* Job 2 */}
        <div className="mb-4">
          <h4 className="font-heading font-medium text-base text-[#3985F7]">Administrative Assistant Bookkeeper, <span className="font-mono font-medium text-sm text-[#70757D]">Patton Group</span></h4>
          <p className="font-mono text-sm text-[#3985F7] mb-2">Jun 20XX — Aug 20XX, Tempe, AZ</p>
          <ul className="list-disc list-outside ml-5 font-sans text-sm text-[#52575E] space-y-1 marker:text-[#3985F7]">
            <li>Managed 2 computers programmed with accounting software to record, store, and analyze information</li>
            <li>Checked 350+ figures, postings, and documents per month for correct entries, mathematical accuracy, and proper codes</li>
            <li>Operated 10-key calculators, typewriters, and copy machines to perform calculations and produce documents</li>
            <li>Matched 800+ order forms with invoices, and recorded the necessary information</li>
          </ul>
        </div>
      </div>

      {/* Education Section */}
      <div className="mb-6">
        <h3 className="font-mono text-lg font-thin text-[#212121] mb-3 uppercase">Education</h3>

        <div className="space-y-2">
          <div className="mb-4">
            <h4 className="font-heading font-medium text-base text-[#3985F7]">B.S. Accounting, <span className="font-mono font-medium text-sm text-[#70757D]">Wilhem University</span></h4>
            <p className="font-mono text-sm text-[#3985F7] mb-2">20XX — Phoenix, AZ</p>
          </div>

          <div className="mb-4">
            <h4 className="font-heading font-medium text-base text-[#3985F7]">A.S. Accounting, <span className="font-mono font-medium text-sm text-[#70757D]">Wilhem University</span></h4>
            <p className="font-mono text-sm text-[#3985F7] mb-2">20XX — Phoenix, AZ</p>
          </div>

          <div className="mb-4">
            <h4 className="font-heading font-medium text-base text-[#3985F7]">Certified Bookkeeper, <span className="font-mono font-medium text-sm text-[#70757D]">American Institute of Professional Bookkeepers</span></h4>
            <p className="font-mono text-sm text-[#3985F7] mb-2">20XX — Phoenix, AZ</p>
          </div>
        </div>
      </div>

      {/* Relevant Skills Section */}
      <div>
        <h3 className="font-mono text-lg font-thin text-[#212121] mb-3 uppercase">Relevant Skills</h3>
        <p className="text-sm font-mono text-[#70757D] font-medium">
          Financial Data Analysis <span className="text-[#3985F7]">•</span> Data Entry <span className="text-[#3985F7]">•</span> Administrative Skills <span className="text-[#3985F7]">•</span> QuickBooks Pro <span className="text-[#3985F7]">•</span>{' '}
          Fluent in English and Spanish <span className="text-[#3985F7]">•</span> Microsoft 365 <span className="text-[#3985F7]">•</span> QuickBooks Online <span className="text-[#3985F7]">•</span> Adaptable
        </p>
      </div>
    </div>
  );
};

export default template1;