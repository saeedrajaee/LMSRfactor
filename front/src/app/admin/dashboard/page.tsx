import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

export default function StandardImageList() {
  return (
    <>
      <Grid container direction="row" spacing={2}>
        <Grid item xs spacing={2}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image="/admin/accuTerm.jpg"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                ترم انباشتگی
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                توضیحات
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">ترم انباشتگی</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs spacing={2}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image="/admin/1.jpg"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                عنوان دوم
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
              توضیحات
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">لینک موضوع دوم</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image="/admin/2.jpg"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                موضوع 3
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
              توضیحات
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">لینک موضوع 3</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>

<br/>

      <Grid container direction="row" spacing={2}>
        <Grid item xs spacing={2}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image="/admin/3.jpg"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                موضع 4
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
              توضیحات
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">لینک موضوع 4</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs spacing={2}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image="/admin/4.jpg"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                موضوع 5
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
توضیحات              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">5 لینک موضوع</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image="/admin/5.jpg"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                موضوع 6
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
توضیحات              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small"> لینک موضوع 6</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}
