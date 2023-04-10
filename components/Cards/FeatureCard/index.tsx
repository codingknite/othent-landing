import * as Styled from './styles';
import { SpaceGrotesk700, DMSans700 } from '../../../utils/fonts';

interface Props {
  text: string;
  title: string;
  imgsrc: string;
}

export default function FeatureCard(props: Props) {
  return (
    <Styled.Container img={props.imgsrc}>
      <div>
        <img src={props.imgsrc} alt='illustration' />
      </div>

      <Styled.Title className={SpaceGrotesk700.className}>
        {props.title}
      </Styled.Title>
      <Styled.Text className={DMSans700.className}>{props.text}</Styled.Text>
    </Styled.Container>
  );
}
