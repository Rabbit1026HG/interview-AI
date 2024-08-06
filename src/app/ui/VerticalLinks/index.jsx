import Div from '../Div';

export default function VerticalLinks({ title, data, variant }) {
  return (
    <Div
      className={`cs-hero_social_wrap cs-primary_font cs-primary_color ${
        variant ? variant : ''
      }`}
    >
      {title && <Div className="cs-hero_social_title">{title}</Div>}
      {data && (
        <ul className="cs-hero_social_links">
          {data.map((item, index) => (
            <li key={index}>
              <a href={item.links}>{item.name}</a>
            </li>
          ))}
        </ul>
      )}
    </Div>
  );
}
