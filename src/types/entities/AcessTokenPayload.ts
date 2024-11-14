// src/auth/types/AccessTokenPayload.ts
export interface AccessTokenPayload {
    sub: string;      // Typically the user ID (can be a string or number)
    username: string; // The username of the user (as included in the payload)
    email: string;    // Optionally, you can include email if needed
  }
  