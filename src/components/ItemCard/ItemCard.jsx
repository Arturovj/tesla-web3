import React from "react";
import './ItemCard.scss'
import { Link } from "react-router-dom"

export default function ItemCard({ product }) {
  return (
    // <div>
    //   <img src={product.images[0]} alt={product.name}></img>
    //   <h3>{product.name}</h3>
    //   <p>
    //     {product.price.unit_amount/100}
    //     {product.price.currency}
    //   </p>
    // </div>


<section style={{}} className="light">

	<div className="container py-2">
    <Link to={`/producto/${product.id}`}>
		<div className="h1 text-center text-dark" id="pageHeaderTitle"></div>
        
		<article className="postcard light blue">
			<a className="postcard__img_link" href="#">
				<img className="postcard__img" src={product.images[0]} alt={product.name} />
			</a>
			<div className="postcard__text t-dark">
				<h1 className="postcard__title blue"><a href="#">{product.name}</a></h1>
				<div className="postcard__subtitle small">
					<time datetime="2020-05-25 12:00:00">
						<i className="fas fa-calendar-alt mr-2"></i>Mon, May 25th 2020
					</time>
				</div>
				<div className="postcard__bar"></div>
				<div className="postcard__preview-txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi, illum quos!</div>
				<ul className="postcard__tagbox">
					<li className="tag__item"><i className="fas fa-tag mr-2"></i>{product.price.unit_amount/100}</li>
					<li className="tag__item"><i className="fas fa-euro-sign mr-2"></i>{product.price.currency}</li>
					<li className="tag__item play blue">
						<a href="#"><i className="fas fa-shopping-cart mr-2"></i>Buy {product.name}</a>
					</li>
				</ul>
			</div>
		</article>
        </Link>
        </div>
        
        </section>
        
            
  );
}


{/* <section className="light">
	<div className="container py-2">
		<div className="h1 text-center text-dark" id="pageHeaderTitle">My Cards Light</div>

		<article className="postcard light blue">
			<a className="postcard__img_link" href="#">
				<img className="postcard__img" src={product.images[0]} alt={product.name} />
			</a>
			<div className="postcard__text t-dark">
				<h1 className="postcard__title blue"><a href="#">{product.name}</a></h1>
				<div className="postcard__subtitle small">
					<time datetime="2020-05-25 12:00:00">
						<i className="fas fa-calendar-alt mr-2"></i>Mon, May 25th 2020
					</time>
				</div>
				<div className="postcard__bar"></div>
				<div className="postcard__preview-txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi, illum quos!</div>
				<ul className="postcard__tagbox">
					<li className="tag__item"><i className="fas fa-tag mr-2"></i>{product.price.unit_amount/100}</li>
					<li className="tag__item"><i className="fas fa-clock mr-2"></i>{product.price.currency}</li>
					<li className="tag__item play blue">
						<a href="#"><i className="fas fa-play mr-2"></i>Play Episode</a>
					</li>
				</ul>
			</div>
		</article>
        </div>
        </section> */}