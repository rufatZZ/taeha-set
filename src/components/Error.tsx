interface IProps {
  content: string;
}

export const Error: React.FC<IProps> = ({ content }) => (
  <div className="w-max border border-red-500 text-red-700 bg-red-100 rounded py-1 px-3">
    {content}
  </div>
);
