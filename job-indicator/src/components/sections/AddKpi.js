import React, {useState} from "react";
import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';

const AddKpi = () => {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    return (
        <div className="add-kpi">
            <div className="row">
                <div className="col-1 mt-3">KPI Title</div>
                <div className="col">
                    <InputText value={''} className="input" placeholder="KPI Title"/>
                </div>
            </div>
            <div className="row mt-2">
                <div className="col-1 mt-3">Start Date</div>
                <div className="col-4">
                    <Calendar value={startDate} onChange={(e) => setStartDate(e.value)} showIcon={true}></Calendar>
                </div>
                <div className="col-1 mt-3">End Date</div>
                <div className="col-4">
                    <Calendar value={endDate} onChange={(e) => setEndDate(e.value)} showIcon={true}></Calendar>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col">
                    <div class='componentWrapper'>
                        <div class="header">Target Group</div>
                        <div className="row">
                            <div className="col-1 mt-3">Role</div>
                            <div className="col">
                                <InputText value={''} className="input" placeholder="Role"/>
                            </div>
                        </div>
                        <div className="row mt-3 mb-3">
                            <div className="col-1 mt-3">Micro Role</div>
                            <div className="col">
                                <InputText value={''} className="input" placeholder="Micro Role"/>
                            </div>
                        </div>
                        <div className="row mt-3 mb-3">
                            <div className="col-1 mt-3">Line</div>
                            <div className="col">
                                <InputText value={''} className="input" placeholder="Line"/>
                            </div>
                        </div>
                        <div className="row mt-3 mb-3">
                            <div className="col-1 mt-3">Product Group</div>
                            <div className="col">
                                <InputText value={''} className="input" placeholder="Product Group"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddKpi;
