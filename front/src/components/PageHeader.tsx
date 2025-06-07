import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import * as React from "react";

export default function PageHeader({title}: {title: string}){

    return(<Stack direction="row" sx={{ padding: 2 }}>
        <Typography variant="h5" gutterBottom>
            {title}
        </Typography>
    </Stack>)
}
