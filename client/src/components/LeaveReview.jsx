import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/LeaveReview.css'
import Rating from './mui-components/rating'
// import HeartRating from './mui-components/HeartRating'
import Cauldron from './icons/cauldronyellow.png'


function LeaveReview() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>


      <button onClick={handleShow} className="review-button">Leave a Review :)</button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className='review-modal-title'>Thanks for trying out this recipe! Feel free to tell us your thoughts.</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form className="p-4 md:p-5">
                      <div className="grid gap-4 mb-4 grid-cols-2">
                          <div className="col-span-2">
                              <label id='input-text' for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username:</label>
                              <input type="text" name="name" id="review-modal-text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave empty to stay anonymous" required="" />
                          </div>
                          <div className="col-span-2 sm:col-span-1">
                              <label id='input-text' for="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Recipe:</label>
                              <select id="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                {/* this should later be coded as {recipe.name} */}
                                  <option selected="">Ponyo Ham Ramen</option>
                              </select>
                          </div>


                        

                          <div className="col-span-2">
                              <label id='input-text' for="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Review</label>
                              <textarea id="review-modal-text" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Start typing..."></textarea>                    
                          </div>
                      </div>

                      {/* <Rating /> */}

                      {/* <HeartRating /> */}
                      
                  </form>
        </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary" onClick={handleClose}>
            Close
          </Button> */}

          <button onClick={handleClose} type="submit" className="text-white inline-flex items-center bg-red-900 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Close
          </button>

          <button id="submit" type="submit" className="text-white inline-flex items-center bg-red-900 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <svg className="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
            Submit Review
          </button>
          {/* <Button variant="primary">Understood</Button> */}
        </Modal.Footer>
      </Modal>



{/* <!-- Modal toggle --> */}
      {/* <button data-modal-target="crud-modal" data-modal-toggle="crud-modal" class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
        Toggle modal
      </button> */}
      {/* <button onClick={handleShow} className="review-button">Leave a Review :)</button> */}

    </>
  );
}

export default LeaveReview;