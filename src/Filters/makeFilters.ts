import { labelOf } from "../utils";

export interface Filter {
  name: string;
  values: {
    id: string;
    label: string;
  }[];
}

export interface Binding {
  [filterName: string]: { type: string; value: string };
}

export const makeFilters = (queryResults: any) => {
  return (
    queryResults &&
    queryResults.results &&
    queryResults.results.bindings.reduce((memo: Filter[], entry: Binding) => {
      const [filterIDData, filterLabelData] = Object.keys(entry);
      const filterName = filterIDData.replace("ID", "");
      const filter: Filter | undefined = memo.find(
        (entry: any) => entry.name === filterName
      );
      const filterValue = {
        id: entry[filterIDData].value,
        label: filterLabelData
          ? entry[filterLabelData].value
          : labelOf(entry[filterIDData].value)
      };
      if (filter) {
        // don't push the same ID to the filter list
        if (
          filter.values.find(filter => filter.id === entry[filterIDData].value)
        ) {
          return memo;
        }
        filter.values.push(filterValue);
      } else {
        memo.push({
          name: filterName,
          values: [filterValue]
        });
      }
      return memo;
    }, [])
  );
};
