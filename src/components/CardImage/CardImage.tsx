import "@/App.css"
import "@components/CardImage/CardImage.css"
import Logo from "@svg/logo_header.svg"

interface CardImageInterface {
  name: string;
  value: string;
  img: string;
}

const CardImage = ({name, img, value}: CardImageInterface) => {
  return (
    <label className="radio_card">
      <input type="radio" name={name} value={value} />
      <div className="card_content_wrapper">
        <span className="check_icon"></span>
        <div className="card_content">
          <img
            src={img || Logo}
            alt=""
          />
          <h4>Lorem ipsum dolor.</h4>
          <h5>Lorem ipsum dolor sit amet, consectetur.</h5>
        </div>
      </div>
    </label>
  )
}

export default CardImage