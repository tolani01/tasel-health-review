export interface InsuranceProvider {
  id: string
  name: string
  logo: string
  category: 'commercial' | 'government' | 'regional'
  website?: string
  phone?: string
  coverageAreas?: string[]
  acceptedPlans?: string[]
  description?: string
}

export const insuranceProviders: InsuranceProvider[] = [
  // Commercial Insurance
  {
    id: 'unitedhealthcare',
    name: 'UnitedHealthcare',
    logo: 'https://logo.clearbit.com/uhc.com',
    category: 'commercial',
    website: 'https://www.uhc.com',
    phone: '1-877-842-3210',
    coverageAreas: ['National'],
    acceptedPlans: ['PPO', 'HMO', 'EPO', 'POS'],
    description: 'One of the largest health insurance providers in the United States'
  },
  {
    id: 'bcbs',
    name: 'Blue Cross Blue Shield',
    logo: 'https://logo.clearbit.com/bcbs.com',
    category: 'commercial',
    website: 'https://www.bcbs.com',
    phone: '1-888-630-2583',
    coverageAreas: ['National'],
    acceptedPlans: ['PPO', 'HMO', 'EPO', 'POS'],
    description: 'Federation of 36 independent health insurance companies'
  },
  {
    id: 'aetna',
    name: 'Aetna',
    logo: 'https://logo.clearbit.com/aetna.com',
    category: 'commercial',
    website: 'https://www.aetna.com',
    phone: '1-800-872-3862',
    coverageAreas: ['National'],
    acceptedPlans: ['PPO', 'HMO', 'EPO', 'POS'],
    description: 'CVS Health company providing comprehensive health insurance'
  },
  {
    id: 'cigna',
    name: 'Cigna',
    logo: 'https://logo.clearbit.com/cigna.com',
    category: 'commercial',
    website: 'https://www.cigna.com',
    phone: '1-800-997-1654',
    coverageAreas: ['National'],
    acceptedPlans: ['PPO', 'HMO', 'EPO', 'POS'],
    description: 'Global health service company offering health insurance solutions'
  },
  {
    id: 'humana',
    name: 'Humana',
    logo: 'https://logo.clearbit.com/humana.com',
    category: 'commercial',
    website: 'https://www.humana.com',
    phone: '1-800-457-4708',
    coverageAreas: ['National'],
    acceptedPlans: ['PPO', 'HMO', 'EPO', 'POS'],
    description: 'Leading health and well-being company focused on Medicare'
  },
  {
    id: 'anthem',
    name: 'Anthem',
    logo: 'https://logo.clearbit.com/anthem.com',
    category: 'commercial',
    website: 'https://www.anthem.com',
    phone: '1-800-810-2583',
    coverageAreas: ['National'],
    acceptedPlans: ['PPO', 'HMO', 'EPO', 'POS'],
    description: 'Elevance Health company providing health insurance coverage'
  },
  {
    id: 'molina',
    name: 'Molina Healthcare',
    logo: 'https://logo.clearbit.com/molinahealthcare.com',
    category: 'commercial',
    website: 'https://www.molinahealthcare.com',
    phone: '1-866-449-6849',
    coverageAreas: ['National'],
    acceptedPlans: ['Medicaid', 'Medicare', 'Marketplace'],
    description: 'Managed care company serving government-sponsored programs'
  },
  {
    id: 'optum',
    name: 'Optum',
    logo: 'https://logo.clearbit.com/optum.com',
    category: 'commercial',
    website: 'https://www.optum.com',
    phone: '1-877-542-3210',
    coverageAreas: ['National'],
    acceptedPlans: ['PPO', 'HMO', 'EPO'],
    description: 'UnitedHealth Group company providing health services and care delivery'
  },
  {
    id: 'kaiser',
    name: 'Kaiser Permanente',
    logo: 'https://logo.clearbit.com/kp.org',
    category: 'commercial',
    website: 'https://www.kp.org',
    phone: '1-800-464-4000',
    coverageAreas: ['Multi-state'],
    acceptedPlans: ['HMO', 'PPO'],
    description: 'Integrated managed care consortium serving multiple states'
  },
  {
    id: 'tricare',
    name: 'Tricare',
    logo: 'https://logo.clearbit.com/tricare.mil',
    category: 'government',
    website: 'https://www.tricare.mil',
    phone: '1-866-773-0404',
    coverageAreas: ['National'],
    acceptedPlans: ['Tricare Prime', 'Tricare Select', 'Tricare for Life'],
    description: 'Health care program for military members, retirees, and their families'
  },
  {
    id: 'healthnet',
    name: 'Health Net',
    logo: 'https://logo.clearbit.com/healthnet.com',
    category: 'commercial',
    website: 'https://www.healthnet.com',
    phone: '1-800-522-0088',
    coverageAreas: ['Multi-state'],
    acceptedPlans: ['PPO', 'HMO', 'EPO'],
    description: 'Centene company providing health insurance coverage'
  },

  // Government Programs
  {
    id: 'medicare',
    name: 'Medicare',
    logo: 'https://logo.clearbit.com/medicare.gov',
    category: 'government',
    website: 'https://www.medicare.gov',
    phone: '1-800-MEDICARE',
    coverageAreas: ['National'],
    acceptedPlans: ['Part A', 'Part B', 'Part C', 'Part D'],
    description: 'Federal health insurance program for people 65 and older'
  },
  {
    id: 'medicaid',
    name: 'Medicaid',
    logo: 'https://logo.clearbit.com/medicaid.gov',
    category: 'government',
    website: 'https://www.medicaid.gov',
    phone: '1-800-318-2596',
    coverageAreas: ['State-based'],
    acceptedPlans: ['Traditional Medicaid', 'Medicaid Managed Care'],
    description: 'Joint federal and state program providing health coverage'
  },

  // Regional/Local Providers
  {
    id: 'community-first-health-plans',
    name: 'Community First Health Plans',
    logo: 'https://logo.clearbit.com/communityfirsthealthplans.com',
    category: 'regional',
    website: 'https://www.communityfirsthealthplans.com',
    phone: '1-800-434-2347',
    coverageAreas: ['Bexar County', 'Texas'],
    acceptedPlans: ['STAR Medicaid', 'STAR Kids', 'STAR+PLUS', 'CHIP', 'Medicare Advantage', 'Marketplace'],
    description: 'San Antonio-based health plan serving Bexar County and seven surrounding counties since 1995'
  },
  {
    id: 'ambetter',
    name: 'Ambetter',
    logo: 'https://logo.clearbit.com/ambetterhealth.com',
    category: 'regional',
    website: 'https://www.ambetterhealth.com',
    phone: '1-877-687-1189',
    coverageAreas: ['Multi-state'],
    acceptedPlans: ['Marketplace', 'Medicaid'],
    description: 'Centene company providing marketplace and Medicaid coverage'
  },
  {
    id: 'oscar',
    name: 'Oscar Health',
    logo: 'https://logo.clearbit.com/hioscar.com',
    category: 'regional',
    website: 'https://www.hioscar.com',
    phone: '1-855-672-2755',
    coverageAreas: ['Multi-state'],
    acceptedPlans: ['Marketplace', 'Small Group'],
    description: 'Technology-driven health insurance company'
  }
]

export const getProvidersByCategory = (category: InsuranceProvider['category']) => {
  return insuranceProviders.filter(provider => provider.category === category)
}

export const getCommercialProviders = () => getProvidersByCategory('commercial')
export const getGovernmentProviders = () => getProvidersByCategory('government')
export const getRegionalProviders = () => getProvidersByCategory('regional')
