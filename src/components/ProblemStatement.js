
import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { description,additionalInfo,constraints } from '../utils/dummyData';
const ProblemStatement = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Problem Statement</CardTitle>
      </CardHeader>
      <CardContent className="prose max-w-none">
        <p className="text-gray-700 leading-relaxed mb-4">
          {description.split('\n').map((line, i) => (
            <span key={i}>
              {line}
              <br />
            </span>
          ))}
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          {additionalInfo.split('\n').map((line, i) => (
            <span key={i}>
              {line}
              <br />
            </span>
          ))}
        </p>
        <h4 className="font-semibold text-gray-900 mb-2">Constraints:</h4>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          {constraints.map((c, i) => (
            <li key={i}>{c}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

export default ProblemStatement;

