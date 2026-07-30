// Central place for external URLs that are not yet approved/available.
// Leave `null` until a real, approved URL is supplied — components that
// consume these render a disabled control rather than a link to `#` or a
// fabricated address. See CLAUDE.md "Never ... publish ... payment details"
// and the Phase-1 instruction not to add unapproved donation/newsletter URLs.
export const donateUrl: string | null = null;
export const newsletterSignupUrl: string | null = null;
