import React from 'react';
import styled from 'styled-components';
import 'chart.js/auto';
import { Line } from 'react-chartjs-2';

const getLabels = (): Number[] => {
  const date = new Date();
  const month = new Date(date.getFullYear(), date.getMonth(), 0);
  const ret = [];
  for (let i = 5; i < month.getDate(); i += 5) {
    ret.push(i);
  }
  ret[ret.length - 1] = month.getDate();
  // return Array.from({ length: month.getDate() }, (v, i) => i + 1);
  return ret;
};

const Graph = () => {
  return (
    <Container>
      <Line
        data={{
          labels: getLabels(),
          // labels: [1, 5, 10, 15, 20, 25, 30],
          datasets: [
            {
              data: [70, 80, 75, 70, 92, 90, 85],
              borderWidth: 3,
              tension: 0.5,
              fill: true,
              backgroundColor: 'rgba(255, 0, 0, 0.20)',
              borderColor: '#FF9A95',
              pointRadius: 0,
            },
          ],
        }}
        options={{
          responsive: true,
          interaction: {
            mode: 'point' as const,
            // intersect에 false를 주면 커서에 가까이 다가가도 치수를 호버링
            // intersect: false,
          },
          scales: {
            x: {
              display: false,
            },
            y: {
              min: 0,
              max: 100,
              display: false,
            },
          },
          plugins: {
            legend: {
              display: false,
            },
          },
        }}
      />
    </Container>
  );
};

export default Graph;

const Container = styled.div`
  width: 100vw;
`;
