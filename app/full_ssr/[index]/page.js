export default async function FullSSRPage({ params }) {
    const { index } = await params;
    
    return (
      <div style={{ textAlign: 'center' }}>
        <h1>Full SSR</h1>
        <p>Index: {index}</p>
      </div>
    );
  }
  