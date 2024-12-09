export const metadata = {
  title: "Partial SSG & Full SSR Example",
};

export default function RootLayout({ children }) {
  const now = new Date();  
  // Convert to IST timezone
  const istOffset = 5 * 60 + 30; // IST offset in minutes (5 hours 30 minutes)
  const istDate = new Date(now.getTime() + istOffset * 60 * 1000);
  
  // Format as ISO string with IST offset
  const generatedAt = istDate.toISOString().slice(0, -1) + "+05:30";
  
  console.log(generatedAt);

  return (
    <html lang="en">
      <body>
        <header style={{ padding: '1rem', backgroundColor: '#f5f5f5' }}>
          <nav>
            <a href="/" style={{ marginRight: '1rem' }}>Home</a>
            <a href="/partial_ssg/1" style={{ marginRight: '1rem' }}>Partial SSG 1</a>
            <a href="/full_ssr/1">Full SSR 1</a>
          </nav>
        </header>
        <main style={{ minHeight: '80vh', padding: '2rem' }}>{children}</main>
        <footer style={{ textAlign: 'center', padding: '1rem' }}>
          Generated at: {generatedAt} 
        </footer>
      </body>
    </html>
  );
}
