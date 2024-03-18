interface TagItemComponent {
  name: string
}

export const Tag = ({ name }: TagItemComponent) => {
  return <div>{name}</div>
}
