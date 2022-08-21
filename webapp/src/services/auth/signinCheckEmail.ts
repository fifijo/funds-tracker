import { client } from 'config/client';
import { retryHTTP } from 'utils/retryHTTP';

export interface SigninCheckEmailProps {
  userEmail: string;
}

export interface SigninCheckEmailResponse {
  status: string;
}

export const signinCheckEmail = retryHTTP(({ userEmail }: SigninCheckEmailProps) =>
  client.post<SigninCheckEmailResponse>('/auth/local/signin/email', {
    email: userEmail,
  }),
);
