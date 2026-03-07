import React, { useEffect, useState } from "react";
import { getProductById } from "../../apiServices/productApi";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/ReusableUI/Button/Button";
import Rating from "../../components/ReusableUI/Rating/Rating";
import Header from "../../components/Header/Header";
import "./ProductDetails.css";
import Pagination from "../../components/ReusableUI/Pagination/Pagination";
import ImagesSkeleton from "../../components/ReusableUI/Skeleton/ImagesSkeleton";
import { Loader } from "../../components/ReusableUI/Loader/Loader";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [productData, setProductData] = useState(null);
  const [imageIndex, setImageIndex] = useState(1);

  useEffect(() => {
    const productDetails = async () => {
      try {
        const data = await getProductById(id);
        setProductData(data);
      } catch (error) {
        console.error("Failed to fetch product", error);
      }
    };

    if (id) {
      productDetails();
    }
  }, [id]);

  const images = productData?.images || [];
  const totalImagePages = images.length;

  const handleImageChange = (newPage) => {
    setImageIndex(newPage);
  };

  if (!productData) return <Loader loading={!productData} />;
  return (
    <div className="detailPage">
      <Header />
      <div className="detailContainer">
        <div className="backWrapper">
          <Button
            title="Back"
            icon="←"
            variant="outline"
            onClick={() => navigate(-1)}
          />
        </div>

        <div className="detailLayout">
          <div className="imageSection">
            {images ? (
              <img
                src={images[imageIndex - 1]}
                alt={productData.title}
                className="productImage"
              />
            ) : (
              <ImagesSkeleton />
            )}

            {images.length > 1 && (
              <div className="imagePagination">
                <Pagination
                  page={imageIndex}
                  totalPages={totalImagePages}
                  onPageChange={handleImageChange}
                />
              </div>
            )}
          </div>

          <div className="infoSection">
            <h2 className="productTitle">{productData.title}</h2>

            <div className="priceRating">
              <span className="price">${productData.price}</span>
              <span className="rating">
                <Rating rating={productData.rating} />
              </span>
            </div>
            <div className="brand">
              <p>
                <strong>Brand:</strong> {productData.brand}
              </p>
              <p>
                <strong>Category:</strong> {productData.category}
              </p>
            </div>

            <hr />

            <div className="descriptionSection">
              <h3 style={{ display: "flex" }}>Description</h3>
              <p>{productData.description}</p>
            </div>

            <hr />

            <h3 style={{ display: "flex" }}>Reviews</h3>
            {productData.reviews?.map((review, index) => (
              <div key={index} className="reviewItem">
                <div className="reviewHeader">
                  <span>{review.reviewerName}</span>
                  <span className="reviewRating">
                    <Rating rating={review.rating} />
                  </span>
                </div>

                <p style={{ display: "flex" }}>{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
