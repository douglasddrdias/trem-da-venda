import { TextLabel } from './styles';

function Text({ children, type, className }) {
  return (
    <TextLabel className={className} type={type}>
      {children}
    </TextLabel>
  );
}

export default Text;
