import ReactStars from "react-stars";

export default function Review() {
    return (
        <div className="py-6 border-t border-[#e3e3e3]">
            <div className="flex flex-col gap-y-4">
                <div className="flex gap-x-3">
                    <div className="shrink-0">
                        <span className="bg-[#858c91] w-12 h-12 flex items-center justify-center rounded-full text-white">
                            <span>A</span>
                        </span>
                    </div>
                    <div className="flex flex-col gap-y-1 justify-center">  
                        <div className="flex items-center gap-x-2 shrink text-xs">
                            <p className="font-bold text-xs">Alison T.</p>
                            <span>Verified Buyer</span>
                        </div>
                        <div>
                            <ReactStars 
                                count={5}
                                size={16}
                                value={4}
                            />
                        </div>
                    </div>
                </div>
                <div>
                    <p className="font-medium">Another Golde Medal</p>
                    <p>Just another home-run. I like this blended into smoothies best, the tumeric looks like literal gold glitter in a green smoothie, your aesthetics will not be disappointed (nor will your skin!).</p>
                </div>
            </div>
        </div>
    )
}