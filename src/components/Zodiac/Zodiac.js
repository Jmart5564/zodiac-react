import './Zodiac.css';

export default function Zodiac({ name, dates, symbol }) {
  return (
    <div className="zodiac">
      <img className="zodiac-img" alt={name} src={`${process.env.PUBLIC_URL}/zodiacImages/${name}.webp`} />
      <span className="name">{name.charAt(0).toUpperCase() + name.slice(1)}</span>
      <span>{dates}</span>
      <span>{symbol}</span>
    </div>
  );
}