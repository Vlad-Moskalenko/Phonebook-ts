interface IButton {
  label: string;
  backgroundColor: string;
  size: "sm" | "md" | "lg";
  type: "button" | "submit";
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

export const Button = ({label, backgroundColor, size, type, onClick}: IButton) => {
  let scale = 1
  size === 'sm'? scale = 0.75 : scale = 1.5

  const style = {
    backgroundColor,
    padding: `${scale*0.5}rem ${scale*1}rem`,
    border: 'none',
  }

  return <button type={type} style={style} onClick={onClick}>{label}</button>
}