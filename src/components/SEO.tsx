import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  type?: string;
  jsonLd?: Record<string, unknown>;
}

const SITE_NAME = "3FACTOR";
const DEFAULT_TITLE = "3FACTOR | Cybersecurity Consulting & Advisory";
const DEFAULT_DESCRIPTION = "3FACTOR is a boutique cybersecurity consultancy offering white-glove solutions, vCISO services, and compliance expertise for global organizations.";
const OG_IMAGE = "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/0fa7f06d-566a-48cb-8327-b57cac2f639d/id-preview-0e8d214a--7ca39dfa-69b5-422d-bd0b-420a85fbe744.lovable.app-1772104959937.png";

const SEO = ({ title, description, canonical, type = "website", jsonLd }: SEOProps) => {
  const pageTitle = title ? `${title} | ${SITE_NAME}` : DEFAULT_TITLE;
  const pageDescription = description || DEFAULT_DESCRIPTION;

  const defaultJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "3FACTOR",
    url: "https://threefactor-glow-web.lovable.app",
    logo: "https://threefactor-glow-web.lovable.app/lovable-uploads/3f2d2bf8-a5a0-49ce-b96b-f1a2b91f73ba.png",
    description: DEFAULT_DESCRIPTION,
    sameAs: ["https://www.linkedin.com/company/threefactor"],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      url: "https://threefactor-glow-web.lovable.app/contact",
    },
  };

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      {canonical && <link rel="canonical" href={canonical} />}

      <meta property="og:type" content={type} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={OG_IMAGE} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={OG_IMAGE} />

      <script type="application/ld+json">
        {JSON.stringify(jsonLd || defaultJsonLd)}
      </script>
    </Helmet>
  );
};

export default SEO;
