// src/utils/dummyData.js

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

export const constraints = [
  "2 ≤ nums.length ≤ 10⁴",
  "-10⁹ ≤ nums[i] ≤ 10⁹",
  "-10⁹ ≤ target ≤ 10⁹",
  "Only one valid answer exists.",
];

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

export const editorPlaceholder = `# Example Python code
def two_sum(nums, target):
    for i in range(len(nums)):
        for j in range(i + 1, len(nums)):
            if nums[i] + nums[j] == target:
                return [i, j]
`;
