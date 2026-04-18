type EmptyStateProps = {
  title: string
  description: string
}

export function EmptyState({ title, description }: EmptyStateProps) {
  return (
    <div className="rounded-[1.8rem] border border-dashed border-stone-200/14 bg-black/10 px-6 py-10 text-center">
      <p className="atlas-eyebrow">Mapa sem marcacoes</p>
      <h2 className="atlas-display mt-4 text-3xl text-amber-50">{title}</h2>
      <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-stone-300">
        {description}
      </p>
    </div>
  )
}
