import SVBMaster from './svbMaster'



const columns = [
    { id: 'sNo', numeric: false, minWidth: 70, isSortable: false, default: true, display: false, label: 'S.NO', sticky: true, left: 54 },
    { id: 'svbRefNo', numeric: false, minWidth: 190, isSortable: false, default: true, display: false, label: 'SVB Reference No', sticky: true , left: 124},
    { id: 'companyCode', numeric: false, minWidth: 200, isSortable: false, default: true, display: false, label: 'Customer Code'},
    { id: 'companyName', numeric: false, minWidth: 200, isSortable: false, default: true, display: false, label: 'Customer Name'},
    { id: 'shipperCode', numeric: false, minWidth: 200, isSortable: false, default: true, display: false, label: 'Shipper Code'},
    { id: 'shipperName', numeric: false, minWidth: 220, isSortable: false, default: true, display: false, label: 'Shipper Name'},
    { id: 'relation', numeric: false, minWidth: 200, isSortable: false, default: true, display: false, label: 'Relation'},
    { id: 'svbRefDate', numeric: false, minWidth: 160, isSortable: false, default: true, display: false, label: 'SVB Date'},
    { id: 'svbValidupto', numeric: false, minWidth: 180, isSortable: false, default: true, display: false, label: 'SVB Valid upto'},
    { id: 'svbCustomHouseCode', numeric: false, minWidth: 200, isSortable: false, default: true, display: false, label: 'Customs Office '},
    { id: 'toBeLoadedOn', numeric: false, minWidth: 200, isSortable: false, default: true, display: false, label: 'To be Loaded on'},
    { id: 'svbLoadAssessableValue', numeric: false, minWidth: 250, isSortable: false, default: true, display: false, label: 'Loading Rate Assessble Value'},
    { id: 'assesableStatus', numeric: false, minWidth: 140, isSortable: false, default: true, display: false, label: 'Assbl Status'},
    { id: 'svbLoadOnDuty', numeric: false, minWidth: 200, isSortable: false, default: true, display: false, label: 'Loading Rate Duty'},
    { id: 'dutyStatus', numeric: false, minWidth: 140, isSortable: false, default: true, display: false, label: 'Duty Status'},
    { id: 'createdBy', numeric:false , minWidth:140, label: 'Created By' },
    { id: 'updatedBy', numeric:false , minWidth:140, label: 'Updated By' },
    { id: 'duplicateValues', numeric: false, minWidth: 80, isSortable: false, default: true, display: false, label: '', sticky: true, right: 0 },
];

function App() {
  return (
    <SVBMaster    columns={columns}/>
  
  );
}

export default App;
