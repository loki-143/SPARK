import {
  Play,
  Upload,
  Clock,
  CheckCircle,
  XCircle,
  Code,
} from "lucide-react";
export const getVerdictColor = (verdict) => {
    switch (verdict) {
      case "Accepted":
        return "text-green-700 bg-green-50";
      case "Wrong Answer":
        return "text-red-700 bg-red-50";
      case "Time Limit Exceeded":
        return "text-yellow-700 bg-yellow-50";
      case "Runtime Error":
        return "text-purple-700 bg-purple-50";
      default:
        return "text-gray-700 bg-gray-50";
    }
  };

  export const getVerdictIcon = (verdict) => {
    switch (verdict) {
      case "Accepted":
        return <CheckCircle className="h-4 w-4" />;
      case "Wrong Answer":
        return <XCircle className="h-4 w-4" />;
      default:
        return <Clock className="h-4 w-4" />;
    }
  };