export function createCountrySlug(name: string, code?: string) {
  const base = name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase("pt-BR")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")

  return code ? `${base}-${code.toLocaleLowerCase("pt-BR")}` : base
}
