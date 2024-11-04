import { EASProjectMetadata } from '@/app/types/realtime-api-agora'
export interface WorkerResponseRound6 {
  msg: string
  type: string
  data: iRetroPGF6Project[]
  snapshotTime: string
}

// export interface AgoraResponse {
//   meta: Meta
//   data: iRetroPGF6Project[]
// }

export interface iRetroPGF6Project {
  id: string
  applicationId: string
  projectId: string
  category: PurpleCategory
  applicationCategory: ApplicationCategoryEnum
  organization: Organization | null
  name: string
  description: string
  profileAvatarUrl: string
  projectCoverImageUrl: string
  socialLinks: SocialLinks
  team: Team[] | null
  github: Github[]
  packages: Github[]
  links: Github[]
  contracts: Contract[]
  grantsAndFunding: GrantsAndFunding
  pricingModel: PricingModel
  impactStatement: ImpactStatement
  testimonials: string
  impactMetrics?: ImpactMetrics
}

export enum ApplicationCategoryEnum {
  GovernanceAnalytics = 'GOVERNANCE_ANALYTICS',
  GovernanceInfraAndTooling = 'GOVERNANCE_INFRA_AND_TOOLING',
  GovernanceLeadership = 'GOVERNANCE_LEADERSHIP',
}

export enum PurpleCategory {
  Governance = 'Governance',
  Social = 'Social',
  Utility = 'Utility',
}

export interface Contract {
  address: string
  deploymentTxHash: string
  deployerAddress: string
  verificationProof: string
  chainId: number
}

export interface Github {
  url: string
  name: null | string
  description: null | string
}

export interface GrantsAndFunding {
  ventureFunding: VentureFunding[]
  grants: GrantElement[]
  revenue: any[]
  retroFunding?: GrantElement[]
}

export interface GrantElement {
  grant: GrantEnum | null
  link: null | string
  amount: string
  date: string
  details: null | string
}

export enum GrantEnum {
  FoundationGrant = 'foundation-grant',
  FoundationMission = 'foundation-mission',
  RetroFunding = 'retroFunding',
  TokenHouseMission = 'token-house-mission',
}

export interface VentureFunding {
  amount: Amount
  year: string
  details: string
}

export enum Amount {
  The10M25M = '10m-25m',
  The1M5M = '1m-5m',
  The5M10M = '5m-10m',
  Under1M = 'under-1m',
}

export interface ImpactMetrics {
  count_total_attestations: number
  count_citizen_attestations: number
  count_delegate_attestations?: number
  avg_nps_score: number
  most_positive_superlative: boolean
  cant_live_without_superlative: boolean
  percentage_distributions: PercentageDistributions
  elected_governance_reviews: ElectedGovernanceReviews
}

export interface ElectedGovernanceReviews {
  grants_council?: AnticaptureCommission
  anticapture_commission?: AnticaptureCommission
}

export interface AnticaptureCommission {
  count_attestations: number
  avg_pmf_score: number
  avg_nps_score: number
}

export interface PercentageDistributions {
  citizens: Citizens
  top_delegates: Citizens
}

export interface Citizens {
  extremely_upset: number | null
  somewhat_upset: number | null
  neutral: number | null
}

export interface ImpactStatement {
  category: ApplicationCategoryEnum
  subcategory: string[]
  statement: Statement[]
}

export interface Statement {
  answer: string
  question: string
}

export interface Organization {
  name: string
  description: string
  organizationAvatarUrl: null | string
  organizationCoverImageUrl: null | string
  socialLinks: SocialLinks
  team: string[]
}

export interface SocialLinks {
  website: string[]
  farcaster: string[]
  twitter: null | string
  mirror: null | string
}

export enum PricingModel {
  Free = 'free',
  Freemium = 'freemium',
  PayToUse = 'pay_to_use',
}

export interface Team {
  fid: number
  object: Object
  pfp_url: string
  profile: Profile
  username: string
  power_badge: boolean
  display_name: string
  active_status: ActiveStatus
  verifications: string[]
  follower_count: number
  custody_address: string
  following_count: number
  verified_accounts: VerifiedAccount[] | null
  verified_addresses: VerifiedAddresses
}

export enum ActiveStatus {
  Inactive = 'inactive',
}

export enum Object {
  User = 'user',
}

export interface Profile {
  bio: Bio
}

export interface Bio {
  text: string
}

export interface VerifiedAccount {
  platform: Platform
  username: string
}

export enum Platform {
  X = 'x',
}

export interface VerifiedAddresses {
  eth_addresses: string[]
  sol_addresses: string[]
}
