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
import { deleteWellWaterLevel } from "./action/wellWaterLevel.api";



export default function WellWaterLevelForm({ WellWaterLevel }) {


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
    router.push(`well-water-level/mod/edit/${id}`);
  };
  const handleDeleteClick = (id) => {
    setRowId(id);
    setOpenDialog(true);
  };

  const handleDelete = async () => {
    await deleteWellWaterLevel(rowId);
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
      field: "wellLevelDate",
      headerName: "تاریخ برداشت اطلاعات",
      width: 150,
      editable: false,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "wellName",
      headerName: "نام چاه",
      type: "number",
      width: 110,
      editable: false,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "wellLevelHeight",
      headerName: "عمق چاه",
      width: 150,
      editable: false,
      align: "center",
      headerAlign: "center",
    }, 
	    {
      field: "wellLevelUnit",
      headerName: "واحد",
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

  const rows = WellWaterLevel;

  return (
    <Box>
      <Stack
        direction={{ xs: "column", md: "row" }}
        sx={{ padding: 2, justifyContent: "space-between" }}
      >
        <Typography variant="h5" gutterBottom>
          عمق چاه{" "}
        </Typography>
        <Button
          variant="outlined"
          sx={{ borderRadius: 10 }}
          onClick={() => router.push("well-water-level/mod/add")}
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
