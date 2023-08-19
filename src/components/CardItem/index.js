// Write your code here.
import './index.css'

const CardItem = props => {
  const {cardsDetails} = props
  const {title, description, imgUrl, className} = cardsDetails

  return (
    <li className={`${className} card-container`}>
      <h1 className="title">{title}</h1>
      <p className="description">{description}</p>
      <div className="img-container">
        <img src={imgUrl} alt={title} className="image" />
      </div>
    </li>
  )
}

export default CardItem
