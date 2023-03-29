// Data
import { commentData } from '../../data/CommentData';
// Icons
import { BsFillChatRightQuoteFill } from "react-icons/bs";
// Styled
import { ReviewsBox, ImgBox, ContentBox, Review } from "./ReviewsStyled";

export const Reviews = () => {
    return(
        <ReviewsBox>
            <h1>Reviews</h1>

            <ContentBox>
                {commentData.map(item => (
                    <Review key={item.id}>
                        <div>
                            <BsFillChatRightQuoteFill />
                        </div>

                        <div>
                            <p>{item.comment}</p>
                        </div>

                        <ImgBox>
                            <img src={item.img} alt={`img/${item.id}`} />
                            <h3>{item.name}</h3>
                        </ImgBox>
                    </Review>
                ))}  
            </ContentBox>
        </ReviewsBox>
    );
}