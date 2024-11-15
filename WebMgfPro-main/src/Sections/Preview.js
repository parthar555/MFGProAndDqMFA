
import React, { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ColumnGroup } from 'primereact/columngroup';
import { Row } from 'primereact/row';

const Preview = () => {
    const [sales] = useState([
        { product: 'Bamboo Watch', lastYearSale: 'Yes', thisYearSale: 'No', lastYearProfit: 54406, thisYearProfit: 43342 },
        { product: 'Black Watch', lastYearSale: 'Yes', thisYearSale: 'No', lastYearProfit: 423132, thisYearProfit: 312122 },
    ]);

    const lastYearSaleBodyTemplate = (rowData) => {
        return `${rowData.lastYearSale}`;
    };

    const thisYearSaleBodyTemplate = (rowData) => {
        return `${rowData.thisYearSale}`;
    };

    const headerGroup = (
        <ColumnGroup>
            <Row>
                <Column header="Questions" rowSpan={2} />
                <Column header="Answer" colSpan={2} />
            </Row>
            <Row>
                <Column header="Answer 1" field="lastYearSale"/>
                <Column header="Answer 2" field="thisYearSale"/>
            </Row>
        </ColumnGroup>
    );

    return (
        <div className="card">
            <DataTable value={sales} headerColumnGroup={headerGroup} tableStyle={{ minWidth: '50rem' }}>
                <Column field="product" />
                <Column field="lastYearSale" body={lastYearSaleBodyTemplate} />
                <Column field="thisYearSale" body={thisYearSaleBodyTemplate} />
            </DataTable>
        </div>
    );
}

export default Preview;
