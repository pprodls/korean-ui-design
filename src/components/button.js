// 按钮组件
export default function Button({ children, onClick }) {
  return <button onClick={onClick}>{children}</button>;
}
