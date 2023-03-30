// React
import { useState } from 'react';
// Data
import { commentData } from '../../data/CommentData';
// Icons
import { BsFillChatRightQuoteFill } from "react-icons/bs";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
// Styled
import { ReviewsBox, ImgBox, ContentBox, Review, ArrowLeft, ArrowRigth, MoveBox, Icon } from "./ReviewsStyled";

export const Reviews = () => {
    const [ translate, setTraslate ] = useState(0)
    const max = (commentData.length * 275) - 1250

    return(
        <ReviewsBox>
            <h1>Reviews</h1>

            {translate > 0 &&
                <ArrowLeft onClick={() => setTraslate(prev => prev - 275)}>
                    <MdKeyboardDoubleArrowLeft />
                </ArrowLeft>
            }

            <ContentBox>
                <MoveBox translate={translate} max={max}>
                    {commentData.map(item => (
                        <Review key={item.id}>
                            <Icon>
                                <BsFillChatRightQuoteFill />
                            </Icon>

                            <div>
                                <p>{item.comment}</p>
                            </div>

                            <ImgBox>
                                <img src={item.img} alt={`img/${item.id}`} />
                                <h3>{item.name}</h3>
                            </ImgBox>
                        </Review>
                    ))}
                </MoveBox>  
            </ContentBox>

            {translate < max &&
                <ArrowRigth onClick={() => setTraslate(prev => prev + 275)}>
                    <MdKeyboardDoubleArrowRight />
                </ArrowRigth>
            }

        </ReviewsBox>
    );
}