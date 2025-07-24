import React, { useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import {
  PieChart,
  Pie,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Cell,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

// Define language colors
const COLORS = {
  pt: "#00C49F",
  en: "#0088FE",
  es: "#FFBB28",
};

const YearLanguageCharts = () => {
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
  const allLanguages = ["pt", "en", "es"];
  const [selectedLanguages, setSelectedLanguages] = useState(allLanguages);

  // Group data by year and language
  const grouped = {};
  nodes.forEach(({ year, fields }) => {
    const lang = fields.locale;
    if (!grouped[year]) grouped[year] = { year };
    if (!grouped[year][lang]) grouped[year][lang] = 0;
    grouped[year][lang]++;
  });

  const sortedYears = Object.keys(grouped).sort();
  //const sortedYears = Object.keys(grouped).sort().reverse();
  const pieDataByYear = {};
  const barData = [];

  sortedYears.forEach((year) => {
    const yearData = grouped[year];
    const pie = [];
    const bar = { year };

    allLanguages.forEach((lang) => {
      const value = yearData[lang] || 0;
      if (selectedLanguages.includes(lang)) {
        pie.push({ name: lang.toUpperCase(), value, lang });
      }
      bar[lang] = value;
    });

    pieDataByYear[year] = pie;
    barData.push(bar);
  });

  // Toggle checkbox
  const toggleLanguage = (lang) => {
    setSelectedLanguages((prev) =>
      prev.includes(lang)
        ? prev.filter((l) => l !== lang)
        : [...prev, lang]
    );
  };

  return (
    <div>
      {/* Language Selector */}
      <div style={{ marginBottom: "1rem" }}>
        <strong>Selecionar Idiomas:</strong>
        {allLanguages.map((lang) => (
          <label key={lang} style={{ marginLeft: "1rem" }}>
            <input
              type="checkbox"
              checked={selectedLanguages.includes(lang)}
              onChange={() => toggleLanguage(lang)}
            />
            {lang.toUpperCase()}
          </label>
        ))}
      </div>

      {/* Stacked Bar Chart */}
      <div style={{ margin: "2rem 0" }}>
        <h3>📊 Gráfico de Barras por Ano</h3>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={barData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Legend />
            {selectedLanguages.map((lang) => (
              <Bar
                key={lang}
                dataKey={lang}
                stackId="a"
                fill={COLORS[lang]}
                name={lang.toUpperCase()}
              />
            ))}
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Pie Charts */}
      <div>
        <h3>🥧 Gráficos de Pizza por Ano</h3>
        {sortedYears.map((year) => {
          const data = pieDataByYear[year];
          if (data.length === 0) return null;

          return (
            <div key={year} style={{ marginBottom: "2rem" }}>
              <h4>{year}</h4>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={data}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    label
                  >
                    {data.map((entry) => (
                      <Cell key={entry.lang} fill={COLORS[entry.lang]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default YearLanguageCharts;
