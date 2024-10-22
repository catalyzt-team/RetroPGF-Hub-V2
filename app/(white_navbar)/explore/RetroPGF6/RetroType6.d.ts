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

export interface iRetroPGF6Project extends EASProjectMetadata {
  //To be change after the new data is available from backend
  projectUid: string
  projectRefUid: string
  impactIpfs: {
    round: string
    category:
      | 'Governance Leadership'
      | 'Governance Infra & Tooling'
      | 'Governance Analytics'
    subcategory: string
    impactStatement: {
      question: string
      answer: string
    }[]
  }
}

export interface ImpactGardenMetrics {
  attestationUID: string
  category: string
  contribution: string
  createdAt: string
  ecosystem: string
  explanation: string
  feeling_if_didnt_exist: string
  id: number
  likely_to_recommend: string
  logoUrl: string
  pfp: string
  projectName: string
  subcategory: string
  userFid: string
  username: string
}

export interface UserRoleImpactGarden {
  userFid: string
  role: string
}

export interface BadgeholderImpactGarden extends UserRoleImpactGarden {
  opBadgeholder: boolean
}

export interface DelegateImpactGarden extends UserRoleImpactGarden {
  delegate: boolean
}
