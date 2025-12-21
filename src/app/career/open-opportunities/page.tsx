'use client';

import { useState } from 'react';
import { Search } from 'lucide-react';

const experienceLevels = [
  'Experienced Professionals',
  'Internship',
  'New Graduates',
];

const roleTypes = [
  'Business Operations',
  'Engineering',
  'Investing',
  'Quantitative Research',
];

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

        {/* ================= HERO (UNCHANGED) ================= */}
        <section className="relative overflow-visible">
          <div className="bg-primary">
            <div className="container-responsive">
              <div className="min-h-[60vh] md:min-h-[70vh] flex items-start pt-24 md:pt-32 lg:pt-40">

                <h1 className="text-section-title font-brand text-white">
                  Open Opportunities
                </h1>
              </div>
            </div>
          </div>
        </section>

        {/* ========== FILTERS + RESULTS (FIXED SPACING) ========= */}
        <section className="container-responsive pt-12 md:pt-16 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-16">
            {/* ================= LEFT FILTERS ================= */}
            <aside>
              {/* SEARCH */}
              <div className="mb-8">
                <div className="relative bg-gray-100 px-4 py-2">
                  <input
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    placeholder="Search"
                    className="bg-transparent w-full outline-none text-sm"
                  />
                  <Search className="absolute right-4 top-2.5 h-4 w-4 text-gray-500" />
                </div>
                <div className="border-b border-gray-300 mt-4" />
              </div>

              {/* OPPORTUNITIES + CLEAR */}
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm">Opportunities (0)</span>
                <button
                  onClick={clearAll}
                  className="text-sm text-primary"
                >
                  Clear All Filters
                </button>
              </div>

              {/* SELECTED FILTER CHIPS */}
              {chips.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-8">
                  {chips.map(chip => (
                    <span
                      key={chip}
                      className="bg-primary text-white text-xs px-3 py-1 rounded-full flex items-center gap-2"
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
                    className="flex justify-between w-full text-left mb-3 text-sm font-medium"
                  >
                    {section.title}
                    <span>
                      {open[section.key as keyof typeof open]
                        ? '–'
                        : '+'}
                    </span>
                  </button>

                  <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      open[section.key as keyof typeof open]
                        ? 'max-h-96 opacity-100'
                        : 'max-h-0 opacity-0'
                    }`}
                  >
                    <button
                      onClick={() =>
                        selectAll(
                          section.values,
                          section.setSelected
                        )
                      }
                      className="text-sm text-primary mb-3"
                    >
                      Select All
                    </button>

                    <div className="space-y-2">
                      {section.values.map(v => (
                        <label
                          key={v}
                          className="flex items-center text-sm"
                        >
                          <input
                            type="checkbox"
                            checked={section.selected.includes(v)}
                            onChange={() =>
                              toggle(
                                v,
                                section.selected,
                                section.setSelected
                              )
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
            <section className="bg-gray-100 p-12">
              <p className="text-sm mb-4">Viewing 0</p>

              <p className="text-lg mb-6">
                None of our open positions match your search.
                Try adjusting your filters for additional
                results.
              </p>

              <div className="border-b border-gray-300" />
            </section>
          </div>
        </section>
      </main>
    </div>
  );
}
