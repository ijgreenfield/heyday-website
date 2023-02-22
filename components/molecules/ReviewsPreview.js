import ReactStars from "react-stars";
import { getProductReviews } from "../../lib/yotpo/operations";

export default function ReviewsPreview() {
    console.log(getProductReviews('10785253775'))

    return (
        {/*<div className='flex'>
            <ReactStars 
                count={5}
                value={bottomline.average_score}
                size={16}
                edit={false}
            />
            <span>{bottomline.total_review} Review's</span>
    </div>*/}
    )
}