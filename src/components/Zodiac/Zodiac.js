import './Zodiac.css';

export default function Zodiac({ name, dates, symbol }) {
  return (
    <div className="zodiac" style={{ top }}>
      <img alt={name} src={`${process.env.PUBLIC_URL}/zodiacImages/${name}.webp`} />
      <span className="name">{name}</span>
      <span>{dates}</span>
      <span>{symbol}</span>
    </div>
  );
}