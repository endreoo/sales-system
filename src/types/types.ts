export interface Hotel {
  id: number;
  name: string;
  location: string;
  sub_location?: string;
  number_of_rooms?: number;
  review_score?: string;
  number_of_reviews?: number;
  market?: string;
  sales_stage: SalesStage;
  sales_process: SalesProcess;
  importance: number;
  google_review_score?: number;
  address?: string;
  assigned_to?: string;
  last_action_date?: Date;
  next_action?: string;
  next_action_date?: Date;
  dashboard_status: DashboardStatus;
  last_login?: Date;
  campaign_stats?: CampaignStats;
}

export type SalesStage = 
  | 'Information Gathering'
  | 'Contact Acquisition'
  | 'Campaign'
  | 'Follow Up'
  | 'Meeting'
  | 'Proposal'
  | 'Closing'
  | 'Won'
  | 'Lost';

export type SalesProcess = 
  | 'Initial Research'
  | 'Contact Search'
  | 'Email Campaign'
  | 'WhatsApp Campaign'
  | 'Cold Calling'
  | 'Meeting Scheduled'
  | 'Proposal Sent'
  | 'Contract Negotiation'
  | 'Closed Won'
  | 'Closed Lost';

export type DashboardStatus = {
  has_account: boolean;
  last_login?: Date;
  login_count: number;
  account_created?: Date;
  onboarding_completed: boolean;
  feature_usage: {
    inventory_management: boolean;
    channel_management: boolean;
    revenue_management: boolean;
    reporting: boolean;
  };
};

export type CampaignStats = {
  emails_sent: number;
  emails_opened: number;
  emails_clicked: number;
  whatsapp_sent: number;
  whatsapp_delivered: number;
  whatsapp_read: number;
  calls_attempted: number;
  calls_connected: number;
  meetings_scheduled: number;
  last_contact_attempt?: Date;
  response_received: boolean;
  response_type?: 'positive' | 'negative' | 'need_followup';
};

export interface Contact {
  id: number;
  hotel_id: number;
  name: string;
  position: string;
  email: string;
  phone: string;
  whatsapp: string;
  last_contacted?: Date;
  preferred_contact_method?: 'email' | 'phone' | 'whatsapp';
  notes?: string;
  is_decision_maker: boolean;
  department: 'General Management' | 'Sales' | 'Revenue' | 'Operations' | 'Other';
  engagement_score: number;
  contact_attempts: ContactAttempt[];
}

export interface ContactAttempt {
  id: number;
  contact_id: number;
  type: 'email' | 'whatsapp' | 'call';
  date: Date;
  status: 'success' | 'failed' | 'no_response';
  notes?: string;
  response?: string;
  follow_up_needed: boolean;
  follow_up_date?: Date;
}