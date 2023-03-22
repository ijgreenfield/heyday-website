import Ratings from "react-ratings-declarative"

export default function Review({review, user}) {
    const nameArray = user.display_name.split('');
    const initial = nameArray[0];
    const reviewContent = review.content;
    const reviewTitle = review.title;
    const formattedTitle = reviewTitle.replace('&#x27;', "'")
    const formattedReview = reviewContent.replace('&#x27;', "'")
    
    return (
        <div className="py-6 border-t border-[#e3e3e3]">
            <div className="flex flex-col gap-y-4">
                <div className="flex gap-x-3">
                    <div className="shrink-0">
                        <span className="bg-[#858c91] w-12 h-12 flex items-center justify-center rounded-full text-white">
                            <span>{initial}</span>
                        </span>
                    </div>
                    <div className="flex flex-col gap-y-1 justify-center">  
                        <div className="flex items-center gap-x-2 shrink text-xs">
                            <p className="font-bold text-xs">{user.display_name}</p>
                            { review.verified_buyer && <span>Verified Buyer</span>}
                        </div>
                        <div>
                            <div className="mr-2.5">
                                <Ratings 
                                    rating={review.score}
                                    widgetDimensions="17.5px"
                                    widgetSpacings="0"
                                    widgetRatedColors="#F2C75C"
                                >
                                    <Ratings.Widget />
                                    <Ratings.Widget />
                                    <Ratings.Widget />
                                    <Ratings.Widget />
                                    <Ratings.Widget />
                                </Ratings>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <p className="font-medium pb-1 text-sm">{formattedTitle}</p>
                    <p className="text-sm">{formattedReview}</p>
                </div>
                <div>
                    <span className="text-xs">{review.created_at}</span>
                </div>
            </div>
        </div>
    )
}