export const problem = {
    id: "A",
    title: "Two Sum Variant",
    difficulty: "Easy",
    points: 100,
    timeLimit: "1000ms",
    memoryLimit: "256MB",
    solved: 987,
    attempts: 1156,
    successRate: 85,
  };

  export const examples = [
    {
      input: "nums = [2,7,11,15], target = 9",
      output: "[0,1]",
      explanation: "Because nums[0] + nums[1] == 9, we return [0, 1].",
    },
    {
      input: "nums = [3,2,4], target = 6",
      output: "[1,2]",
      explanation: "Because nums[1] + nums[2] == 6, we return [1, 2].",
    },
  ];

  export const submissions = [
    {
      id: 1,
      time: "14:23:45",
      language: "Python",
      verdict: "Accepted",
      executionTime: "45ms",
      memory: "12.3MB",
    },
    {
      id: 2,
      time: "14:18:32",
      language: "Python",
      verdict: "Wrong Answer",
      executionTime: "32ms",
      memory: "11.8MB",
    },
    {
      id: 3,
      time: "14:15:21",
      language: "C++",
      verdict: "Time Limit Exceeded",
      executionTime: ">1000ms",
      memory: "8.2MB",
    },
  ];


  //for PS
  export const description = `Given an array of integers nums and an integer target, 
  return indices of the two numbers such that they add up to target.`;
  
  export const additionalInfo = `You may assume that each input would have exactly one solution, 
  and you may not use the same element twice. You can return the answer in any order.`;
  
  export const constraints = [
    <code className="bg-gray-100 px-1 py-0.5 rounded">2 ≤ nums.length ≤ 10⁴</code>,
    <code className="bg-gray-100 px-1 py-0.5 rounded">-10⁹ ≤ nums[i] ≤ 10⁹</code>,
    <code className="bg-gray-100 px-1 py-0.5 rounded">-10⁹ ≤ target ≤ 10⁹</code>,
    "Only one valid answer exists."
  ];
  