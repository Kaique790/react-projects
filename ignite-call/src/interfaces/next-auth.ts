export interface Account {
  user_id: string;
  provider: string;
  type: string;
  providerAccountId: string;
  access_token: string;
  expires_at: number;
  token_type: string;
  scope: string;
  id_token: string;
  refresh_token: string;
  session_state: string;
}
