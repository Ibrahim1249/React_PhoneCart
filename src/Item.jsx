import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

function item({image,phoneName,price}) {
  return (
    <>
      <div className="item-container">
        <div className="items">
          <div className="img">
            <img
              src={image}
              alt=""
            />
          </div>

          <div className="phone-details">
            <h4>{phoneName}</h4>
            <p>{price}</p>
            <a href="">remove</a>
          </div>
        </div>

        <div className="counter">
          <ArrowBackIosNewIcon  style={{"fontSize":"18px","cursor":"pointer"}}/>
          <span>1</span>
          <ArrowForwardIosIcon style={{"fontSize":"18px","cursor":"pointer"}} />
        </div>
      </div>
    </>
  );
}

export default item;
