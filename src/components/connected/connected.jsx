import { AgGridReact } from 'ag-grid-react' // AG Grid Component
import 'ag-grid-community/styles/ag-grid.css' // Mandatory CSS required by the grid
import 'ag-grid-community/styles/ag-theme-material.css' // Optional Theme applied to the grid
import './connected.scss'
import { useEffect, useState } from 'react'

const Connected = (props) => {
  // Row Data: The data to be displayed.
  const [rowData, setRowData] = useState(props.candidates)

  // Column Definitions: Defines the columns to be displayed.
  const [colDefs, setColDefs] = useState([{ field: 'index' }, { field: 'name' }, { field: 'voteCount' }])

  useEffect(() => {
    setRowData(props.candidates)
  }, [props.candidates])

  return (
    <>
      <div className='connected-container'>
        <h1 className='connected-header'>You are Connected to Metamask</h1>
        <p className='connected-account'>Metamask Account: {props.account}</p>
        <p className='connected-account'>Remaining Time: {props.remainingTime}</p>
        {props.showButton ? (
          <p className='connected-account'>You have already voted</p>
        ) : (
          <div className='connected-input'>
            <input type='number' placeholder='Entern Candidate Index' value={props.number} onChange={props.handleNumberChange}></input>
            <br />
            <button className='login-button' onClick={props.voteFunction}>
              Vote
            </button>
          </div>
        )}
        <div className='candidates-table'>
          <div className='ag-theme-material-dark' style={{ height: 350, width: 600 }}>
            <AgGridReact rowData={rowData} columnDefs={colDefs} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Connected
