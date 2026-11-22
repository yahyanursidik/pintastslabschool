export interface Shortcut {
  id?: string;
  title: string;
  url: string;
  description?: string;
}

export function uniqueShortcuts(links: Shortcut[]) {
  const seen = new Set<string>();

  return links.filter(({ url }) => {
    if (!url || url === '#' || seen.has(url)) return false;
    seen.add(url);
    return true;
  });
}
