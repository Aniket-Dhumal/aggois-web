import { Image } from "react-bootstrap";
import "./ProductCard.css";
import { productData } from "../../data/products";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface ProductCardProps {
  limit?: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ limit }) => {
  const navigate = useNavigate();
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const displayedProducts = limit ? productData.slice(0, limit) : productData;


  return (
    <div className="agriculture-product-cards">
      <div className="section-heading">
        <h2>Our Products</h2>
        <div className="heading-divider">
          {/* <span className="leaf-icon">🌱</span> */}
        </div>
      </div>

      <div className="product-grid">
        {displayedProducts.map((product:any) => (
          <div 
            className={`product-card ${hoveredCard === product.id ? 'hovered' : ''}`}
            key={product.id}
            onMouseEnter={() => setHoveredCard(product.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="card-image-container">
              <Image
                src={product.image}
                alt={product.title}
                className="product-image"
                fluid
              />
              {/* <div className="organic-badge">Organic</div> */}
            </div>
            <div className="card-content">
              <h3 className="product-title">{product.title}</h3>
              <p className="product-description">{product.desc}</p>
              <button 
              onClick={() => navigate(`/productDetail/${product.id}`)}
              className="agriculture-btn">
                Learn More
                <span className="btn-arrow">→</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;