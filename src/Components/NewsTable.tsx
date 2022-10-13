import React, { useState, useEffect, useRef } from "react";

//mui
import {
    styled,
    Box,
} from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";

//library import
import axios from '../utils/axios'

const TableWrapper = styled(Box)(({ theme }) => ({
    height: "600px",
    marginTop: '1rem'
}));

type AllNews =
    {

        id: number;
        newsId: number;
        news: string;

    }


export default function NewsTable(): React.ReactElement {
    const [news, setNews] = useState<AllNews[]>([]);
    const [loading, setLoading] = useState(false);
    const [refreshlist, setRefreshList] = useState<boolean>(false);
    const isMounted = useRef(false);

    //getting all news
    useEffect(() => {
        const getAllNews = async () => {

            try {
                await axios
                    .get(`/api/application/fetch-news`)
                    .then((response) => {
                        if (!isMounted.current) {
                            const { body } = response.data;
                            setNews(body);
                            console.log(body);



                        }
                    });
            } catch (error) {


            }
        };
        getAllNews();
        setRefreshList(false);
    }, [refreshlist]);



    const handleClick = async (newsId: number, id: number, myNews: string) => {
        try {
            await axios.post(`/api/application/delete-news`, {
                id: 0,
                news: myNews,
                newsId: newsId
            });
            toast.success('News removed successfully');
            const updatedNews = news.filter((allNews: any) => allNews.id !== newsId);
            setNews(updatedNews);
            setRefreshList(true);
        } catch (error) {
            toast.error('Something went wrong!');
        }

    }




    return (
        <TableWrapper>
            <h1>All News</h1>
            <table>
                <tr>
                    <th>News</th>
                    <th>Action</th>

                </tr>
                {
                    news.map((item, id) => {
                        return (
                            <tr key={id}>
                                <td>{item.news}</td>
                                <td>

                                    <button className='applyNow' onClick={() => handleClick(item.newsId, item.id, item.news)}>
                                        Delete
                                    </button>
                                </td>

                            </tr>
                        )
                    })
                }

            </table>

        </TableWrapper>


    );
}
