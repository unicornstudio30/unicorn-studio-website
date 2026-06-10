/**
 * Server-side schema.org BreadcrumbList. Renders nothing visible — it
 * only emits the JSON-LD <script> Google's search results use to show
 * a breadcrumb trail under your URL ("unicornstudio.io › services ›
 * AI Systems"). Each sub-page's layout passes its own trail.
 */
interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const ld = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
    />
  );
}
