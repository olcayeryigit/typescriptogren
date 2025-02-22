import { Info } from "lucide-react";

interface SummaryBoxProps {
  text: string;
}

const SummaryBox: React.FC<SummaryBoxProps> = ({ text }) => {
  return (
    <div className="mt-8 p-5 bg-yellow-50 rounded-lg border-2 border-yellow-600">
      <div className="flex items-center gap-1">
        <Info className="text-yellow-600" size={20} />
        <h3 className="text-lg font-semibold text-yellow-700 mt-1">Özet</h3>
      </div>
      <p className="text-yellow-900 italic">{text}</p>
    </div>
  );
};

export default SummaryBox;
