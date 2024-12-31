export class ApiError extends Error {
    constructor(
      message: string,
      public code?: string,
      public details?: string
    ) {
      super(message);
      this.name = 'ApiError';
    }
  }
  
  export function isUniqueViolation(error: any): boolean {
    return error?.code === '23505';
  }
  
  export function getErrorMessage(error: unknown): string {
    if (error instanceof ApiError) {
      if (isUniqueViolation(error)) {
        return "You've already signed up with this email address!";
      }
      return error.message;
    }
    return "Something went wrong. Please try again later.";
  }