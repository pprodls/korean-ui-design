// 卡片组件
export default function Card({ title, children, className }) {
  return (
    <div className={}>
      {title && <h3 className='card-title'>{title}</h3>}
      <div className='card-content'>{children}</div>
    </div>
  );
}
