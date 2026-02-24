interface LoadingSpinnerProps {
  message?: string;
}

export const LoadingSpinner = ({
  message = "Loading...",
}: LoadingSpinnerProps) => {
  return (
    <div className="flex flex-col items-center justify-center p-10 gap-3">
      <div className="w-10 h-10 border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin" />
      <p className="text-gray-500 text-sm">{message}</p>
    </div>
  );
};
