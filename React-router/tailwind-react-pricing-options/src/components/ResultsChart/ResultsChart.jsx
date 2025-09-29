
import React from 'react';
import { Line, LineChart, XAxis } from 'recharts';


const resultData=[
  {
    "id": 1,
    "name": "Arif Hasan",
    "physics": 78,
    "chemistry": 82,
    "math": 91
  },
  {
    "id": 2,
    "name": "Mitu Akter",
    "physics": 88,
    "chemistry": 75,
    "math": 84
  },
  {
    "id": 3,
    "name": "Sajid Karim",
    "physics": 92,
    "chemistry": 89,
    "math": 95
  },
  {
    "id": 4,
    "name": "Nusrat Jahan",
    "physics": 70,
    "chemistry": 80,
    "math": 76
  },
  {
    "id": 5,
    "name": "Rafiul Alam",
    "physics": 85,
    "chemistry": 78,
    "math": 88
  },
  {
    "id": 6,
    "name": "Sumaiya Rahman",
    "physics": 90,
    "chemistry": 92,
    "math": 86
  },
  {
    "id": 7,
    "name": "Tariq Mahmud",
    "physics": 65,
    "chemistry": 70,
    "math": 72
  },
  {
    "id": 8,
    "name": "Ruma Khatun",
    "physics": 81,
    "chemistry": 85,
    "math": 79
  },
  {
    "id": 9,
    "name": "Tanvir Chowdhury",
    "physics": 95,
    "chemistry": 90,
    "math": 94
  },
  {
    "id": 10,
    "name": "Sharmin Akter",
    "physics": 76,
    "chemistry": 83,
    "math": 80
  }
]


const ResultsChart = () => {
    return (
        <div>
            
            <LineChart width={800} height={500} data={resultData}>
                <XAxis dataKey="name"></XAxis>
                <Line type="monotone"  dataKey="math"></Line>
                <Line type="monotone" dataKey={'chemistry'} stroke="#8884d8"></Line>
            </LineChart>
        </div>
    );
};

export default ResultsChart;