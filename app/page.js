export const revalidate = 600; // ISR time in seconds

export default function Home() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Welcome to the Home Page</h1>
      <p>This page is fully static and uses Incremental Static Regeneration (ISR).</p>
    </div>
  );
}
