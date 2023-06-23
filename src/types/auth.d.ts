declare interface LoginRequest {
  email: string;
  password: string;
}

declare interface LoginResponse {
  token: string;
  userId: string;
}

declare interface RegisterRequest {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  birthDate: Date | string | null;
}
