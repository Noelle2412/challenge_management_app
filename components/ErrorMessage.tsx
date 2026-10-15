export const ErrorMessage = ({ message }: { message?: string }) =>
  message ? <p className="text-red-500 text-sm -mt-2">{message}</p> : null;
