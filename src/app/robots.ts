import type { MetadataRoute } from "next";

// Named explicitly (rather than relying only on the "*" wildcard below) so
// the policy toward AI crawlers and answer engines is a deliberate,
// visible choice, not an accident of the default.
const AI_CRAWLERS = [
  "GPTBot", // OpenAI
  "ChatGPT-User", // OpenAI, on-demand browsing
  "OAI-SearchBot", // OpenAI search
  "ClaudeBot", // Anthropic
  "Claude-Web", // Anthropic
  "anthropic-ai", // Anthropic
  "PerplexityBot", // Perplexity
  "Perplexity-User", // Perplexity, on-demand browsing
  "Google-Extended", // Google AI training (Gemini, etc.)
  "GoogleOther", // Google research/product crawlers
  "Applebot-Extended", // Apple AI
  "Bytespider", // ByteDance/TikTok AI
  "CCBot", // Common Crawl (feeds many LLM training sets)
  "cohere-ai", // Cohere
  "Amazonbot", // Amazon
  "Meta-ExternalAgent", // Meta AI
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: AI_CRAWLERS,
        allow: "/",
      },
    ],
    sitemap: "https://ericathompson.io/sitemap.xml",
  };
}
