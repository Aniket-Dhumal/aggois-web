import { useParams, useNavigate } from "react-router-dom";
import { productData } from "../../data/products";
import { useEffect } from "react";
import "./ProductDetail.css";
import { Image } from "react-bootstrap";
import { motion } from "framer-motion";

const ProductDetail = () => {
  const { productId } = useParams();
  const navigate = useNavigate();

  const product = productData.find((item) => item.id === productId);

//   useEffect(() => {
//     if (!product) {
//       navigate("/"); // fallback if product not found
//     }
//   }, [product, navigate]);

  useEffect(() => {
  window.scrollTo({ top: 0, behavior: 'smooth' });

  if (!product) {
    navigate("/");
  }
}, [product, navigate]);

  if (!product) return null;

  return (
    <>
      {/* Apply dynamic bgImg here */}
      <div
        className="container-fluid"
        id="productDetailBg"
        style={{
          backgroundImage: `linear-gradient(
            to bottom, 
            rgba(0, 6, 2, 0.4),
            rgba(0, 36, 6, 0.6)
          ), url(${product.bgImg})`,
        }}
      >
        <div className="productDetailBg-heading">Product Detail</div>
      </div>

      <motion.div
        className="product-detail-container"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="detail-card">
          <motion.div
            className="detail-image"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Image src={product.image} alt={product.title} fluid />
          </motion.div>
          <motion.div
            className="detail-content"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <h2>{product.title}</h2>
            <h5>{product.desc}</h5>
            <p>{product.para}</p>
            <button className="back-btn" onClick={() => navigate(-1)}>
              ← Go Back
            </button>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default ProductDetail;
