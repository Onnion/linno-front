interface Role {
  id: number;
  description: string;
}
interface Account {
  id: number;
  name: string;
}

interface User {
  readonly id: number;
  readonly name: string;
  readonly login: string;
  readonly email: string;
  readonly status: string;
  readonly role: Role;
  readonly accounts: Account[];
  readonly created_at: string;
  readonly updated_at: string;
}

interface Teste {
  readonly name: string;
}

export interface CampaignStep {
  readonly type: string;
  readonly title: string;
  readonly icon: string;
  readonly last: boolean;
  readonly complete: boolean;
  readonly active: boolean;
  readonly defaultText: string;
  readonly data?: User | Teste | any;
}
