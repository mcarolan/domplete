import domains from "./domains.json";

export function suggestDomains(query: string, limit: number = 10): string[] {
  if (!query) {
    return [];
  }

  query = query.toLowerCase();

  return domains.filter((domain) => domain.includes(query)).slice(0, limit);
}
