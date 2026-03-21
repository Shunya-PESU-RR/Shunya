import { useEffect } from "react";

interface PageMeta {
  title: string;
  description: string;
  path: string;
}

export function usePageMeta({ title, description, path }: PageMeta) {
  useEffect(() => {
    document.title = title;

    const setMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement
        || document.querySelector(`meta[property="${name}"]`) as HTMLMetaElement;
      if (!el) {
        el = document.createElement("meta");
        document.head.appendChild(el);
      }
      el.setAttribute(name.startsWith("og:") || name.startsWith("twitter:") ? "property" : "name", name);
      el.setAttribute("content", content);
    };

    // Update canonical link
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", `https://shunya-pes.vercel.app/${path}`);

    setMeta("description", description);
    setMeta("og:title", title);
    setMeta("og:description", description);
    setMeta("og:url", `https://shunya-pes.vercel.app/${path}`);
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);
  }, [title, description, path]);
}
