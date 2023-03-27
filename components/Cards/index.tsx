import * as Styled from './styles';

interface FeatureCardProps {
  text: string;
  title: string;
  imgsrc: string;
}

interface SlideCardProps {
  heading: string;
  text: string;
  num: number;
}

export const FeatureCard = (props: FeatureCardProps) => {
  return (
    <Styled.Container img={props.imgsrc}>
      <img src={props.imgsrc} alt='illustration' />

      <Styled.Title>{props.title}</Styled.Title>
      <Styled.Text>{props.text}</Styled.Text>
    </Styled.Container>
  );
};

export const SlideCard = (props: SlideCardProps) => {
  return (
    <Styled.SlideCardContainer>
      <div className='card-num-container'>
        <p className='card-num'>{props.num}</p>
      </div>

      <div className='text-container'>
        <h3>{props.heading}</h3>
        <p>{props.text}</p>
      </div>
    </Styled.SlideCardContainer>
  );
};
