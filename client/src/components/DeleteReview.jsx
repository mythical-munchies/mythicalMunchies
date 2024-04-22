{/* <button data-modal-target="popup-modal" data-modal-toggle="popup-modal" class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
Toggle modal
</button> */}

import { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import { mockReviews } from "../ReviewData";
import DogFrog from "../images/dog-frog.jpg";
import Sandy from "../images/sandy.jpg"
import "../styles/DeleteReview.css"

function DeleteReview(){
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
return(
<>
<button onClick={handleShow} className="delete-review">
<svg className="w-[25px] h-[25px] text-red-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"/>
</svg>
</button>

<Modal
 show={show}
 onHide={handleClose}
 backdrop="static"
 keyboard={false}
>
<Modal.Header closeButton>
          <Modal.Title className='review-modal-title'>Are you sure you want to delete this review?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div id="review-info">
            <div id="review-info">
              <a href="somesite.com" className="review-recipe-title">Sandy's Texas Corn Ribs</a>
              <p className="review-date">April 14, 2024</p>
              <img className="delete-img" src={Sandy} alt="dog-frog" />

              <p className="warning">*This action cant be undone*</p>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary" onClick={handleClose}>
            Close
          </Button> */}

          <button onClick={handleClose} id="delete-review-modal-button" type="submit" className="text-white inline-flex items-center bg-red-900 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Close
          </button>

          <button id="submit" type="submit" className="text-white inline-flex items-center bg-red-900 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Delete
          </button>
          {/* <Button variant="primary">Understood</Button> */}
        </Modal.Footer>
</Modal>
</>
);
  };

  export default DeleteReview
