// Write your code here.
import './index.css'

const CardProfile = props => {
  const {cardDetails} = props
  const {title, description, imgUrl, className, key} = cardDetails

  return (
    <li className="card-container">
      <div className="card-details-container">
        <li className={className}>
          <h1 className="header">{title}</h1>
          <p className="desc"> {description} </p>
          <img src={imgUrl} className="avatar" alt={title} />
        </li>
      </div>
    </li>
  )
}
export default CardProfile
