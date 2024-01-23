import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import storeRequest from '../service/storeRequest';

function EditCard(props) {
  const { show, setShow, object, setChange } = props;
  const [price, setPrice] = useState(object.price);
  const [stock, setStock] = useState(object.number);
  const id = object.id;

  const handleUpdate = async () => {
    let ItemObj = {
      id, price, stock
    }
    let res = await storeRequest.updateItem(ItemObj)
    setChange(pre => {
      pre ? pre = 0 : pre = 1;
      return pre
    })
    handleClose()
    alert(res)
  };

  const handleClose = () => setShow(false);
  const handleDelete = async () => {
    if (confirm("Click OK to delete")) {
      let res = await storeRequest.deleteItem({ id })
      alert(res)
    }
    setChange(pre => {
      pre ? pre = 0 : pre = 1;
      return pre
    })
  }

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{object.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">Price</span>
            </div>
            <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" value={price} onChange={(e) => { setPrice(e.target.value) }} />
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">Stock</span>
            </div>
            <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" value={stock} onChange={(e) => { setStock(e.target.value) }} />
          </div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleUpdate}>
            Update
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default EditCard