'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { jobs } from '@/data/jobsData';
import Link from 'next/link';

function OpenOpportunitiesContent() {
  const searchParams = useSearchParams();
  const [selectedExperience, setSelectedExperience] = useState<string[]>([]);
  const [selectedRoleType, setSelectedRoleType] = useState<string[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<string[]>([]);

  useEffect(() => {
    const experienceParam = searchParams.get('experience');
    if (experienceParam) {
      setSelectedExperience(experienceParam.split(','));
    }
  }, [searchParams]);

  const experienceLevels = ['Internship', 'Graduates'];
  const roleTypes = ['Trading', 'Technology', 'Operations', 'Research', 'Risk Management'];
  const locations = ['Dubai'];

  const toggleFilter = (value: string, selected: string[], setter: (val: string[]) => void) => {
    if (selected.includes(value)) {
      setter(selected.filter(v => v !== value));
    } else {
      setter([...selected, value]);
    }
  };

  const filteredJobs = jobs.filter(job => {
    const matchExperience = selectedExperience.length === 0 || selectedExperience.includes(job.experienceLevel);
    const matchRole = selectedRoleType.length === 0 || selectedRoleType.includes(job.roleType);
    const matchLocation = selectedLocation.length === 0 || selectedLocation.includes(job.location);
    return matchExperience && matchRole && matchLocation;
  });

  return (
    <div className="min-h-screen bg-main">
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative overflow-visible mb-8 md:mb-16">
          <div className="bg-primary">
            <div className="container-responsive">
              <div className="min-h-[60vh] md:min-h-[70vh] flex items-start pt-12 md:pt-16 lg:pt-20">
                <h1 className="text-section-title font-brand text-white">
                  Open Opportunities
                </h1>
              </div>
            </div>
          </div>
        </section>

        {/* Filters and Jobs */}
        <section className="py-6 md:py-8 lg:py-16">
          <div className="container-responsive">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Filters - Left */}
              <div className="w-full md:w-1/4 space-y-6">
                {/* Experience Level */}
                <div>
                  <h3 className="text-lg font-lora  text-primary mb-4">Experience Level</h3>
                  <div className="space-y-2">
                    {experienceLevels.map(level => (
                      <label key={level} className="flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={selectedExperience.includes(level)}
                          onChange={() => toggleFilter(level, selectedExperience, setSelectedExperience)}
                          className="mr-3 w-4 h-4 accent-primary"
                        />
                        <span className="text-sm font-raleway text-main">{level}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Role Type */}
                {/* <div>
                  <h3 className="text-lg font-lora  text-primary mb-4">Role Type</h3>
                  <div className="space-y-2">
                    {roleTypes.map(role => (
                      <label key={role} className="flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={selectedRoleType.includes(role)}
                          onChange={() => toggleFilter(role, selectedRoleType, setSelectedRoleType)}
                          className="mr-3 w-4 h-4 accent-primary"
                        />
                        <span className="text-sm font-raleway text-main">{role}</span>
                      </label>
                    ))}
                  </div>
                </div> */}

                {/* Office Location */}
                <div>
                  <h3 className="text-lg font-lora  text-primary mb-4">Office Location</h3>
                  <div className="space-y-2">
                    {locations.map(location => (
                      <label key={location} className="flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={selectedLocation.includes(location)}
                          onChange={() => toggleFilter(location, selectedLocation, setSelectedLocation)}
                          className="mr-3 w-4 h-4 accent-primary"
                        />
                        <span className="text-sm font-raleway text-main">{location}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Clear Filters */}
                {(selectedExperience.length > 0 || selectedRoleType.length > 0 || selectedLocation.length > 0) && (
                  <button
                    onClick={() => {
                      setSelectedExperience([]);
                      setSelectedRoleType([]);
                      setSelectedLocation([]);
                    }}
                    className="text-sm font-raleway text-gold hover:underline"
                  >
                    Clear All Filters
                  </button>
                )}
              </div>

              {/* Job Cards - Right */}
              <div className="w-full md:w-3/4">
                <p className="text-sm font-raleway text-secondary mb-6">
                  {filteredJobs.length} {filteredJobs.length === 1 ? 'opportunity' : 'opportunities'} found
                </p>
                
                <div className="space-y-4">
                  {filteredJobs.map(job => (
                    <div key={job.id} className="card-hover border-l-2 border-gold p-6 bg-tertiary">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-xl md:text-2xl font-lora  text-primary">
                          {job.title}
                        </h3>
                        <span className="text-xs font-raleway text-secondary">{job.posted}</span>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="px-3 py-1 bg-primary text-white text-xs font-raleway">
                          {job.experienceLevel}
                        </span>
                        <span className="px-3 py-1 bg-gold text-charcoal text-xs font-raleway">
                          {job.roleType}
                        </span>
                        <span className="px-3 py-1 border border-primary text-primary text-xs font-raleway">
                          {job.location}
                        </span>
                      </div>
                      
                      <p className="text-base font-raleway text-main leading-relaxed mb-4 opacity-75">
                        {job.description}
                      </p>
                      
                      <Link 
                        href={`#`}
                        className="text-gold font-raleway font-semibold hover:underline inline-flex items-center"
                      >
                        View Details
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  ))}
                </div>

                {filteredJobs.length === 0 && (
                  <div className="text-center py-12">
                    <p className="text-lg font-raleway text-secondary">
                      No opportunities match your selected filters. Try adjusting your criteria.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default function OpenOpportunities() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-main pt-20">Loading...</div>}>
      <OpenOpportunitiesContent />
    </Suspense>
  );
}
