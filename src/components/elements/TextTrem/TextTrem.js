import { TextTremLabel } from './styles';

function TextTrem({ children, type, className }) {
  return (
    <TextTremLabel className={className} type={type}>
      {children}
    </TextTremLabel>
  );
}

export default TextTrem;
