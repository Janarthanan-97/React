import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


function PrintBill(props) {

  const { show, setShow, array, total, setCustomerNumber, setTotal, setArray } = props;
  const handleClose = () => {
    setCustomerNumber('');
    setArray([])
    setTotal(0)
    setShow(false)
  };
  const handlePrint = () => {
    window.print()
  }
  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Print Bill</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <table className='table'>
            <thead>
              <tr>
                <th>S.no</th>
                <th>Item</th>
                <th>No of Item</th>
                <th>Rs</th>
              </tr>
            </thead>
            <tbody>
              {array.map((e, index) => {
                return (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{e.item}</td>
                    <td>{e.numOfItem}</td>
                    <td>{e.price}</td>
                  </tr>
                )
              })}
              <tr>
                <td colSpan='3'>Total</td>
                <td>{total}</td>
              </tr>
            </tbody>
          </table>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={handlePrint}>
            Print
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default PrintBill