import * as React from "react";
import FiltersList from "./List";
import { Filter } from "./makeFilters";
function Filters() {
  const appliedFacets = {};
  const filters: Filter[] = [
    {
      name: "Brain Region",
      values: [
        {
          id: "Somatosensory Cortex",
          label: "Somatosensory Cortex"
        }
      ]
    },
    {
      name: "M-Type",
      values: [
        {
          id: "123",
          label: "Layer 5 PC"
        }
      ]
    }
  ];
  const handleUpdateFacets = () => {};

  return (
    filters && (
      <FiltersList
        appliedFilters={appliedFacets}
        filters={filters}
        updateFilters={handleUpdateFacets}
      />
    )
  );
}

export default Filters;
