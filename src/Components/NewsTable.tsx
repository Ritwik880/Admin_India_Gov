import React, { useState, useEffect, useRef } from "react";

//mui
import {
    Typography,
    Stack,
    styled,
    Button,
    Box,
    CircularProgress,
} from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";

//library import
import axios from "axios";

const TableWrapper = styled(Box)(({ theme }) => ({
    height: "600px",
}));

const TableBackground = styled("div")(({ theme }) => ({
    background: theme.palette.common.white,
    height: "auto",
    marginTop: theme.spacing(2),
    borderRadius: "8px",
    maxWidth: "1400px",
    margin: "auto",
    width: "100%",
    overflowX: "hidden",
  }));

interface AllNews {
    id: number;
    newsId: number;
    news: string;
}

function CustomUnsortedIcon() {
    return <UnfoldMoreIcon sx={{ color: "#F46A03" }} />;
}


export default function NewsTable(): React.ReactElement {
    const [bannedCeleb, setBannedCeleb] = useState<AllNews[]>([]);
    const [loading, setLoading] = useState(false);
    const [refreshlist, setRefreshList] = useState<boolean>(false);
    const isMounted = useRef(false);

    //getting all news
    useEffect(() => {
        const getAllNews = async () => {
            setLoading(true);
            try {
                await axios
                    .post(`http://localhost:9090/api/application/fetch-news`)
                    .then((response) => {
                        if (!isMounted.current) {
                            const { body } = response.data;
                            setBannedCeleb(body);
                            setLoading(false);
                        }
                    });
            } catch (error) {
                setLoading(false);

            }
        };
        getAllNews();
        setRefreshList(false);
    }, [refreshlist]);

    //prevent memory leak
    useEffect(
        () => () => {
            isMounted.current = true;
        },
        []
    );

    const handleClick = (id: number) => {

    }



    const columns: GridColDef[] = [
        {
            field: "news",
            headerName: 'News',
            minWidth: 220,
            flex: 1,
            headerAlign: "left",
            align: "left",
            sortable: true,
            valueGetter: (params) => params.row.name,
            renderCell: (params) => (

                <Typography
                    textTransform="capitalize"
                    color="grey.300"
                    variant="h6"
                    pl={1.5}
                    noWrap
                >
                    {params.row.name ? params.row.name : "User"}
                </Typography>

            ),
        },

        {
            field: "total_warnings",
            headerName: 'Action',
            sortable: true,
            minWidth: 130,
            flex: 1,
            headerAlign: "left",
            align: "left",
            valueGetter: (params) => params.row.total_warnings,
            renderCell: (params) => (
                <>
                    <Button
                        size="small"
                        sx={{ backgroundColor: "#F6F4F5" }}
                        onClick={() => handleClick(params.row.id)}
                    >
                        Delete
                    </Button>


                </>
            ),
        },

    ];

    return (
        <TableBackground>
            <TableWrapper>
                {loading ? (
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            pt: "5%",
                        }}
                    >
                        <CircularProgress />
                    </Box>
                ) : (
                    <DataGrid
                        sx={{
                            pl: 0.4,
                            ".MuiDataGrid-columnSeparator": {
                                display: "none !important",
                            },
                            "& .MuiDataGrid-cell, .MuiDataGrid-columnsContainer": {
                                borderBottom: "none !important",
                            },
                            ".MuiDataGrid-columnHeaders": {
                                borderBottom: "none !important",
                            },
                            ".MuiDataGrid-footerContainer": {
                                borderTop: "none !important",
                            },
                            ".MuiDataGrid-iconButtonContainer": {
                                visibility: "visible !important",
                            },
                            " .MuiDataGrid-cell:focus-within ": {
                                outline: "none !important",
                            },
                            cursor: "pointer",
                        }}
                        rows={bannedCeleb}
                        columns={columns}
                        checkboxSelection={false}
                        disableSelectionOnClick
                        rowHeight={60}
                        disableColumnMenu={true}
                        hideFooter={true}
                        hideFooterPagination={true}
                        components={{
                            ColumnUnsortedIcon: CustomUnsortedIcon,
                            ColumnSortedDescendingIcon: CustomUnsortedIcon,
                            ColumnSortedAscendingIcon: CustomUnsortedIcon,
                            NoRowsOverlay: () => (
                                <Stack
                                    height="100%"
                                    alignItems="center"
                                    justifyContent="center"
                                >
                                    <Typography color="primary" variant="h5">
                                        No News Found!
                                    </Typography>
                                </Stack>
                            ),
                        }}
                    />
                )}
            </TableWrapper>

        </TableBackground>
    );
}
