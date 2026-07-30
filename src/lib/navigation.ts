// Single source of truth for the sitewide primary navigation, shared by
// Header.astro (desktop + mobile — one rendered list, not two) and the
// matching subset of links in Footer.astro, so the route set can't drift
// between the two. Phase 2 Commit 2 scope only (docs/phase-2-checklist.md
// §5): five real routes, no Donate/Newsletter/News/Events/Social entries.
export interface NavLink {
  href: string;
  label: string;
}

export const primaryNav: NavLink[] = [
  { href: "/about", label: "About" },
  { href: "/approach", label: "Approach" },
  { href: "/programs", label: "Programs" },
  { href: "/get-involved", label: "Get Involved" },
  { href: "/contact", label: "Contact" },
];

// True when `pathname` is the nav link's route or a nested route beneath it
// (e.g. "/about/philosophy" and "/about/leadership" both match "/about"),
// so a top-level section stays marked current while a visitor is anywhere
// underneath it. Trailing slashes are normalized so Astro's directory-style
// output ("/about/") matches the bare href ("/about").
export function isActiveRoute(pathname: string, href: string): boolean {
  const normalizedPath = pathname.replace(/\/+$/, "") || "/";
  const normalizedHref = href.replace(/\/+$/, "") || "/";

  return (
    normalizedPath === normalizedHref ||
    normalizedPath.startsWith(`${normalizedHref}/`)
  );
}
