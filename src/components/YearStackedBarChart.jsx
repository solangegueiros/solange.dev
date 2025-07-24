import React from "react";  
import { graphql, useStaticQuery } from "gatsby";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const YearLanguageChart = () => {
  const data = useStaticQuery(graphql`
    query {
      allItem {
        nodes {
          year
          fields {
            locale
          }
        }
      }
    }
  `);

  const nodes = data.allItem.nodes;
  const languages = ["pt", "en", "es"];

  // Build { year: { pt: x, en: y, es: z } }
  const grouped = {};

  nodes.forEach(({ year, fields }) => {
    const lang = fields.locale;
    if (!grouped[year]) grouped[year] = { year, pt: 0, en: 0, es: 0 };
    if (languages.includes(lang)) {
      grouped[year][lang]++;
    }
  });

  const chartData = Object.values(grouped).sort((a, b) => a.year - b.year);

  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="pt" stackId="a" fill="#0088FE" name="PT" />
        <Bar dataKey="en" stackId="a" fill="#00C49F" name="EN" />
        <Bar dataKey="es" stackId="a" fill="#FFBB28" name="ES" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default YearLanguageChart;
