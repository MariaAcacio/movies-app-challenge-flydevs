import { BsStarHalf, BsStar, BsStarFill } from 'react-icons/bs';

export const StarRating = ({score=5, size}) => {
  let positions = new Array(5).fill(null);
  const stars = positions.map((pos,id) => {
		if(score>=2){
			score-=2;
			return <BsStarFill size={size} color='#FF3365' className="icon" key={id} />
		}
		if(score===1){
			score--;
			return <BsStarHalf size={size} color='#FF3365' className="icon" key={id} />
		}
		return <BsStar size={size} color='#FF3365' className="icon" key={id} />
	});

  return stars;
}