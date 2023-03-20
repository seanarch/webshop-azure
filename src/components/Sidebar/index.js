import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../redux/actions/product";
import "./_sidebar.scss";

const Sidebar = () => {
  const { product } = useSelector((obj) => obj);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.getProductCategories());
  }, []);

  console.log("CATETORIES: ", product);

  return (
    <div>
      <div className="sidebar_category">
        <div className="section-title">
          <h4>Categories</h4>
        </div>
        {product.categories.map((item, index) => {
          return (
            <div className="category_accordian" key={index}>
              <div className="accordian">
                <div className="card">
                  <div className="card-heading">
                    <a href="/#">{item.categories}</a>
                  </div>
                  <div className="card-body">
                    <ul>
                      <li>
                        <a href="/#">Coats </a>
                      </li>
                      <li>
                        <a href="/#">Jackets </a>
                      </li>
                      <li>
                        <a href="/#">Dresses </a>
                      </li>
                      <li>
                        <a href="/#">Shirts </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
