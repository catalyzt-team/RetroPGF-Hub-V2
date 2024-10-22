export interface WorkerResponse {
  msg: string
  type: string
  data: AgoraResponse[]
  snapshotTime: string
}

export interface AgoraResponse {
  meta: Meta
  data: iRetroPGF5Project[]
}

export interface iRetroPGF5Project {
  id: string
  applicationId: string
  projectId: string
  category: ProjectCategory
  applicationCategory: ApplicationCategoryEnum
  organization: Organization | null
  name: string
  description: string
  profileAvatarUrl: string
  projectCoverImageUrl: string
  socialLinks: SocialLinks
  team: Team[]
  github: Link[]
  packages: Link[]
  links: Link[]
  contracts: Contract[]
  grantsAndFunding: GrantsAndFunding
  pricingModel: PricingModelClass | string
  impactStatement: ImpactStatement
  testimonials: string
  allocation: number
  rank: number
}

export enum ApplicationCategoryEnum {
  EthereumCoreContributions = 'ETHEREUM_CORE_CONTRIBUTIONS',
  OpStackResearchAndDevelopment = 'OP_STACK_RESEARCH_AND_DEVELOPMENT',
  OpStackTooling = 'OP_STACK_TOOLING',
}

export enum ProjectCategory {
  CrossChain = 'Cross Chain',
  DeFi = 'DeFi',
  Utility = 'Utility',
}

export interface Contract {
  address: string
  deploymentTxHash: string
  deployerAddress: string
  verificationProof: string
  chainId: number
}

export interface Link {
  url: string
  name: null | string
  description: null | string
  metrics?: { [key: string]: string }
}

export interface GrantsAndFunding {
  grants: GrantElement[]
  revenue: any[]
  investment: Investment[]
}

export interface GrantElement {
  grant: GrantEnum
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

export interface Investment {
  amount: string
  details: string
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

export interface PricingModel {
  type: PricingModelEnum
  details: string
}

export enum PricingModelEnum {
  Free = 'free',
  Freemium = 'freemium',
  PayToUse = 'pay_to_use',
}

export interface Team {
  fid?: number
  object?: Object
  pfp_url?: string
  profile?: Profile
  username?: string
  power_badge?: boolean
  display_name?: string
  active_status?: ActiveStatus
  verifications?: string[]
  follower_count?: number
  custody_address?: string
  following_count?: number
  verified_addresses?: VerifiedAddresses
  id?: string
  role?: string
  user?: User
  userId?: string
  createdAt?: string
  deletedAt?: null
  projectId?: string
  updatedAt?: string
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

export interface User {
  id: string
  bio: string
  fid: number
  name: string
  email: string
  github: string
  object: Object
  pfp_url: string
  profile: Profile
  imageUrl: string
  username: string
  createdAt: string
  deletedAt: null
  updatedAt: string
  farcasterId: string
  power_badge: boolean
  display_name: string
  notDeveloper: boolean
  active_status: ActiveStatus
  emailVerified: boolean
  verifications: any[]
  follower_count: number
  custody_address: string
  following_count: number
  verified_addresses: VerifiedAddresses
}

export interface VerifiedAddresses {
  eth_addresses: string[]
  sol_addresses: string[]
}

export interface Meta {
  has_next: boolean
  total_returned: number
  next_offset: number
}
