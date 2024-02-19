import { useState } from "react";
import type { Table } from "@tanstack/react-table";
import usePagination, { DOTS } from "../Pagination/usePagination";
import { Button } from "../../common/RadixComponents/Button";
import prepareDropdownOptions from "../../../utils/prepareDropdownOptions";
import { ColumnData } from "..";
import { FlexRow } from "../../common/Layouts";
import Input from "../../common/RadixComponents/Input";
import Select from "../../common/RadixComponents/Select";

interface IPaginationProps {
  totalCount: number;
  siblingCount?: number;
  currentPage: number;
  pageSize: number;
  table: Table<ColumnData>;
}

export default function Pagination({
  totalCount,
  siblingCount = 1,
  currentPage,
  pageSize,
  table,
}: IPaginationProps) {
  const [pageSizeState, setPageSizeState] = useState(pageSize);

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const options = [10, 25, 50, 100];

  const handleSelect = (selectedValue: any) => {
    table.setPageSize(selectedValue);
    setPageSizeState(selectedValue);
    table.setPageIndex(0);
  };

  return (
    <FlexRow
      className="naxatw-fixed naxatw-bottom-0 naxatw-left-0 naxatw-right-0 naxatw-w-full naxatw-flex-col
       naxatw-items-center naxatw-justify-between naxatw-gap-4  naxatw-bg-white naxatw-px-5 naxatw-py-2.5 md:naxatw-absolute 
      md:naxatw-flex md:naxatw-flex-row md:naxatw-gap-0"
    >
      <FlexRow className="naxatw-w-full naxatw-items-center naxatw-justify-between naxatw-gap-2  md:naxatw-w-[78%]">
        <FlexRow gap={4} className="naxatw-items-center">
          <p className="naxatw-text-sm naxatw-font-bold">Row per page</p>
          <Select
            key={table.getState().pagination.pageSize}
            options={prepareDropdownOptions(options)}
            onChange={handleSelect}
            selectedOption={pageSizeState}
            placeholder="Select"
            direction="top"
            className="naxatw-h-9 !naxatw-w-[64px] naxatw-rounded-lg naxatw-border md:!naxatw-w-20"
          />
        </FlexRow>
        <FlexRow gap={2}>
          <FlexRow className="naxatw-items-center naxatw-gap-4">
            <p className="naxatw-text-sm naxatw-font-bold">Go to page</p>
            <Input
              type="number"
              defaultValue={currentPage}
              onChange={(e: any) => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                table.setPageIndex(page);
              }}
              className="naxatw-w-14 naxatw-border-b-2 naxatw-px-1 naxatw-py-0"
            />
          </FlexRow>
        </FlexRow>
      </FlexRow>

      <FlexRow>
        <Button
          variant="ghost"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Prev
        </Button>
        <FlexRow className="naxatw-items-center naxatw-justify-center naxatw-gap-3">
          {paginationRange.map((pageNumber) => {
            if (pageNumber === DOTS) {
              return <span key={pageNumber}>&#8230;</span>;
            }
            return (
              <Button
                size="sm"
                key={pageNumber}
                variant={currentPage === pageNumber ? "default" : "outline"}
                onClick={() => table.setPageIndex(+pageNumber - 1)}
              >
                {pageNumber}
              </Button>
            );
          })}
        </FlexRow>
        <Button
          variant="ghost"
          disabled={!table.getCanNextPage()}
          onClick={() => table.nextPage()}
        >
          Next
        </Button>
      </FlexRow>
    </FlexRow>
  );
}
