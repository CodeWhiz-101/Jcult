'use client';

import { useState } from 'react';
import { Search } from 'lucide-react';
import PageBreadcrumb from '@/components/ui/PageBreadcrumb';

const experienceLevels = ['Full time', 'Internship'];
const roleTypes = ['Business Operations', 'Engineering', 'Investing'];
const officeLocations = ['Dubai'];

export default function CareersPage() {
  const [search, setSearch] = useState('');
  const [open, setOpen] = useState({
    experience: true,
    role: true,
    location: true,
  });

  const [selectedExperience, setSelectedExperience] = useState<string[]>([]);
  const [selectedRoles, setSelectedRoles] = useState<string[]>([]);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);

  const toggle = (
    value: string,
    list: string[],
    setList: (v: string[]) => void
  ) => {
    setList(
      list.includes(value)
        ? list.filter(v => v !== value)
        : [...list, value]
    );
  };

  const selectAll = (
    values: string[],
    setList: (v: string[]) => void
  ) => setList(values);

  const clearAll = () => {
    setSelectedExperience([]);
    setSelectedRoles([]);
    setSelectedLocations([]);
    setSearch('');
  };

  const chips = [
    ...selectedExperience,
    ...selectedRoles,
    ...selectedLocations,
  ];

  return (
    <div className="min-h-screen bg-main">
      <main className="pt-[88px]">

        {/* ================= HERO ================= */}
                       <section className="relative overflow-visible">
                         <div className="bg-primary ml-7 md:ml-10 lg:ml-12 xl:ml-14">
                           <div className="container-responsive">
                       
                             {/* ⛔ GREEN BOX — DO NOT TOUCH */}
                             <div className="pt-22 md:pt-26 lg:pt-30 pb-38 md:pb-42 lg:pb-46">
                
                       
                               {/* BREADCRUMB */}
                               <div style={{ marginBottom: '24px' }}>
                                 <PageBreadcrumb
                                   items={[
                                     { label: 'Career', href: '/career' },
                                     { label: 'Open Oppurtunities', href: '/career/open-oppurtunities' },
                                   ]}
                                 />
                               </div>
                       
                               {/* TITLE */}
                               <h1
                                 style={{
                                   fontFamily: 'Raleway, sans-serif',
                                   fontWeight: 500,
                                   fontSize: '60px',          // ⬅ slightly bigger
                                   lineHeight: '1.1',         // ⬅ tighter
                                   letterSpacing: '-0.018em',
                                   maxWidth: '860px',
                                   color: '#ffffff',
                                   WebkitFontSmoothing: 'antialiased',
                                   MozOsxFontSmoothing: 'grayscale',
                                 }}
                               >
                                 Open Oppurtunities
                               </h1>
                       
                             </div>
                           </div>
                         </div>
                       </section>
        {/* ========== FILTERS + RESULTS ========== */}
        <section className="pb-16">
<div className="ml-7 md:ml-10 lg:ml-12 xl:ml-14">

          
            <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr]">

              {/* ================= LEFT FILTERS ================= */}
              <aside className="pt-8 md:pt-10 pr-8 md:pr-10 lg:pr-12">




                {/* SEARCH */}
                <div className="mb-8">
                  <div className="relative bg-gray-100 px-4 py-2">
                    <input
                      value={search}
                      onChange={e => setSearch(e.target.value)}
                      placeholder="Search"
                      className="bg-transparent w-full outline-none text-[15px]"


                    />
                    <Search className="absolute right-4 top-3 h-5 w-5 text-gray-500" />
                  </div>
                  <div className="border-b border-gray-300 mt-4" />
                </div>

                {/* OPPORTUNITIES + CLEAR */}
                {chips.length > 0 && (
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-[15px] font-medium text-primary">
                      Opportunities (0)
                    </span>
                    <button
                      onClick={clearAll}
                      className="text-[15px] font-medium text-primary"
                    >
                      Clear All Filters
                    </button>
                  </div>
                )}

                {/* SELECTED FILTER CHIPS */}
                {chips.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-8">
                    {chips.map(chip => (
                      <span
                        key={chip}
                        className="bg-primary text-white text-[14px] px-4 py-1.5 rounded-full flex items-center gap-2"
                      >
                        {chip}
                        <button
                          onClick={() => {
                            setSelectedExperience(prev =>
                              prev.filter(v => v !== chip)
                            );
                            setSelectedRoles(prev =>
                              prev.filter(v => v !== chip)
                            );
                            setSelectedLocations(prev =>
                              prev.filter(v => v !== chip)
                            );
                          }}
                        >
                          ×
                        </button>
                      </span>
                    ))}
                  </div>
                )}

                {/* FILTER SECTIONS */}
                {[
                  {
                    title: 'Experience Level',
                    key: 'experience',
                    values: experienceLevels,
                    selected: selectedExperience,
                    setSelected: setSelectedExperience,
                  },
                  {
                    title: 'Role Type',
                    key: 'role',
                    values: roleTypes,
                    selected: selectedRoles,
                    setSelected: setSelectedRoles,
                  },
                  {
                    title: 'Office Location',
                    key: 'location',
                    values: officeLocations,
                    selected: selectedLocations,
                    setSelected: setSelectedLocations,
                  },
                ].map(section => (
                  <div key={section.key} className="mb-10">

                    <button
                      onClick={() =>
                        setOpen(o => ({
                          ...o,
                          [section.key]:
                            !o[section.key as keyof typeof o],
                        }))
                      }
                      className="flex justify-between w-full text-left mb-4 text-[16px] font-medium text-primary"
                    >
                      {section.title}
                      <span className="text-[24px] font-medium leading-none">
                        {open[section.key as keyof typeof open] ? '–' : '+'}
                      </span>
                    </button>

                    <div
                      className={`transition-all duration-300 overflow-hidden ${
                        open[section.key as keyof typeof open]
                          ? 'max-h-96 opacity-100'
                          : 'max-h-0 opacity-0'
                      }`}
                    >
                      <button
                        onClick={() =>
                          selectAll(section.values, section.setSelected)
                        }
                        className="text-[15px] mb-4"
  style={{ color: 'rgb(25,113,73)' }}
                      >
                        Select All
                      </button>

                      <div className="space-y-2">
                        {section.values.map(v => (
                          <label
                            key={v}
                            className="flex items-center text-[15px] text-primary">
                          
                            <input
                              type="checkbox"
                              checked={section.selected.includes(v)}
                              onChange={() =>
                                toggle(v, section.selected, section.setSelected)
                              }
                              className="mr-3"
                            />
                            {v}
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="border-b border-gray-200 mt-6" />
                  </div>
                ))}
              </aside>

              {/* ================= RIGHT RESULTS ================= */}
              <section className="bg-gray-100 px-14 py-16">
                <p className="text-[20px] mb-8 text-primary">
  Viewing 0
</p>

<p className="text-[20px] mb-6 leading-relaxed text-primary">
  None of our open positions match your search.
  Try adjusting your filters for additional results.
</p>


                <div className="border-b border-gray-300" />
              </section>

            </div>
          </div>
          
        </section>
      </main>
    </div>
  );
}
