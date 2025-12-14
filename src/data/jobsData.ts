export interface Job {
  id: string;
  title: string;
  experienceLevel: 'Experienced Professionals' | 'Internship' | 'Graduates';
  roleType: 'Trading' | 'Technology' | 'Operations' | 'Research' | 'Risk Management';
  location: 'Dubai' | 'London' | 'New York' | 'Singapore' | 'Hong Kong';
  description: string;
  posted: string;
}

export const jobs: Job[] = [
  {
    id: 'senior-trader-dubai',
    title: 'Senior Commodities Trader',
    experienceLevel: 'Experienced Professionals',
    roleType: 'Trading',
    location: 'Dubai',
    description: 'Lead trading strategies in commodities markets with focus on energy and metals.',
    posted: 'Jan 15, 2024'
  },
  {
    id: 'software-engineer-london',
    title: 'Software Engineer - Trading Systems',
    experienceLevel: 'Experienced Professionals',
    roleType: 'Technology',
    location: 'London',
    description: 'Build and maintain high-performance trading systems and infrastructure.',
    posted: 'Jan 12, 2024'
  },
  {
    id: 'intern-research-ny',
    title: 'Research Analyst Intern',
    experienceLevel: 'Internship',
    roleType: 'Research',
    location: 'New York',
    description: 'Support quantitative research team in developing trading strategies.',
    posted: 'Jan 10, 2024'
  },
  {
    id: 'graduate-operations-sg',
    title: 'Operations Analyst - Graduate Program',
    experienceLevel: 'Graduates',
    roleType: 'Operations',
    location: 'Singapore',
    description: 'Join our graduate program and rotate through various operational functions.',
    posted: 'Jan 8, 2024'
  },
  {
    id: 'risk-manager-hk',
    title: 'Risk Manager',
    experienceLevel: 'Experienced Professionals',
    roleType: 'Risk Management',
    location: 'Hong Kong',
    description: 'Oversee risk management frameworks and ensure compliance with regulations.',
    posted: 'Jan 5, 2024'
  },
  {
    id: 'quant-researcher-london',
    title: 'Quantitative Researcher',
    experienceLevel: 'Experienced Professionals',
    roleType: 'Research',
    location: 'London',
    description: 'Develop and implement quantitative trading strategies using advanced analytics.',
    posted: 'Jan 3, 2024'
  },
  {
    id: 'intern-tech-dubai',
    title: 'Technology Intern',
    experienceLevel: 'Internship',
    roleType: 'Technology',
    location: 'Dubai',
    description: 'Work on real-world projects in our technology team during summer internship.',
    posted: 'Dec 28, 2023'
  },
  {
    id: 'graduate-trading-ny',
    title: 'Trading Graduate Program',
    experienceLevel: 'Graduates',
    roleType: 'Trading',
    location: 'New York',
    description: 'Comprehensive training program for aspiring traders with mentorship.',
    posted: 'Dec 20, 2023'
  }
];
