// src/components/filter.
import React, { useMemo } from "react";
import PropTypes from 'prop-types';
import TableContainer from "./TableContainer";

//import assets
let rewardImg = "https://cdn-icons-png.flaticon.com/128/2282/2282531.png";
let magicImg = "https://cdn-icons-png.flaticon.com/512/4338/4338712.png";
let spinsImg = "https://cdn-icons-png.flaticon.com/512/8146/8146784.png";
let offerImg = "https://cdn-icons-png.flaticon.com/512/776/776627.png";
let tackerImg = "https://cdn-icons-png.flaticon.com/512/5694/5694967.png";
let scholarshipImg = "https://cdn-icons-png.flaticon.com/512/3769/3769879.png";

function DatatableTables() {
    const columns = useMemo(
        () => [
            {
                Header: 'Image',
                accessor: 'imagesrc'
            },
            {
                Header: 'Name',
                accessor: 'name',
            },
            {
                Header: 'Rank',
                accessor: 'rank'
            },
        ],
        []
    );

    const data = [
        {
            "imagesrc": rewardImg,
            "name": "Jennifer Chang",
            "rank": 2
        },
        {
            "imagesrc": magicImg,
            "name": "Gavin Joyce",
            "rank": 3
        },
        {
            "imagesrc": spinsImg,
            "name": "Angelica Ramos",
            "rank": 1
        },
        {
            "imagesrc": offerImg,
            "name": "Doris Wilder",
            "rank": 5
        },
        {
            "imagesrc": tackerImg,
            "name": "Caesar Vance",
            "rank": 4
        },
        
    ];

    return (
        <div className="page-content">
            <div className="container-fluid">
                {/* <Table columns={columns} data={data} /> */}
                <TableContainer
                    columns={columns}
                    data={data}
                    isGlobalFilter={true}
                    isAddOptions={false}
                    customPageSize={10}
                    className="custom-header-css"
                />
            </div>
        </div>
    );
}
DatatableTables.propTypes = {
    preGlobalFilteredRows: PropTypes.any,

};


export default DatatableTables;