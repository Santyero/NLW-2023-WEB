
interface ButtonProps {
  style: React.CSSProperties;
}

export default function Button(props: ButtonProps) {
  const style = props.style;
  return (
    <button style={style}>Click me</button>
  )
}