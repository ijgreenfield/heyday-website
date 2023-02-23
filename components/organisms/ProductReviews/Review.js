import ReactStars from "react-stars";

export default function Review({review, user}) {
    const nameArray = user.display_name.split('');
    const initial = nameArray[0];
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
                            {/*<ReactStars 
                                count={5}
                                size={16}
                                value={review.score}
                            />*/}
                        </div>
                    </div>
                </div>
                <div>
                    <p className="font-medium">{review.title}</p>
                    <p>{review.content}</p>
                </div>
            </div>
        </div>
    )
}