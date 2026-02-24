interface ErrorMessageProps {
  message?: string;
}

export const ErrorMessage = ({
  message = "Something went wrong.",
}: ErrorMessageProps) => {
  return (
    <div className="flex flex-col items-center justify-center p-10 gap-2">
      <p className="text-red-400 text-4xl">⚠️</p>
      <p className="text-red-500 font-medium">{message}</p>
    </div>
  );
};
