export const revalidate = 60; // ISR time
//Comment below-line to break SSG / ISR
export const dynamic = 'force-static';

export async function generateStaticParams() {
  // Empty array to indicate no paths pre-generated
  return [];
}

export default async function PartialSSGPage({ params }) {
  const { index } = params;
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Partial SSG</h1>
      <p>Index: {index}</p>
    </div>
  );
}
