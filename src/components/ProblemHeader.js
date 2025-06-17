const ProblemHeader = ({ problem }) => {
  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center space-x-2">
              <Code className="h-6 w-6 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">CodeArena</span>
            </Link>
            <span className="text-gray-400">/</span>
            <span className="font-medium text-gray-700">Problem: {problem.title}</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ProblemHeader;