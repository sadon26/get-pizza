import React, { useState, useEffect } from "react";
import PageLayout from "../../layouts/PageLayout";
import { usePizzaContext } from "../../contexts/PizzaItemsContext";
import PizzaCard from "../../components/PizzaCard";
import ReactPaginate from "react-paginate";

const Pizzas = () => {
  const { pizzas } = usePizzaContext();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [paginatedPizzas, setPaginatedPizzas] = useState<any[]>([]);
  const [pageCount, setPageCount] = useState<number>(1);

  const handlePageClick = (e: any) => setCurrentPage(e.selected + 1);

  const handlePagination = () => {
    const perPage = 8;
    const from = currentPage * perPage - perPage;
    const to = from + perPage;
    setPageCount(Math.ceil(pizzas.length / perPage));
    setPaginatedPizzas(pizzas.slice(from, to));
  };

  useEffect(() => {
    handlePagination();
  }, [currentPage]);

  return (
    <PageLayout>
      <p className="text-center fs-34 fw-700 text__orange mb-5 text-underline">
        OUR RUSH
      </p>

      <div className="grid grid__layout gap-3 row-gap-4 mb-3">
        {paginatedPizzas.map((pizza: any, index: number) => (
          <div className={`col-3 stagger__in--${index + 1}`} key={index}>
            <PizzaCard pizza={pizza} index={index} />
          </div>
        ))}
      </div>
      <div className="flex flex__center mb-4">
        <ReactPaginate
          className="pagination"
          breakLabel="..."
          nextLabel="Next"
          onPageChange={handlePageClick}
          pageRangeDisplayed={4}
          pageCount={pageCount}
          previousLabel="Previous"
        />
      </div>
    </PageLayout>
  );
};

export default Pizzas;
