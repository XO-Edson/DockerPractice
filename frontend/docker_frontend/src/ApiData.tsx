import { useEffect, useState } from "react";

type ApiDataType = {
  id: number;
  name: string;
  version: string;
};

function ApiData() {
  const [data, setData] = useState<ApiDataType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/data")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch API data");
        return res.json();
      })
      .then((result: ApiDataType[]) => {
        setData(result);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="api-page">
      <h2>API Data</h2>

      {loading && <p className="loading">Loading...</p>}
      {error && <p className="error">{error}</p>}

      {data.map((project) => (
        <div className="api-card" key={project.id}>
          <p><strong>Name:</strong> {project.name}</p>
          <p><strong>Version:</strong> {project.version}</p>
        </div>
      ))}
    </div>
  );
}

export default ApiData;