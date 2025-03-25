export default async function Home() {
  // Fetch data from your API
  const data = await fetch("http://localhost:3000/api/employees").then((res) =>
    res.json()
  );

  if (!data) return;

  // Render your data
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {data.employees.map((data) => {
        return (
          <div key={data.id} className="p-4 bg-white rounded-md shadow-sm">
            <h2>{data.name}</h2>
            <p>{data.position}</p>
          </div>
        );
      })}
    </div>
  );
}
