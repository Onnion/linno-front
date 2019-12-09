export interface User {
  readonly name: string;
  readonly email: string;
  readonly id?: number;
  readonly login?: string;
  readonly status?: string;
  readonly password?: string;
  readonly role_id?: number;
  readonly password_verified_at?: string;
  readonly created_at?: string;
  readonly updated_at?: string;
  readonly deleted_at?: string;
}

export interface UserStore {
  readonly user: {
    readonly name: string;
    readonly email: string;
    readonly password: string;
    readonly role_id: number;
    readonly type?: string;
  };
  readonly company: {
    readonly name: string;
    readonly trade_name: string;
    readonly phone_number: string;
    readonly type?: string;
    readonly registration_code: string;
  };
  readonly address: {
    readonly postal_code: string;
    readonly street: string;
    readonly number: string;
    readonly neighborhood: string;
    readonly city: string;
    readonly state: string;
    readonly state_slug: string;
    readonly country: string;
    readonly country_slug: string;
    readonly complement: string;
  }
}