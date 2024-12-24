import React, { useState, useRef } from "react";
import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';
import { MultiSelect } from 'primereact/multiselect';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Dropdown } from 'primereact/dropdown';
import { JobIndicatorData } from '../../utils/Constants';
import { Toast } from 'primereact/toast';




const AddKpiNew = () => {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [selectedRoles, setSelectedRoles] = useState(null);
    const [selectedMicroRoles, setSelectedMicroRoles] = useState(null);
    const [selectedLines, setSelectedLines] = useState(null);
    const [selectedProductGroups, setSelectedProductGroups] = useState(null);
    const [selectedPresetData, setSelectedPreset] = useState(null);
    const [selectedKpi, setSelectedKpi] = useState(null);
    const [selectedSiteKpi, setSelectedSiteKpi] = useState(null);


    // data fields
    const [kpiTitle, setKpiTitle] = useState('');
    const [kpiDescription, setKpiDescription] = useState('');
    const toast = useRef(null);


    const [formData, setFormData] = useState({
        kpiTitle: false,
        description: false,
        selectKpi: false,
        startDate: false,
        endDate: false,
        roleItem: false,
        microRoleItem: false,
        lineItem: false,
        productGroupItem: false,
        presetItem: false,
        siteKpi: false

    });

    const onClickSubmitButton = () => {
        console.log("onClickSubmitButton")
        setFormData({
            ...formData,
            kpiTitle: false,
            description: false,
            selectKpi: false,
            startDate: false,
            endDate: false,
            roleItem: false,
            microRoleItem: false,
            lineItem: false,
            productGroupItem: false,
            presetItem: false,
        });

        if (!kpiTitle.trim()) {
            console.log("Kpi Tile")
            setFormData({
                ...formData,
                kpiTitle: true,
                description: false,
                selectKpi: false,
                startDate: false,
                endDate: false,
                roleItem: false,
                microRoleItem: false,
                lineItem: false,
                productGroupItem: false,
                siteKpi: false
            });
        } else if (!kpiDescription.trim()) {
            setFormData({
                ...formData,
                kpiTitle: false,
                description: true,
                selectKpi: false,
                presetItem: false,
                startDate: false,
                endDate: false,
                roleItem: false,
                microRoleItem: false,
                lineItem: false,
                productGroupItem: false,
                siteKpi: false

            });
        }
        else if (!selectedKpi) {
            setFormData({
                ...formData,
                kpiTitle: false,
                description: false,
                selectKpi: true,
                presetItem: false,
                startDate: false,
                endDate: false,
                roleItem: false,
                microRoleItem: false,
                lineItem: false,
                productGroupItem: false,
                siteKpi: false

            });
        }
        else if (!selectedPresetData) {

            setFormData({
                ...formData,
                kpiTitle: false,
                description: false,
                selectKpi: false,
                presetItem: true,
                startDate: false,
                endDate: false,
                roleItem: false,
                microRoleItem: false,
                lineItem: false,
                productGroupItem: false,
                siteKpi: false

            });
        }
        else if (!startDate) {
            setFormData({
                ...formData,
                kpiTitle: false,
                description: false,
                selectKpi: false,
                startDate: true,
                endDate: false,
                roleItem: false,
                microRoleItem: false,
                lineItem: false,
                productGroupItem: false,
                presetItem: false,
                siteKpi: false
            });
        } else if (!endDate) {
            setFormData({
                ...formData,
                kpiTitle: false,
                description: false,
                selectKpi: false,
                startDate: false,
                endDate: true,
                roleItem: false,
                microRoleItem: false,
                lineItem: false,
                productGroupItem: false,
                presetItem: false,
                siteKpi: false
            });
        } else if (!selectedRoles) {
            setFormData({
                ...formData,
                kpiTitle: false,
                description: false,
                selectKpi: false,
                startDate: false,
                endDate: false,
                roleItem: true,
                microRoleItem: false,
                lineItem: false,
                productGroupItem: false,
                presetItem: false,
                siteKpi: false
            });
        } else if (!selectedMicroRoles) {
            setFormData({
                ...formData,
                kpiTitle: false,
                description: false,
                selectKpi: false,
                startDate: false,
                endDate: false,
                roleItem: false,
                microRoleItem: true,
                lineItem: false,
                productGroupItem: false,
                presetItem: false,
                siteKpi: false
            });
        } else if (!selectedLines) {
            setFormData({
                ...formData,
                kpiTitle: false,
                description: false,
                selectKpi: false,
                startDate: false,
                endDate: false,
                roleItem: false,
                microRoleItem: false,
                lineItem: true,
                productGroupItem: false,
                presetItem: false,
                siteKpi: false
            });
        } else if (!selectedProductGroups) {
            setFormData({
                ...formData,
                kpiTitle: false,
                description: false,
                selectKpi: false,
                startDate: false,
                endDate: false,
                roleItem: false,
                microRoleItem: false,
                lineItem: false,
                productGroupItem: true,
                presetItem: false,
                siteKpi: false
            });
        } else if (!selectedSiteKpi) {
            setFormData({
                ...formData,
                kpiTitle: false,
                description: false,
                selectKpi: false,
                startDate: false,
                endDate: false,
                roleItem: false,
                microRoleItem: false,
                lineItem: false,
                productGroupItem: true,
                presetItem: false,
                siteKpi: true
            });
        }
        else {
            showSuccess();
        }


    };


    // date fields
    let today = new Date();
    let month = today.getMonth();
    let year = today.getFullYear();
    let prevMonth = month === 0 ? 11 : month - 1;
    let prevYear = prevMonth === 11 ? year - 1 : year;
    let nextMonth = month === 11 ? 0 : month + 1;
    let nextYear = nextMonth === 0 ? year + 1 : year;

    const [date, setDate] = useState(null);

    let minDate = new Date();

    // minDate.setMonth(prevMonth);
    // minDate.setFullYear(prevYear);

    let maxDate = new Date();

    maxDate.setMonth(nextMonth);
    maxDate.setFullYear(nextYear);

    const showSuccess = () => {
        toast.current.show({ severity: 'success', summary: 'Success', detail: 'Kpi created successfully!', life: 10000 });
    }
    const countryOptionTemplate = (option) => {
        return (
            <div >
                <div style={{paddingTop:5,paddingBottom:5, margin:5, alignContent:'center',display:'flex', justifyContent:'center'}}>{option.name}</div>
            </div>
        );
    };
    const filterOptionTemplate = (option) => {
        return (
            <div className="flex gap-2"  style={{width:'100%', background:'red'}}>
                <InputText className="textInput" value={kpiTitle} onChange={(e) => setKpiTitle(e.target.value)}  placeholder="Enter your KPI Title" />
            </div>
        );
    };
    

    return (
        <div className="add-kpi" style={{ }}>
            <Toast ref={toast} />
            <div style={{marginLeft:60 }}>
                <div style={{ marginBottom: 20, fontWeight: 'bold', fontSize: 20 }}>Assign KPI's</div>
                <div className="column" style={{ display: 'flex' }} >
                    <div style={{ width: '28%' }} >
                        <div className="title">KPI Title</div>
                        <div  style={{ marginTop: 3, width: '93%' }}>
                            <InputText className="textInput" value={kpiTitle} onChange={(e) => setKpiTitle(e.target.value)}  placeholder="Enter your KPI Title" />
                        </div>

                        {
                            formData.kpiTitle ? <span className="error">
                                {"Enter KPI Title"}
                            </span> : null
                        }
                    </div>
                    <div style={{ width: '28%' }} >
                        <div className="title">KPI Description</div>
                        <div  style={{ marginTop: 3, width: '93%' }}>
                            <InputText className="textInput" value={kpiDescription} onChange={(e) => setKpiDescription(e.target.value)}  placeholder="Enter your KPI Description" />
                        </div>

                        {
                            formData.description ? <span className="error">
                                {"Enter KPI Description"}
                            </span> : null
                        }
                    </div>
                    <div style={{ width: '28%' }} >
                        <div className="title">KPI Selection</div>
                        <div style={{ marginTop: 3, width: '93%' }}>
                            <Dropdown value={selectedKpi} onChange={(e) => setSelectedKpi(e.value)} options={JobIndicatorData.kpiSelection} optionLabel="name"
                                placeholder="Select a KPI"
                                style={{ width: '100%', fontSize: 14 }}
                                editable
                                className="textInput"
                                itemTemplate={countryOptionTemplate}
                            />
                        </div>

                        {
                            formData.selectKpi ? <span className="error">
                                {"Select KPI"}
                            </span> : null
                        }
                    </div>
                </div>

                <div className="row" style={{ borderRadius: 10, marginTop: 10, alignItems: 'center', width: '100%' }}>
                    <div style={{ width: '28%' }}>
                        <div className="title">Preset Time</div>
                        <div >
                            <Dropdown value={selectedPresetData} onChange={(e) => setSelectedPreset(e.value)} options={JobIndicatorData.presets} optionLabel="name"
                                placeholder="Select a Preset Time"
                                style={{ width: '100%', fontSize: 14 }}
                                editable
                                className="textInput"
                                itemTemplate={countryOptionTemplate}
                            />
                        </div>
                        {
                            <span className="error">
                                {formData.presetItem ? "Select a Preset Time" : ''}
                            </span>
                        }

                    </div>
                    <div style={{ width: '28%' }}>
                        <div className="title">Start Time</div>
                        <div >
                            <Calendar showTime value={startDate} onChange={(e) => setStartDate(e.value)} showIcon={true} minDate={minDate} maxDate={maxDate}
                                style={{ fontSize: 14, height: 40 }}
                                placeholder="Select Start Time"
                            ></Calendar>
                        </div>
                        {
                            <span className="error">
                                {formData.startDate ? "Select Start Time" : ''}
                            </span>
                        }

                    </div>
                    <div style={{ width: '28%' }} >
                        <div className="title" >End Time</div>
                        <div >
                            <Calendar showTime value={endDate} onChange={(e) => setEndDate(e.value)} showIcon={true} minDate={minDate} maxDate={maxDate}
                                 style={{ fontSize: 14, height: 40 }}
                                placeholder="Select End Time"
                            ></Calendar>
                        </div>
                        {
                            <span className="error">
                                {formData.endDate ? "Select End Time" : ''}
                            </span>
                        }
                    </div>
                </div>
                <div className="row mt-4" style={{ width: '89%' }}>
                    <div className="col">
                        <div class='componentWrapper' style={{ borderColor: 'lightgray' }}>
                            <div class="header">Target Group</div>
                            <div className="column" >
                                {/* <div class="header">Target Group</div> */}
                                <div className="row" >
                                    <div className="column" style={{ width: '50%' }}>
                                        <div className="title">Role</div>
                                        <div >
                                            {/* <InputText value={''} className="input" placeholder="Role"/> */}
                                            <MultiSelect value={selectedRoles} onChange={(e) => setSelectedRoles(e.value)} options={JobIndicatorData.roles} optionLabel="name"
                                                filter placeholder="Select Role" maxSelectedLabels={3} 
                                                display="chip"
                                                style={{ fontSize: 14, width: '100%' }}
                                                 className="textInput"
                                                 itemTemplate={countryOptionTemplate}
                                            />

                                        </div>
                                        {
                                            <span className="error">
                                                {formData.roleItem ? "Select role" : ''}
                                            </span>
                                        }
                                    </div>
                                    <div className="column" style={{ width: '50%' }}>
                                        <div className="title">Micro Role</div>
                                        <div >
                                            <MultiSelect value={selectedMicroRoles} onChange={(e) => setSelectedMicroRoles(e.value)} options={JobIndicatorData.microRoles} optionLabel="name"
                                                filter placeholder="Select Micro Role" maxSelectedLabels={3}  
                                                display="chip"
                                                style={{ fontSize: 14, width: '100%' }}
                                                itemTemplate={countryOptionTemplate}
className="textInput"
                                            />

                                        </div>
                                        {
                                            <span className="error">
                                                {formData.microRoleItem ? "Select Micro Role" : ''}
                                            </span>
                                        }
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="column" style={{ width: '50%' }}>
                                        <div className="title">Line</div>
                                        <div >
                                            <MultiSelect value={selectedLines} onChange={(e) => setSelectedLines(e.value)} options={JobIndicatorData.lines} optionLabel="name"
                                                filter placeholder="Select Line" maxSelectedLabels={3}  display="chip"
                                                style={{ fontSize: 14, width: '100%' }}
                                                className="textInput"
                                                itemTemplate={countryOptionTemplate}
                                            />

                                        </div>
                                        {
                                            <span className="error">
                                                {formData.lineItem ? "Select Line" : ''}
                                            </span>
                                        }
                                    </div>
                                    <div className="column" style={{ width: '50%' }}>
                                        <div className="title">Product Group</div>
                                        <div >
                                            <MultiSelect value={selectedProductGroups} onChange={(e) => setSelectedProductGroups(e.value)} options={JobIndicatorData.productGroup} optionLabel="name"
                                                filter placeholder="Select Product Group" maxSelectedLabels={3}  display="chip"
                                                style={{ fontSize: 14, width: '100%' }}
                                                className="textInput"
                                                itemTemplate={countryOptionTemplate}
                                            />

                                        </div>
                                        {
                                            <span className="error">
                                                {formData.productGroupItem ? "Select Product Group" : ''}
                                            </span>
                                        }
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="column" style={{ width: '50%' }}>
                                        <div className="title">Site</div>
                                        <div >
                                            <MultiSelect value={selectedSiteKpi} onChange={(e) => setSelectedSiteKpi(e.value)} options={JobIndicatorData.site} optionLabel="name"
                                                filter placeholder="Select Site" maxSelectedLabels={3}  display="chip"
                                                style={{ fontSize: 14, width: '100%' }}
                                                className="textInput"
                                                itemTemplate={countryOptionTemplate}
                                            />

                                        </div>
                                        {
                                            <span className="error">
                                                {formData.siteKpi ? "Select Site" : ''}
                                            </span>
                                        }
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div style={{ display: 'flex', width: '83%', alignItems: 'flex-end', justifyContent: 'flex-end', flexDirection: 'row', marginTop: 20, marginBottom: 20 }}>

                    <Button label="Cancel" rounded style={{ background: 'transparent', color: 'black', width: 130,padding:10, borderRadius: 10 }} />
                    <Button label="Submit" rounded style={{ borderRadius: 10, width: 130,padding:10, marginLeft: 10 }} onClick={onClickSubmitButton} />

                </div>
            </div>
        </div>
    )
}

export default AddKpiNew;
