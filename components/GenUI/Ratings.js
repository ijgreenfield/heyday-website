import Ratings from "react-ratings-declarative"

export default function RatingsUI() {
  return (
    <div className="flex">
        <div className="mr-2.5">
            <Ratings 
                rating={5}
                widgetDimensions="14px"
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
        <div>
            <span className="text-[10px]">22 Reviews</span>
        </div>
    </div>
  )
}
