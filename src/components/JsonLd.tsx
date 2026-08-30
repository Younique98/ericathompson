export function JsonLd({ data }: { data: Record<string, unknown> }) {
  // Escaping "<" prevents a "</script>" sequence inside any field value
  // from breaking out of the script tag, even though today's data is all
  // static and author-controlled.
  const json = JSON.stringify(data).replace(/</g, "\\u003c");
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
