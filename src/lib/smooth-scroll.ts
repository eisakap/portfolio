export function scrollToSection(
  id: string,
  options: ScrollIntoViewOptions = { behavior: "smooth", block: "start" },
) {
  if (typeof document === "undefined") return;
  const el = document.getElementById(id);
  el?.scrollIntoView(options);
}

