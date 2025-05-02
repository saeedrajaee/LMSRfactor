import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import Link from "next/link";

export default function StandardImageList() {
  return (
    <>
      <Grid container direction="row" spacing={2}>
        <Grid item xs spacing={2}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image="/admin/1.jpg"
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
              <Button
                href="/admin/accumulation-term"
                color="secondary"
                variant="outlined"
                size="small"
              >
                ورود اطلاعات ترم انباشتگی
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs spacing={2}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image="/admin/1.png"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                جابجایی سنجی
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                توضیحات
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                href="/admin/gcp"
                color="secondary"
                variant="outlined"
                size="small"
              >
                ورود اطلاعات جابجایی سنجی{" "}
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image="/admin/2.png"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                دبی پاشش اسید
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                توضیحات
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                href="/admin/flow"
                color="secondary"
                variant="outlined"
                size="small"
              >
                ورود اطلاعات دبی پاشش اسید
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>

      <br />

      <Grid container direction="row" spacing={2}>
        <Grid item xs spacing={2}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image="/admin/3.png"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                سطح اسید پیزومتر
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                توضیحات
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                href="/admin/piezometer-acid"
                color="secondary"
                variant="outlined"
                size="small"
              >
                ورود اطلاعات سطح اسید پیزومتر
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs spacing={2}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image="/admin/5.png"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                دمای پیزومتر
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                توضیحات{" "}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                href="/admin/piezometer-temp"
                color="secondary"
                variant="outlined"
                size="small"
              >
                ورود اطلاعات دمای پیزومتر
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image="/admin/6.jpeg"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                غلطت مس
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                توضیحات{" "}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                href="/admin/copper-concentration"
                color="secondary"
                variant="outlined"
                size="small"
              >
                {" "}
                ورود اطلاعات غلطت مس
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>

      <br />

      <Grid container direction="row" spacing={2}>
        <Grid item xs spacing={2}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image="/admin/8.jpg"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                سطح آب چاه
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                توضیحات
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                href="/admin/well-water-level"
                color="secondary"
                variant="outlined"
                size="small"
              >
                ورود اطلاعات سطح آب چاه
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs spacing={2}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image="/admin/7.png"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                پارامترهای شیمیایی{" "}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                توضیحات{" "}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                href="/admin/pls"
                color="secondary"
                variant="outlined"
                size="small"
              >
                ورود اطلاعات پارامترهای شیمیایی{" "}
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs spacing={2}></Grid>
      </Grid>
    </>
  );
}
