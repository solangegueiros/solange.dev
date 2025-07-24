import React, { useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import {
  PieChart,
  Pie,
  Tooltip,
  Cell,
  ResponsiveContainer,
  Label,
} from "recharts";

const COLORS = {
  pt: "#00C49F",
  en: "#0088FE",
  es: "#FFBB28",
};

const YearPieCharts = () => {
  const data = useStaticQuery(graphql`
    query {
      allItem(sort: { fields: year, order: ASC }) {
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
  const [showTable, setShowTable] = useState(false);

  // Group by year and locale
  const grouped = {};
  nodes.forEach(({ year, fields }) => {
    const lang = fields.locale;
    if (!grouped[year]) grouped[year] = {};
    if (!grouped[year][lang]) grouped[year][lang] = 0;
    grouped[year][lang]++;
  });

  const sortedYears = Object.keys(grouped).sort((a, b) => b - a);

  const toggleLanguage = (lang) => {
    setSelectedLanguages((prev) =>
      prev.includes(lang)
        ? prev.filter((l) => l !== lang)
        : [...prev, lang]
    );
  };

  const renderLabel = ({ percent, name }) =>
    `${name} (${(percent * 100).toFixed(0)}%)`;

  return (
    <div>
      {/* Toggle Table/Chart */}
      <div style={{ marginBottom: "1rem" }}>
        <button onClick={() => setShowTable((prev) => !prev)}>
          {showTable ? "🔙 Ver Gráficos" : "📊 Ver Tabela"}
        </button>
      </div>

      {/* Language Selector */}
      <div style={{ marginBottom: "1rem" }}>
        <strong>Selecionar Idiomas:</strong>
        {allLanguages.map((lang) => (
          <label key={lang} style={{ margin: "0 1rem" }}>
            <input
              type="checkbox"
              checked={selectedLanguages.includes(lang)}
              onChange={() => toggleLanguage(lang)}
            />
            {lang.toUpperCase()}
          </label>
        ))}
      </div>

      {/* View: Table or Chart */}
      {showTable ? (
        <table border="1" cellPadding="6">
          <thead>
            <tr>
              <th>Ano</th>
              {allLanguages.map((lang) => (
                <th key={lang}>{lang.toUpperCase()}</th>
              ))}
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {sortedYears.map((year) => {
              const row = grouped[year];
              const total = Object.entries(row)
                .filter(([lang]) => selectedLanguages.includes(lang))
                .reduce((acc, [, count]) => acc + count, 0);

              return (
                <tr key={year}>
                  <td>{year}</td>
                  {allLanguages.map((lang) => (
                    <td key={lang}>
                      {selectedLanguages.includes(lang) ? row[lang] || 0 : "-"}
                    </td>
                  ))}
                  <td>{total}</td>
                </tr>
              );
            })}
            {/* Footer Total */}
            <tr style={{ fontWeight: "bold" }}>
              <td>Total</td>
              {allLanguages.map((lang) => {
                const total = sortedYears.reduce((acc, year) => {
                  const yearData = grouped[year];
                  return acc + (yearData[lang] || 0);
                }, 0);
                return (
                  <td key={lang}>
                    {selectedLanguages.includes(lang) ? total : "-"}
                  </td>
                );
              })}
              <td>
                {sortedYears.reduce((acc, year) => {
                  return (
                    acc +
                    Object.entries(grouped[year])
                      .filter(([lang]) => selectedLanguages.includes(lang))
                      .reduce((sum, [, count]) => sum + count, 0)
                  );
                }, 0)}
              </td>
            </tr>
          </tbody>
        </table>
      ) : (
        // Pie Charts per Year
        sortedYears.map((year) => {
          const yearData = grouped[year];
          const filtered = Object.entries(yearData)
            .filter(([lang]) => selectedLanguages.includes(lang))
            .map(([lang, value]) => ({
              name: lang.toUpperCase(),
              value,
              lang,
            }));

          if (filtered.length === 0) return null;

          return (
            <div key={year} style={{ marginBottom: "2rem" }}>
              <h3>{year}</h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={filtered}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    label={renderLabel}
                  >
                    {filtered.map((entry) => (
                      <Cell
                        key={entry.lang}
                        fill={COLORS[entry.lang] || "#8884d8"}
                      />
                    ))}
                  </Pie>
                  <Tooltip
                    formatter={(value, name) => [`${value}`, `${name}`]}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          );
        })
      )}
    </div>
  );
};

export default YearPieCharts;
