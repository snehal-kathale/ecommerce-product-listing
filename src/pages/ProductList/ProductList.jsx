import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Card from "../../components/ReusableUI/Card/Card";
import Filters from "../../components/Filters/Filters";
import Pagination from "../../components/ReusableUI/Pagination/Pagination";
import {
  getProducts,
  getCategories,
  getProductsByCategory,
} from "../../apiServices/productApi";
import { useNavigate, useSearchParams } from "react-router-dom";
import "./ProductList.css";
import CardSkeleton from "../../components/ReusableUI/Skeleton/CardSkeleton";
import FiltersSkeleton from "../../components/ReusableUI/Skeleton/FilterSkeleton";

const ProductList = () => {
  const LIMIT = 8;
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const [totalProducts, setTotalProducts] = useState(0);
  const [page, setPage] = useState(Number(searchParams.get("page")) || 1);
  const [showFilters, setShowFilters] = useState(true);
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [filters, setFilters] = useState({
    search: searchParams.get("search") || "",
    category: searchParams.get("category") || "",
    brands: searchParams.get("brand")
      ? searchParams.get("brand").split(",")
      : [],
    minPrice: searchParams.get("minPrice") || "",
    maxPrice: searchParams.get("maxPrice") || "",
  });

  const skip = (page - 1) * LIMIT;

  useEffect(() => {
    setSearchParams({
      search: filters.search || "",
      category: filters.category || "",
      brand: filters.brands.join(","),
      minPrice: filters.minPrice || "",
      maxPrice: filters.maxPrice || "",
      page,
    });
  }, [filters, page]);

  useEffect(() => {
    loadProducts();
  }, [page, filters]);

  useEffect(() => {
    loadCategories();
  }, []);

  useEffect(() => {
    setPage(1);
  }, [filters]);

  const loadProducts = async () => {
    try {
      setLoading(true);
      let data;

      if (filters.category) {
        data = await getProductsByCategory(filters.category, LIMIT, skip);
      } else {
        data = await getProducts(LIMIT, skip);
      }
      const productsData = data.products;
      setProducts(productsData);
      setTotalProducts(data.total || productsData.length);

      const uniqueBrands = [
        ...new Set(
          productsData.map((p) => p.brand).filter((b) => b && b.trim() !== ""),
        ),
      ];

      setBrands(uniqueBrands);
    } catch (err) {
      console.error(err);
      alert("Failed to load products. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const loadCategories = async () => {
    try {
      setLoading(true);
      const data = await getCategories();
      setCategories(data);
    } catch (err) {
      console.error(err);
      alert("Failed to load categories. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const applyPriceFilter = (min, max) => {
    setFilters({
      ...filters,
      minPrice: min,
      maxPrice: max,
    });
  };

  const filteredProducts = products.filter((p) => {
    if (
      filters.search &&
      !p.title.toLowerCase().includes(filters.search.toLowerCase())
    )
      return false;
    if (filters.brands.length && !filters.brands.includes(p.brand))
      return false;
    if (filters.minPrice && p.price < Number(filters.minPrice)) return false;
    if (filters.maxPrice && p.price > Number(filters.maxPrice)) return false;
    return true;
  });
  console.log({ filteredProducts });
  const totalPages = Math.ceil(
    (filters.search ||
    filters.brands.length ||
    filters.minPrice ||
    filters.maxPrice
      ? filteredProducts.length
      : totalProducts) / LIMIT,
  );

  return (
    <div className="page">
      <Header toggleFilters={() => setShowFilters(!showFilters)} />

      <div className="content">
        {showFilters && (
          <div className="filters">
            {loading ? (
              <FiltersSkeleton />
            ) : (
              <Filters
                categories={categories}
                brands={brands}
                filters={filters}
                setFilters={setFilters}
                applyPriceFilter={applyPriceFilter}
              />
            )}
          </div>
        )}
        <div className="productSection">
          <div className="productGrid">
            {!loading && filteredProducts.length
              ? filteredProducts.map((product) => (
                  <Card
                    key={product.id}
                    product={product}
                    onClick={() => navigate(`/product/${product.id}`)}
                  />
                ))
              : [...Array(LIMIT)].map((_, i) => <CardSkeleton key={i} />)}
          </div>
          <div className="paginationWrapper">
            <Pagination
              page={page}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
