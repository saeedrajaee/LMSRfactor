'use client'

import React, { useEffect, useState } from 'react';
import {
    List,
    ListItem,
    ListItemText,
    Collapse, ListItemButton, ListSubheader, Typography, Drawer,
} from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import Box from "@mui/material/Box";

import logo from "@/assets/icons/logo.png"
import avatar from "@/assets/icons/avatar.png"
import Image from "next/image";
import Stack from "@mui/material/Stack";
import {useRouter} from "next/navigation";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

interface ListItem {
    id: string;
    label: string;
    path?: string;
    children?: ListItem[];
}

const data = [
    // {
    //     id: 'item11',
    //     label: 'نمای عمومی',
    //     path:"/admin"
    // },
    {
        id: 'item9',
        label: 'موقعیت ایستگاه ها',
        path:"/admin/map"
    },
    {
        id: 'item10',
        label: 'پایش و نمودارها',
        children: [
            { id: 'item10.1', label: 'نمودار نرخ جابجایی', path:"/admin/charts/gcp-datas" },
            { id: 'item10.2', label: 'نمودار ترم انباشتگی', path:"/admin/charts/accumulation-terms" },
            { id: 'item10.3', label: 'نمودار سطح اسید پیزومتر', path:"/admin/charts/piezometer-acid" },
            { id: 'item10.4', label: 'نمودار غلظت مس', path:"/admin/charts/copper-concentration" },
            { id: 'item10.5', label: 'نمودار پارامترهای شیمیایی pls', path:"/admin/charts/pls" },
        ],
     },
     {
        id: 'item1',
        label: 'ورود اطلاعات',
        path:"/admin/dashboard"
    },
    {
        id: 'item11',
        label: 'کتابخانه',
        path:"/admin"
    },
        {
        id: 'item12',
        label: 'داشبورد',
        path:"/dashboard"
    },
    // {
    //     id: 'item1',
    //     label: 'ورود اطلاعات',
    //     children: [
    //         { id: 'item1.3', label: 'جابجایی سنجی', path:"/admin/gcp" },
    //         { id: 'item2.1', label: 'دبی پاشش اسید',path:"/admin/flow" },
    //         { id: 'item3.1', label: 'ترم انباشتگی', path:"/admin/accumulation-term" },
    //         { id: 'item4.2', label: 'سطح اسید پیزومتر', path:"/admin/piezometer-acid" },
    //         { id: 'item5.1', label: 'دمای پیزومتر' , path:"/admin/piezometer-temp"},
    //         { id: 'item6.1', label: 'غلطت مس' , path:"/admin/copper-concentration"},
    //         { id: 'item7.1', label: 'پارامترهای شیمیایی PLS' , path:"/admin/pls"},
    //         { id: 'item8.1', label: 'سطح آب چاه' , path:"/admin/well-water-level"},
    //     ],
    // },
    // {
    //     id: 'item1',
    //     label: 'ورود اطلاعات',
    //     children: [
    //         { id: 'item1.1', label: 'اطلاعات هیپ', path:"/admin/hips" },
    //         { id: 'item1.2', label: 'اطلاعات ایستگاه کنترل زمینی', path:"/admin/gcps" },
    //         { id: 'item1.3', label: 'اطلاعات جابجایی سنجی ایستگاه', path:"/admin/gcp-datas" },
    //     ],
    // },
    // {
    //     id: 'item2',
    //     label: 'دبی پاشش اسید',
    //     children: [
    //         { id: 'item2.1', label: 'اطلاعات جابجایی سنجی ایستگاه',path:"/admin/flow" },
    //         { id: 'item2.2', label: 'مشخصات اطلاعات واحد دبی', path:"/admin/flow-unit" },
    //     ],
    // },
    // {
    //     id: 'item3',
    //     label: 'ترم انباشتگی',
    //     children: [
    //         { id: 'item3.1', label: 'اطلاعات ترم انباشتگی', path:"/admin/accumulation-term" },
    //     ],
    // },
    // {
    //     id: 'item4',
    //     label: 'سطح اسید در پیزومتر',
    //     children: [
    //         { id: 'item4.1', label: '‌اطلاعات پیزومتر' , path:"/admin/piezometer"},
    //         { id: 'item4.2', label: '‌اطلاعات سطح اسید در پیزومتر', path:"/admin/piezometer-acid" },
    //         { id: 'item4.3', label: '‌واحد اندازه گیری' , path:"/admin/piezometer-acid-level-unit"},
    //     ],
    // },
    // {
    //     id: 'item5',
    //     label: 'دما پیزومتر',
    //     children: [
    //         { id: 'item5.1', label: '‌اطلاعات دمای پیزومتر' , path:"/admin/piezometer-temp"},
    //         { id: 'item5.2', label: '‌واحد اندازه گیری دما' , path:"/admin/temp-unit"},
    //     ],
    // },
    // {
    //     id: 'item6',
    //     label: 'غلظت مس',
    //     children: [
    //         { id: 'item6.1', label: '‌اطلاعات غلطت مس' , path:"/admin/copper-concentration"},
    //         { id: 'item6.2', label: '‌اطلاعات واحد غلظت', path:"/admin/cop-con-unit" },
    //     ],
    // },
    // {
    //     id: 'item7',
    //     label: 'پارامترهای شیمیایی PLS',
    //     children: [
    //         { id: 'item7.1', label: '‌اطلاعات پارامترهای شیمیایی PLS' , path:"/admin/pls"},
    //         { id: 'item7.2', label: '‌واحد اندازه غلظت', path:"/admin/density-unit" },
    //         { id: 'item7.3', label: '‌واحد پارامتر قابل اندازه گیری', path:"/admin/param-val" },
    //     ],
    // },
    // {
    //     id: 'item8',
    //     label: 'سطح آب چاه ها',
    //     children: [
    //         { id: 'item8.1', label: '‌اطلاعات سطح آب چاه' , path:"/admin/well-water-level"},
    //         { id: 'item8.2', label: '‌مشخصات چاه' , path:"/admin/well"},
    //         { id: 'item8.3', label: 'واحد اندازه گیری سطح آب' , path:"/admin/well-level-unit"},
    //     ],
    // },
];

function NestedList() {
    const router = useRouter();

    const [open, setOpen] = useState<{ [key: string]: boolean }>({});
    const [selectedIndex, setSelectedIndex] = React.useState<string | undefined>(undefined);
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = (open:boolean) => () => {
        setDrawerOpen(open);
    };
    const handleToggle = (item: ListItem) => {
        setOpen((prevOpen) => ({ ...prevOpen, [item.id]: !prevOpen[item.id] }));
        setSelectedIndex(item.id);
        if(item.path)
            router.push(item.path);

    };


    useEffect(() => {
        // This effect runs only on the client side
        setSelectedIndex(undefined); // Reset or set initial state if needed
    }, []);


    const renderListItems = (items: ListItem[]) => {
        return items.map((item) => (
            <Box key={item.id}>
                <ListItemButton
                    onClick={() => handleToggle(item)}
                    sx={{
                        marginX: 1,
                        borderRadius: 2,
                        '&.Mui-selected': {
                            backgroundColor: '#007bff',
                            color: 'white',
                            '&:hover': {
                                backgroundColor: '#007bff',
                            },
                        },
                    }}
                    selected={selectedIndex === item.id}>
                    <ListItemText primary={item.label} primaryTypographyProps={item.children ? undefined : { fontSize: 14 }} />
                    {item.children && (
                        open[item.id] ? <ExpandLess /> : <ExpandMore />
                    )}
                </ListItemButton>

                {item.children && (
                    <Collapse in={open[item.id]} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding sx={{ pl: 2 }}>
                            {renderListItems(item.children)}
                        </List>
                    </Collapse>
                )}
            </Box>
        ));
    };

    const renderMenu = () => {
        return(
            <Box sx={{
                width: 250,
                height: '100vh',
                backgroundColor: '#343a40',
                color: 'white',
                overflowY: 'scroll'
            }}>
                <List component="nav"
                      subheader={
                          <ListSubheader
                              sx={{
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'space-between',
                                  backgroundColor: '#343a40',
                                  color: 'white',
                                  borderBottom: '1px solid #60676e',
                                  paddingY: 1
                              }}
                              component="div"
                              id="nested-list-subheader">
                              <Box sx={{ fontSize: 20 }}>پنل مدیریت</Box>
                              <Image src={logo} alt={"logo"} style={{ width: 40, height: 40, borderRadius: '50%', backgroundColor: '#d3d5d7' }} />
                          </ListSubheader>
                      }
                >
                    <Stack
                        direction="row"
                        spacing={2}
                        sx={{
                            padding: 2,
                            marginBottom: 2,
                            borderBottom: '1px solid #60676e',
                            alignItems: 'center'
                        }}>
                        <Image src={avatar} alt={"logo"} style={{ width: 40, height: 40, borderRadius: '50%', backgroundColor: '#d3d5d7' }} />
                        <Typography>مدیر سیستم</Typography>
                    </Stack>

                    {renderListItems(data)}
                </List>
            </Box>
        )
    }

    return (
        <>
            <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer(true)}
                sx={{
                    display: { xs: "flex", md: "none" },
                    position: 'absolute',
                    left: 20,
                    top: 8
            }}
            >
                <MenuIcon />
            </IconButton>
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
                {renderMenu()}
            </Box>
            <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
                {renderMenu()}
            </Drawer>
        </>
    );
}

export default NestedList;
