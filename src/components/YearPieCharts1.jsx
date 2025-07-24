import React, { useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import {
  PieChart,
  Pie,
  Tooltip,
  Cell,
  ResponsiveContainer,
} from "recharts";

// Language colors
const COLORS = {
  pt: "#00C49F",
  en: "#0088FE",
  es: "#FFBB28",
};

const YearPieCharts = () => {
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

  // Available languages
  const allLanguages = ["pt", "en", "es"];
  const [selectedLanguages, setSelectedLanguages] = useState(allLanguages);

  // Group data by year and language
  const grouped = {};
  nodes.forEach(({ year, fields }) => {
    const lang = fields.locale;
    if (!grouped[year]) grouped[year] = {};
    if (!grouped[year][lang]) grouped[year][lang] = 0;
    grouped[year][lang]++;
  });

  const sortedYears = Object.keys(grouped).sort((a, b) => b - a);

  // Handle toggle language filter
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
          <label key={lang} style={{ marginRight: "1rem", marginLeft: "1rem" }}>
            <input
              type="checkbox"
              checked={selectedLanguages.includes(lang)}
              onChange={() => toggleLanguage(lang)}
            />
            {lang.toUpperCase()}
          </label>
        ))}
      </div>

      {/* Pie Chart per Year */}
      {sortedYears.map((year) => {
        const yearData = grouped[year];
        const filteredData = Object.entries(yearData)
          .filter(([lang]) => selectedLanguages.includes(lang))
          .map(([lang, value]) => ({
            name: lang.toUpperCase(),
            value,
            lang,
          }));

        if (filteredData.length === 0) return null;

        return (
          <div key={year} style={{ marginBottom: "2rem" }}>
            <h3>{year}</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={filteredData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  label
                >
                  {filteredData.map((entry) => (
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
  );
};

export default YearPieCharts;
