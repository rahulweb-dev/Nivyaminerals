"use client";

import dynamic from "next/dynamic";
import React, { useEffect, useMemo } from "react";
import { Box, Button, Select, Chip } from "@mui/material";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { mkConfig, generateCsv, download } from "export-to-csv";
import { FiRefreshCcw, FiSearch } from "react-icons/fi";
import { ImSpinner } from "react-icons/im";

// Dynamically import MaterialReactTable to disable SSR
const MaterialReactTable = dynamic(
  () => import("material-react-table").then((mod) => mod.MaterialReactTable),
  { ssr: false }
);

const EnqTable = ({
  data = [],
  columns = [],
  rangeValue,
  setRangeValue,
  dateRange,
  setDateRange,
  refreshing,
  setRefreshing,
  loading,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setRefreshing(!refreshing);
  };

  const handleDateChange = (e) => {
    const { name, value } = e.target;
    setDateRange((prev) => ({ ...prev, [name]: value }));
  };

  const handleRefreshData = () => setRefreshing(!refreshing);

  // Reset dateRange when selecting anything other than "Between"
  useEffect(() => {
    if (rangeValue !== "Between") {
      setDateRange({ startDate: "", endDate: "" });
      if (rangeValue === "allData") {
        setRefreshing(!refreshing);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rangeValue]);

  // Filter data based on selected range
  const filteredData = useMemo(() => {
    if (!data?.length) return [];

    const today = new Date();
    const yesterday = new Date();
    yesterday.setDate(today.getDate() - 1);

    const normalizeDate = (d) => new Date(d.getFullYear(), d.getMonth(), d.getDate());

    const todayOnly = normalizeDate(today);
    const yesterdayOnly = normalizeDate(yesterday);

    return data.filter((row) => {
      if (!row?.date) return false;

      const rowDate = new Date(row.date);
      if (isNaN(rowDate.getTime())) return false;

      const rowOnly = normalizeDate(rowDate);

      switch (rangeValue) {
        case "allData":
          return true;

        case "today":
          return rowOnly.getTime() === todayOnly.getTime();

        case "yesterday":
          return rowOnly.getTime() === yesterdayOnly.getTime();

        case "thisMonth":
          return (
            rowDate.getMonth() === today.getMonth() &&
            rowDate.getFullYear() === today.getFullYear()
          );

        case "lastMonth": {
          const lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, 1);
          return (
            rowDate.getMonth() === lastMonth.getMonth() &&
            rowDate.getFullYear() === lastMonth.getFullYear()
          );
        }

        case "last3Months": {
          const threeMonthsAgo = new Date(today);
          threeMonthsAgo.setMonth(today.getMonth() - 3);
          return rowDate >= threeMonthsAgo && rowDate <= today;
        }

        case "last6Months": {
          const sixMonthsAgo = new Date(today);
          sixMonthsAgo.setMonth(today.getMonth() - 6);
          return rowDate >= sixMonthsAgo && rowDate <= today;
        }

        case "last12Months": {
          const twelveMonthsAgo = new Date(today);
          twelveMonthsAgo.setFullYear(today.getFullYear() - 1);
          return rowDate >= twelveMonthsAgo && rowDate <= today;
        }

        case "Between": {
          if (!dateRange?.startDate || !dateRange?.endDate) return false;

          const start = new Date(dateRange.startDate);
          const end = new Date(dateRange.endDate);

          // include full end date
          end.setHours(23, 59, 59, 999);

          return rowDate >= start && rowDate <= end;
        }

        default:
          return true;
      }
    });
  }, [data, rangeValue, dateRange]);

  const csvConfig = mkConfig({
    fieldSeparator: ",",
    decimalSeparator: ".",
    useKeysAsHeaders: true,
    filename: `enquiries_${rangeValue || "data"}`,
  });

  const handleExportData = () => {
    const csv = generateCsv(csvConfig)(filteredData); // ✅ export filtered data
    download(csvConfig)(csv);
  };

  return (
    <Box
      sx={{
        position: "relative",
        borderRadius: "18px",
        overflow: "hidden",
        background: "#fff",
        boxShadow: "0 12px 40px rgba(0,0,0,0.08)",
        border: "1px solid rgba(0,0,0,0.06)",
      }}
    >
      {/* Loading Overlay */}
      {loading && (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-white/70 backdrop-blur-sm">
          <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-5 py-3 shadow-md">
            <ImSpinner className="text-2xl animate-spin text-[#303a9b]" />
            <span className="text-sm font-semibold text-slate-700">
              Loading enquiries...
            </span>
          </div>
        </div>
      )}

      <MaterialReactTable
        columns={columns}
        data={filteredData}
        enableStickyHeader
        enableStickyFooter
        enablePagination
        enableBottomToolbar
        initialState={{
          density: "compact",
          pagination: { pageIndex: 0, pageSize: 15 },
        }}
        muiTablePaperProps={{
          elevation: 0,
          sx: { boxShadow: "none" },
        }}
        muiTableHeadCellProps={{
          sx: {
            fontWeight: 700,
            fontSize: "13px",
            color: "#0f172a",
            backgroundColor: "#F8FAFC",
            borderBottom: "1px solid #E2E8F0",
          },
        }}
        muiTableBodyCellProps={{
          sx: {
            fontSize: "13px",
            color: "#0f172a",
            borderBottom: "1px solid #F1F5F9",
          },
        }}
        muiTableBodyRowProps={{
          sx: {
            "&:hover td": {
              backgroundColor: "#F8FAFC",
            },
          },
        }}
        renderTopToolbarCustomActions={() => (
          <div className="w-full px-4 py-3 border-b border-slate-200 bg-white">
            <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
              {/* Left Controls */}
              <div className="flex flex-wrap items-center gap-3">
                <Select
                  native
                  value={rangeValue}
                  onChange={(e) => setRangeValue(e.target.value)}
                  sx={{
                    height: 40,
                    borderRadius: "12px",
                    background: "#F8FAFC",
                    border: "1px solid #E2E8F0",
                    px: 1,
                    fontSize: "14px",
                    minWidth: 190,
                  }}
                >
                  <option value="allData">All Data</option>
                  <option value="today">Today</option>
                  <option value="yesterday">Yesterday</option>
                  <option value="thisMonth">This Month</option>
                  <option value="lastMonth">Last Month</option>
                  <option value="last3Months">Last 3 Months</option>
                  <option value="last6Months">Last 6 Months</option>
                  <option value="last12Months">Last 12 Months</option>
                  <option value="Between">Between Dates</option>
                </Select>

                {rangeValue === "Between" && (
                  <form onSubmit={handleSubmit} className="flex flex-wrap items-center gap-2">
                    <input
                      type="date"
                      name="startDate"
                      value={dateRange?.startDate || ""}
                      max={dateRange?.endDate || new Date().toISOString().split("T")[0]}
                      required
                      onChange={handleDateChange}
                      className="h-10 rounded-xl border border-slate-200 bg-white px-4 text-sm outline-none focus:ring-2 focus:ring-[#303a9b]/20"
                    />
                    <input
                      type="date"
                      name="endDate"
                      value={dateRange?.endDate || ""}
                      min={dateRange?.startDate || ""}
                      required
                      onChange={handleDateChange}
                      className="h-10 rounded-xl border border-slate-200 bg-white px-4 text-sm outline-none focus:ring-2 focus:ring-[#303a9b]/20"
                    />

                    <button
                      type="submit"
                      className="h-10 px-4 rounded-xl bg-[#303a9b] text-white text-sm font-semibold flex items-center gap-2 hover:opacity-90 transition"
                    >
                      <FiSearch />
                      Search
                    </button>
                  </form>
                )}

                <Chip
                  label={`Records: ${filteredData?.length || 0}`}
                  sx={{
                    height: 36,
                    borderRadius: "999px",
                    fontWeight: 700,
                    backgroundColor: "#EEF2FF",
                    color: "#303a9b",
                  }}
                />
              </div>

              {/* Right Buttons */}
              <div className="flex flex-wrap items-center gap-2 justify-end">
                <Button
                  onClick={handleRefreshData}
                  startIcon={<FiRefreshCcw />}
                  variant="outlined"
                  sx={{
                    height: 40,
                    borderRadius: "12px",
                    borderColor: "#CBD5E1",
                    color: "#0f172a",
                    textTransform: "none",
                    fontWeight: 700,
                    "&:hover": { borderColor: "#303a9b", color: "#303a9b" },
                  }}
                >
                  Refresh
                </Button>

                <Button
                  onClick={handleExportData}
                  startIcon={<FileDownloadIcon />}
                  variant="contained"
                  sx={{
                    height: 40,
                    borderRadius: "12px",
                    backgroundColor: "#303a9b",
                    textTransform: "none",
                    fontWeight: 700,
                    "&:hover": { backgroundColor: "#262E7E" },
                  }}
                >
                  Export CSV
                </Button>
              </div>
            </div>
          </div>
        )}
      />
    </Box>
  );
};

export default EnqTable;
