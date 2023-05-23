import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { styled } from '@mui/system';
import AddCircleOutline from '@mui/icons-material/AddCircleOutline';
import TableSortLabel from '@mui/material/TableSortLabel';
import Checkbox from '@mui/material/Checkbox';
import { MenuList,MenuItem,Grid } from '@mui/material';
import { Fade } from '@mui/material';

const listData=[]
const ListHeader = (props) => {
    const { columns } = props;

    //  classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort, iconClicked,handleEditSvbItem
    // const createSortHandler = (property) => (event) => {
    //   // onRequestSort(event, property);
    // };
    

  return (

      <TableHead >
        <TableRow >
          <TableCell padding="checkbox" /*className={classes.stickyHeader}*/ >
            <Checkbox
            //   indeterminate={numSelected > 0 && numSelected < rowCount}
            //   checked={rowCount > 0 && numSelected === rowCount}
            //   onChange={onSelectAllClick}
            />
          </TableCell>
          {columns.map((headCell) => (
            <TableCell
              //className={clsx({ [classes.displayColumn]: !(headCell.default) })}
              //className={headCell.sticky?classes.stickyHeader:classes.header}
              style={{ minWidth: headCell.minWidth, width:headCell.width, left:headCell.left, right: headCell.right }}
              key={headCell.id}
              align={headCell.numeric ? 'center' : 'left'}
              //sortDirection={orderBy === headCell.id ? order : false}
            >
            {headCell.id !== 'action' ? <TableSortLabel
                // IconComponent = {ImportExportIcon}
                // active={headCell.isSortable}
                // hideSortIcon = {headCell.isSortable}
                // direction={orderBy === headCell.id ? order : 'asc'}
                // onClick={createSortHandler(headCell.id)}
              >
                {headCell.label}
                {/* {orderBy === headCell.id ? (
                  <span className={classes.visuallyHidden}>
                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                  </span>
                ) : null} */}
              </TableSortLabel> : <AddCircleOutline /*onClick={iconClicked}*/  style={{position:'relative', left:'12%',width:"48px", top:'4px'}}/>} 
            </TableCell>
          ))}
        </TableRow>
      </TableHead>

    );
  }


function SVBMaster(props) {
    return (
        <TableContainer /*className={classes.container}*/>
        <Table /*className={classes.table}*/ stickyHeader aria-label="sticky table">
          <ListHeader
          // iconClicked={iconClicked}
            columns={props.columns}
            // classes={classes}
            // className={classes.title}
            // color="inherit"
            // order={order}
            // numSelected={selected.length}
            // handleEditSvbItem={handleEditSvbItem}
            // onSelectAllClick={handleSelectAllClick}
            // rowCount={listData?.length}

          />
           <TableBody >
                  {
                  listData?.map((row, index) => {
                    if (row.isActive === true) {
                      const id= (row.svbRefNo+"#"+row.sortKey)
                        //const isItemSelected = isSelected(id);
                        const labelId = `enhanced-table-checkbox-${index}`;
                       // indexcount++
                        return (
                          <TableRow
                            //className = {classes.tableRow}
                            role="checkbox"
                          //  aria-checked={isItemSelected}
                            tabIndex={-1}
                            key={row._id}	
                           // selected={isItemSelected}

                          >
                            <TableCell padding="checkbox" /*className={classes.checkBoxTableCell}*/>
                              <Checkbox
                                //onClick={(event) => handleClick(event, row, id)}
                                //checked={isItemSelected}
                                inputProps={{ 'aria-labelledby': labelId }}
                              />
                            </TableCell>
                            {props.columns.map((column,indx) => {
                                return (
                                  <TableCell key={column.id}
                                    //className={column.sticky?classes.tableBodySticky:classes.tableBody}
                                    align={column.numeric ? 'center' : 'left'}
                                    style={{ minWidth: column.minWidth, left:column.left,right:column.right, zIndex:column.sticky?40:null, position:"sticky", backgroundColor:"inherit"  }}> 
                                    
                                      {/* {indx === 0 ? 
                                      indexcount:
                                        (indx === (len - 1) ?	
                                    <Grid>	
                                      <IconButton
                                  //className={classes.ThreeDot}
                                  //ref={anchorRef}
                                  aria-controls={open ? 'menu-list-grow' : undefined}
                                  aria-haspopup="true"
                                  //onClick={(event) => handleClickVertIcon("bottom-end", event, index)}
                                  aria-describedby={index} >
                                  <MoreVertIcon />
                                </IconButton>
                                {selectedID === index ? (<Popper
                                  style={{ zIndex: 65 }}
                                  //open={open}
                                  //anchorEl={anchorEl}
                                 // placement={placement}
                                  transition
                                  // disablePortal	
                                  id={index}
                                >
                                  {({ TransitionProps }) => (
                                    <Fade {...TransitionProps} timeout={150}>
                                      <Paper>
                                       
                                      </Paper>
                                    </Fade>
                                  )}
                                </Popper>) : null
                                      }	
                                    </Grid>
                                          : (typeof(row[column.id])==='object')? row[column.id]?.join(" , "):((row[column.id])==='C')? "Active":((row[column.id])==='O' &&(row[column.id])==='R')? "InActive" :(column.id==="branch" && row.branch === undefined)? 0:(row[column.id]===undefined)?"":row[column.id] )} */}
                                  </TableCell>
                                );
                              }
                            )}

                          </TableRow>
                        );
                      }
                        })}
                  {/* {!(dataCount) ? (
                  <div className={classes.tableData} >
                    <div >
                      <img className={classes.fileImg} src={props.picture} alt={props.pictureName}  ></img>
                    </div>
                    <div className={classes.tableDataLabel}>
                      {(filterChange >= 0) ? (props.displayContent[0]) : (props.displayContent[1])}
                    </div>
                    
                  </div>) : (null)} */}
                </TableBody>
          </Table>
          </TableContainer>
           
    
    );
  }
  
  export default SVBMaster;
  

//    {/* <ClickAwayListener /*onClickAway={handleCloseVertIcon}*/ >
//    <MenuList autoFocusItem={open}>
//    <MenuItem /* onClick={() => handleDuplicateSvb(row)} */>Duplicate Svb</MenuItem>
//  </MenuList>
// </ClickAwayListener> */}