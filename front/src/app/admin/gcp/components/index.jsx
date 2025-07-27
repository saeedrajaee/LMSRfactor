"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ConfirmDialog from "@/components/ConfirmDialog";
import persianText from "@/lang/DataGridFa";
import { DataGrid, GridToolbar, GridActionsCellItem } from "@mui/x-data-grid";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { createBulkUsers, deleteGcp } from "./action/gcp.api";
import { Input } from "@mui/material";
import { InputOutlined, InputRounded } from "@mui/icons-material";
import * as XLSX from "xlsx";



export default function GcpForm({ Gcp }) {

  const [file, setFile] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showChild, setShowChild] = useState(false)
  const router = useRouter();
  const [openDialog, setOpenDialog] = useState(false);
  const [rowId, setRowId] = useState();


  useEffect(() => {
    setShowChild(true)
  }, [])

  if (!showChild) {
    return null
  }
  const handleEditClick = (id) => {
    router.push(`gcp/mod/edit/${id}`);
  };
  const handleDeleteClick = (id) => {
    setRowId(id);
    setOpenDialog(true);
  };
  const handleDelete = async () => {
    await deleteGcp(rowId);
    setIsDeleteModalOpen(false);
    setSelectedId(null);
  };
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "hipName",
      headerName: "نام هیپ",
      width: 150,
      editable: false,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "gcpName",
      headerName: "نام ایستگاه",
      width: 150,
      editable: false,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "gcpX",
      headerName: "X",
      type: "number",
      width: 110,
      editable: false,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "gcpY",
      headerName: "Y",
      width: 150,
      editable: false,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "gcpZ",
      headerName: "زون",
      width: 150,
      editable: false,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "date",
      headerName: "تاریخ برداشت",
      width: 150,
      editable: false,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "gcpHeight",
      headerName: "ارتفاع",
      width: 150,
      editable: false,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "dDay",
      headerName: "روز سال",
      width: 150,
      editable: false,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "dx",
      headerName: "dx",
      width: 150,
      editable: false,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "dxR",
      headerName: "dxR",
      width: 150,
      editable: false,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "dxR1",
      headerName: "معکوس dxR",
      width: 150,
      editable: false,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "dy",
      headerName: "dy",
      width: 150,
      editable: false,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "dyR",
      headerName: "dyR",
      width: 150,
      editable: false,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "dyR1",
      headerName: "معکوس dyR",
      width: 150,
      editable: false,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "dz",
      headerName: "dz",
      width: 150,
      editable: false,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "dzR",
      headerName: "dzR",
      width: 150,
      editable: false,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "dzR1",
      headerName: "معکوس dzR",
      width: 150,
      editable: false,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "ds",
      headerName: "ds",
      width: 150,
      editable: false,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "dsR",
      headerName: "dsR",
      width: 150,
      editable: false,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "dsR1",
      headerName: "معکوس dsR",
      width: 150,
      editable: false,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "dt",
      headerName: "dt",
      width: 150,
      editable: false,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "dtR",
      headerName: "dtR",
      width: 150,
      editable: false,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "dtR1",
      headerName: "معکوس dtR",
      width: 150,
      editable: false,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "actions",
      type: "actions",
      headerName: "عملیات",
      width: 100,
      cellClassName: "actions",
      getActions: ({ id }) => {
        return [
          <GridActionsCellItem
            key={id}
            icon={<EditIcon sx={{ color: "green" }} />}
            label="Edit"
            className="textPrimary"
            onClick={() => handleEditClick(id)}
            color="inherit"
          />,
          <GridActionsCellItem
            key={id}
            icon={<DeleteIcon sx={{ color: "red" }} />}
            label="Delete"
            onClick={() => handleDeleteClick(id)}
            color="inherit"
          />,
        ];
      },
    },
  ];

  const rows = Gcp;

  function saveData() {
    if (file) {
      setLoading(true);
      const reader = new FileReader();
      reader.onload = async (e) => {
        const data = e.target?.result;
        if (data) {
          const workbook = XLSX.read(data, { type: "binary" });
          //sheetname
          const sheetName = workbook.SheetNames[0];
          //worksheet
          const workSheet = workbook.Sheets[sheetName];
          //json
          const json = XLSX.utils.sheet_to_json(workSheet);
          try {
            console.log(json);
            await createBulkUsers(json);
            setLoading(false);
          } catch (error) {
            console.log(error);
          }
        }
      };
      reader.readAsBinaryString(file);
    }
  }

  return (
    <Box>
      <Stack
        direction={{ xs: "column", md: "row" }}
        sx={{ padding: 2, justifyContent: "space-between" }}
      >
        <Typography variant="h5" gutterBottom>
          ایستگاه{" "}
        </Typography>
        <Box>
          <Button onClick={saveData} variant="outlined" color="warning"
            sx={{ borderRadius: 10 }}>
            ذخیره فایل
          </Button>
          {""}{" "}
          <Input type="file"
            accept=".xls,.xlsx"
            onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)} />
        </Box>
        <Button
          variant="outlined"
          sx={{ borderRadius: 10 }}
          onClick={() => router.push("gcp/mod/add")}
        >
          <AddIcon sx={{ paddingRight: 1 }} />
          افزودن
        </Button>
      </Stack>
      <Box sx={{ height: 400, width: "100%", backgroundColor: "white" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
          localeText={persianText}
          slots={{
            toolbar: GridToolbar,
          }}
          autoPageSize
        />
      </Box>
      <ConfirmDialog
        open={openDialog}
        title="حذف"
        message="آیا مطمئن هستید که می خواهید این مورد را حذف کنید؟"
        onClose={handleCloseDialog}
        onConfirm={handleDelete}
      />
    </Box>
  );
}
